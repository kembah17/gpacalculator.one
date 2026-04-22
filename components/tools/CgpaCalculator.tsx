'use client';

import { useState, useMemo, useCallback } from 'react';
import CopyButton from '@/components/ui/CopyButton';

interface Semester {
  id: string;
  name: string;
  gpa: number;
  creditHours: number;
}

const SCALES = [
  { label: '4.0 Scale', max: 4.0 },
  { label: '5.0 Scale', max: 5.0 },
  { label: '7.0 Scale', max: 7.0 },
  { label: '10.0 Scale', max: 10.0 },
];

let idCounter = 0;
const uid = () => `cgpa-${++idCounter}-${Date.now()}`;

const createSemester = (num: number): Semester => ({
  id: uid(),
  name: `Semester ${num}`,
  gpa: 0,
  creditHours: 15,
});

export default function CgpaCalculator() {
  const [semesters, setSemesters] = useState<Semester[]>([
    createSemester(1),
    createSemester(2),
  ]);
  const [scaleIndex, setScaleIndex] = useState(0);
  const scale = SCALES[scaleIndex];

  const updateSemester = useCallback(
    (id: string, field: keyof Semester, value: string | number) => {
      setSemesters((prev) =>
        prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
      );
    },
    []
  );

  const addSemester = useCallback(() => {
    setSemesters((prev) => [...prev, createSemester(prev.length + 1)]);
  }, []);

  const removeSemester = useCallback((id: string) => {
    setSemesters((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setSemesters([createSemester(1), createSemester(2)]);
  }, []);

  const results = useMemo(() => {
    let totalCredits = 0;
    let totalPoints = 0;
    const running: { name: string; gpa: number; cumGpa: number; credits: number }[] = [];

    semesters.forEach((sem) => {
      totalCredits += sem.creditHours;
      totalPoints += sem.gpa * sem.creditHours;
      const cumGpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
      running.push({
        name: sem.name,
        gpa: sem.gpa,
        cumGpa,
        credits: sem.creditHours,
      });
    });

    const cgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return { running, cgpa, totalCredits };
  }, [semesters]);

  const resultsText = useMemo(() => {
    let text = `CGPA Results (${scale.label})\n`;
    text += '='.repeat(30) + '\n';
    results.running.forEach((r) => {
      text += `${r.name}: GPA ${r.gpa.toFixed(2)}, Cumulative ${r.cumGpa.toFixed(2)} (${r.credits} credits)\n`;
    });
    text += '='.repeat(30) + '\n';
    text += `Cumulative GPA: ${results.cgpa.toFixed(2)} / ${scale.max.toFixed(1)} (${results.totalCredits} total credits)\n`;
    return text;
  }, [results, scale]);

  const inputStyle: React.CSSProperties = {
    padding: '0.5rem 0.75rem',
    border: '1px solid var(--color-border)',
    borderRadius: '0.375rem',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    fontSize: '0.875rem',
    width: '100%',
  };

  const btnPrimary: React.CSSProperties = {
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-primary-text)',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.875rem',
  };

  const btnOutline: React.CSSProperties = {
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid var(--color-primary)',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.875rem',
  };

  const btnDanger: React.CSSProperties = {
    padding: '0.375rem 0.75rem',
    backgroundColor: 'transparent',
    color: 'var(--color-error)',
    border: '1px solid var(--color-error)',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.8125rem',
  };

  const chartMax = scale.max;
  const barMaxHeight = 160;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Scale Selector */}
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border-light)',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <label
          style={{
            display: 'block',
            fontWeight: 600,
            marginBottom: '0.5rem',
            color: 'var(--color-text)',
          }}
        >
          Grading Scale
        </label>
        <select
          value={scaleIndex}
          onChange={(e) => setScaleIndex(Number(e.target.value))}
          aria-label="Select grading scale"
          style={{ ...inputStyle, width: 'auto', minWidth: '160px', cursor: 'pointer' }}
        >
          {SCALES.map((s, i) => (
            <option key={i} value={i}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Semester Inputs */}
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border-light)',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '1rem',
            color: 'var(--color-text)',
          }}
        >
          📝 Enter Semester Data
        </h3>

        {/* Headers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr auto',
            gap: '0.5rem',
            marginBottom: '0.5rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          <span>Semester</span>
          <span>GPA (0–{scale.max})</span>
          <span>Credit Hours</span>
          <span style={{ width: '36px' }}></span>
        </div>

        {semesters.map((sem) => (
          <div
            key={sem.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr auto',
              gap: '0.5rem',
              marginBottom: '0.5rem',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              value={sem.name}
              onChange={(e) => updateSemester(sem.id, 'name', e.target.value)}
              aria-label="Semester name"
              style={inputStyle}
            />
            <input
              type="number"
              value={sem.gpa}
              onChange={(e) =>
                updateSemester(
                  sem.id,
                  'gpa',
                  Math.min(scale.max, Math.max(0, Number(e.target.value)))
                )
              }
              min={0}
              max={scale.max}
              step={0.01}
              aria-label="Semester GPA"
              style={inputStyle}
            />
            <input
              type="number"
              value={sem.creditHours}
              onChange={(e) =>
                updateSemester(sem.id, 'creditHours', Math.max(0, Number(e.target.value)))
              }
              min={0}
              max={60}
              aria-label="Credit hours"
              style={inputStyle}
            />
            <button
              onClick={() => removeSemester(sem.id)}
              disabled={semesters.length <= 1}
              aria-label="Remove semester"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-border)',
                borderRadius: '0.375rem',
                backgroundColor: 'transparent',
                color: semesters.length <= 1 ? 'var(--color-text-muted)' : 'var(--color-error)',
                cursor: semesters.length <= 1 ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
              }}
            >
              ✕
            </button>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
          <button onClick={addSemester} style={btnPrimary}>
            + Add Semester
          </button>
          <button onClick={clearAll} style={btnOutline}>
            ↺ Clear All
          </button>
        </div>
      </div>

      {/* GPA Trend Chart */}
      {semesters.length > 0 && (
        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border-light)',
            borderRadius: '0.75rem',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--color-text)',
            }}
          >
            📈 GPA Trend
          </h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '0.5rem',
              height: `${barMaxHeight + 40}px`,
              padding: '0 0.5rem',
              borderBottom: '2px solid var(--color-border)',
            }}
          >
            {results.running.map((r, i) => {
              const height = chartMax > 0 ? (r.gpa / chartMax) * barMaxHeight : 0;
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                    }}
                  >
                    {r.gpa.toFixed(1)}
                  </span>
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '60px',
                      height: `${Math.max(height, 4)}px`,
                      backgroundColor: 'var(--color-primary)',
                      borderRadius: '0.25rem 0.25rem 0 0',
                      transition: 'height 0.3s',
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '0.5rem 0.5rem 0',
            }}
          >
            {results.running.map((r, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: '0.6875rem',
                  color: 'var(--color-text-muted)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {r.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Panel */}
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '2px solid var(--color-primary)',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--color-text)',
          }}
        >
          📊 CGPA Results
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          {results.running.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--color-border-light)',
                fontSize: '0.9375rem',
                flexWrap: 'wrap',
                gap: '0.25rem',
              }}
            >
              <span style={{ color: 'var(--color-text-secondary)' }}>
                {r.name} ({r.credits} cr) — GPA: {r.gpa.toFixed(2)}
              </span>
              <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                Cum: {r.cumGpa.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--color-primary-light)',
            borderRadius: '0.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-muted)',
              marginBottom: '0.25rem',
            }}
          >
            Cumulative GPA ({scale.label})
          </div>
          <div
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--color-primary-dark)',
            }}
          >
            {results.cgpa.toFixed(2)}
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            {results.totalCredits} total credit hours
          </div>
        </div>

        <CopyButton text={resultsText} />
      </div>
    </div>
  );
}
