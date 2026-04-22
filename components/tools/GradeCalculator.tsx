'use client';

import { useState, useMemo, useCallback } from 'react';
import CopyButton from '@/components/ui/CopyButton';

interface Assignment {
  id: string;
  name: string;
  score: number;
  maxScore: number;
}

interface Category {
  id: string;
  name: string;
  weight: number;
  assignments: Assignment[];
}

let idCounter = 0;
const uid = () => `gc-${++idCounter}-${Date.now()}`;

const createAssignment = (num: number): Assignment => ({
  id: uid(),
  name: `Assignment ${num}`,
  score: 0,
  maxScore: 100,
});

const createCategory = (name: string, weight: number): Category => ({
  id: uid(),
  name,
  weight,
  assignments: [createAssignment(1)],
});

export default function GradeCalculator() {
  const [categories, setCategories] = useState<Category[]>([
    createCategory('Homework', 20),
    createCategory('Midterm', 30),
    createCategory('Final', 50),
  ]);
  const [usePoints, setUsePoints] = useState(false);
  const [targetGrade, setTargetGrade] = useState(90);
  const [targetCategory, setTargetCategory] = useState('');

  const updateCategory = useCallback(
    (catId: string, field: keyof Category, value: string | number) => {
      setCategories((prev) =>
        prev.map((c) => (c.id === catId ? { ...c, [field]: value } : c))
      );
    },
    []
  );

  const updateAssignment = useCallback(
    (catId: string, asnId: string, field: keyof Assignment, value: string | number) => {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === catId
            ? {
                ...c,
                assignments: c.assignments.map((a) =>
                  a.id === asnId ? { ...a, [field]: value } : a
                ),
              }
            : c
        )
      );
    },
    []
  );

  const addAssignment = useCallback((catId: string) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === catId
          ? {
              ...c,
              assignments: [
                ...c.assignments,
                createAssignment(c.assignments.length + 1),
              ],
            }
          : c
      )
    );
  }, []);

  const removeAssignment = useCallback((catId: string, asnId: string) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === catId
          ? { ...c, assignments: c.assignments.filter((a) => a.id !== asnId) }
          : c
      )
    );
  }, []);

  const addCategory = useCallback(() => {
    setCategories((prev) => [...prev, createCategory(`Category ${prev.length + 1}`, 0)]);
  }, []);

  const removeCategory = useCallback((catId: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== catId));
  }, []);

  const clearAll = useCallback(() => {
    setCategories([
      createCategory('Homework', 20),
      createCategory('Midterm', 30),
      createCategory('Final', 50),
    ]);
  }, []);

  const totalWeight = useMemo(
    () => categories.reduce((sum, c) => sum + c.weight, 0),
    [categories]
  );

  const categoryAverages = useMemo(() => {
    return categories.map((cat) => {
      if (cat.assignments.length === 0) return { ...cat, average: 0 };
      if (usePoints) {
        const totalScore = cat.assignments.reduce((s, a) => s + a.score, 0);
        const totalMax = cat.assignments.reduce((s, a) => s + a.maxScore, 0);
        return { ...cat, average: totalMax > 0 ? (totalScore / totalMax) * 100 : 0 };
      } else {
        const percentages = cat.assignments.map((a) =>
          a.maxScore > 0 ? (a.score / a.maxScore) * 100 : 0
        );
        const avg =
          percentages.length > 0
            ? percentages.reduce((s, p) => s + p, 0) / percentages.length
            : 0;
        return { ...cat, average: avg };
      }
    });
  }, [categories, usePoints]);

  const currentGrade = useMemo(() => {
    if (totalWeight === 0) return 0;
    const weighted = categoryAverages.reduce(
      (sum, c) => sum + (c.average * c.weight) / 100,
      0
    );
    return (weighted / totalWeight) * 100;
  }, [categoryAverages, totalWeight]);

  const neededScore = useMemo(() => {
    if (!targetCategory) return null;
    const targetCat = categories.find((c) => c.id === targetCategory);
    if (!targetCat || targetCat.weight === 0) return null;

    const otherWeighted = categoryAverages
      .filter((c) => c.id !== targetCategory)
      .reduce((sum, c) => sum + (c.average * c.weight) / 100, 0);

    const needed =
      ((targetGrade * totalWeight) / 100 - otherWeighted) /
      (targetCat.weight / 100);
    return needed;
  }, [targetCategory, targetGrade, categoryAverages, categories, totalWeight]);

  const getLetterGrade = (pct: number): string => {
    if (pct >= 93) return 'A';
    if (pct >= 90) return 'A-';
    if (pct >= 87) return 'B+';
    if (pct >= 83) return 'B';
    if (pct >= 80) return 'B-';
    if (pct >= 77) return 'C+';
    if (pct >= 73) return 'C';
    if (pct >= 70) return 'C-';
    if (pct >= 67) return 'D+';
    if (pct >= 63) return 'D';
    if (pct >= 60) return 'D-';
    return 'F';
  };

  const resultsText = useMemo(() => {
    let text = 'Grade Calculator Results\n';
    text += '='.repeat(30) + '\n';
    categoryAverages.forEach((c) => {
      text += `${c.name} (${c.weight}%): ${c.average.toFixed(1)}%\n`;
    });
    text += '='.repeat(30) + '\n';
    text += `Current Grade: ${currentGrade.toFixed(2)}% (${getLetterGrade(currentGrade)})\n`;
    if (neededScore !== null) {
      text += `Needed Score: ${neededScore.toFixed(1)}%\n`;
    }
    return text;
  }, [categoryAverages, currentGrade, neededScore]);

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Grading Mode Toggle */}
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border-light)',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>Grading Mode:</span>
        <button
          onClick={() => setUsePoints(false)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            border: '1px solid var(--color-border)',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: '0.875rem',
            backgroundColor: !usePoints ? 'var(--color-primary)' : 'transparent',
            color: !usePoints ? 'var(--color-primary-text)' : 'var(--color-text)',
          }}
        >
          Percentage
        </button>
        <button
          onClick={() => setUsePoints(true)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            border: '1px solid var(--color-border)',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: '0.875rem',
            backgroundColor: usePoints ? 'var(--color-primary)' : 'transparent',
            color: usePoints ? 'var(--color-primary-text)' : 'var(--color-text)',
          }}
        >
          Points
        </button>

        {totalWeight !== 100 && (
          <span
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-error)',
              fontWeight: 600,
            }}
          >
            ⚠ Weights sum to {totalWeight}% (should be 100%)
          </span>
        )}
      </div>

      {/* Categories */}
      {categories.map((cat) => (
        <div
          key={cat.id}
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border-light)',
            borderRadius: '0.75rem',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <input
              type="text"
              value={cat.name}
              onChange={(e) => updateCategory(cat.id, 'name', e.target.value)}
              aria-label="Category name"
              style={{ ...inputStyle, width: 'auto', maxWidth: '180px', fontWeight: 600 }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <label style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>Weight:</label>
              <input
                type="number"
                value={cat.weight}
                onChange={(e) =>
                  updateCategory(cat.id, 'weight', Math.max(0, Number(e.target.value)))
                }
                min={0}
                max={100}
                aria-label="Category weight"
                style={{ ...inputStyle, width: '70px' }}
              />
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>%</span>
            </div>
            {categories.length > 1 && (
              <button
                onClick={() => removeCategory(cat.id)}
                style={btnDanger}
                aria-label={`Remove ${cat.name}`}
              >
                ✕ Remove
              </button>
            )}
          </div>

          {/* Assignment Headers */}
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
            <span>Assignment</span>
            <span>Score</span>
            <span>Max Score</span>
            <span style={{ width: '36px' }}></span>
          </div>

          {cat.assignments.map((asn) => (
            <div
              key={asn.id}
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
                value={asn.name}
                onChange={(e) => updateAssignment(cat.id, asn.id, 'name', e.target.value)}
                aria-label="Assignment name"
                style={inputStyle}
              />
              <input
                type="number"
                value={asn.score}
                onChange={(e) =>
                  updateAssignment(cat.id, asn.id, 'score', Math.max(0, Number(e.target.value)))
                }
                min={0}
                aria-label="Score"
                style={inputStyle}
              />
              <input
                type="number"
                value={asn.maxScore}
                onChange={(e) =>
                  updateAssignment(cat.id, asn.id, 'maxScore', Math.max(1, Number(e.target.value)))
                }
                min={1}
                aria-label="Max score"
                style={inputStyle}
              />
              <button
                onClick={() => removeAssignment(cat.id, asn.id)}
                disabled={cat.assignments.length <= 1}
                aria-label="Remove assignment"
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.375rem',
                  backgroundColor: 'transparent',
                  color: cat.assignments.length <= 1 ? 'var(--color-text-muted)' : 'var(--color-error)',
                  cursor: cat.assignments.length <= 1 ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                }}
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={() => addAssignment(cat.id)}
            style={{ ...btnOutline, marginTop: '0.5rem' }}
          >
            + Add Assignment
          </button>

          {/* Category Average */}
          <div
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--color-primary-light)',
              borderRadius: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
              {cat.name} Average
            </span>
            <span
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'var(--color-primary-dark)',
              }}
            >
              {categoryAverages.find((c) => c.id === cat.id)?.average.toFixed(1) ?? '0.0'}%
            </span>
          </div>
        </div>
      ))}

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button onClick={addCategory} style={btnPrimary}>
          + Add Category
        </button>
        <button onClick={clearAll} style={btnOutline}>
          ↺ Clear All
        </button>
      </div>

      {/* What Do I Need Calculator */}
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
          🎯 What Do I Need?
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--color-text-muted)',
                marginBottom: '0.25rem',
              }}
            >
              Target Grade (%)
            </label>
            <input
              type="number"
              value={targetGrade}
              onChange={(e) => setTargetGrade(Number(e.target.value))}
              min={0}
              max={100}
              aria-label="Target grade"
              style={{ ...inputStyle, width: '100px' }}
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--color-text-muted)',
                marginBottom: '0.25rem',
              }}
            >
              Calculate for
            </label>
            <select
              value={targetCategory}
              onChange={(e) => setTargetCategory(e.target.value)}
              aria-label="Select category"
              style={{ ...inputStyle, width: 'auto', minWidth: '160px', cursor: 'pointer' }}
            >
              <option value="">Select category...</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {neededScore !== null && (
          <div
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              backgroundColor:
                neededScore <= 100 ? 'var(--color-primary-light)' : 'var(--color-surface-alt)',
              borderRadius: '0.5rem',
              border: neededScore > 100 ? '1px solid var(--color-error)' : 'none',
            }}
          >
            {neededScore <= 100 && neededScore >= 0 ? (
              <p style={{ margin: 0, color: 'var(--color-text)' }}>
                You need <strong style={{ color: 'var(--color-primary-dark)', fontSize: '1.125rem' }}>{neededScore.toFixed(1)}%</strong> in{' '}
                <strong>{categories.find((c) => c.id === targetCategory)?.name}</strong> to get a{' '}
                {targetGrade}% overall.
              </p>
            ) : (
              <p style={{ margin: 0, color: 'var(--color-error)' }}>
                ⚠ You would need <strong>{neededScore.toFixed(1)}%</strong> which is{' '}
                {neededScore > 100 ? 'above 100%' : 'below 0%'} — this target may not be achievable
                through this category alone.
              </p>
            )}
          </div>
        )}
      </div>

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
          📊 Grade Results
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          {categoryAverages.map((c) => (
            <div
              key={c.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--color-border-light)',
                fontSize: '0.9375rem',
              }}
            >
              <span style={{ color: 'var(--color-text-secondary)' }}>
                {c.name} ({c.weight}%)
              </span>
              <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                {c.average.toFixed(1)}%
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
            Current Grade
          </div>
          <div
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--color-primary-dark)',
            }}
          >
            {currentGrade.toFixed(2)}%
          </div>
          <div
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginTop: '0.25rem',
            }}
          >
            Letter Grade: {getLetterGrade(currentGrade)}
          </div>
        </div>

        <CopyButton text={resultsText} />
      </div>
    </div>
  );
}
