'use client';

import { useState, useCallback, useMemo } from 'react';
import CopyButton from '@/components/ui/CopyButton';

interface Course {
  id: string;
  name: string;
  creditHours: number;
  grade: string;
}

interface Semester {
  id: string;
  name: string;
  courses: Course[];
}

const GRADE_SCALE: { grade: string; points: number }[] = [
  { grade: 'A+', points: 4.0 },
  { grade: 'A', points: 4.0 },
  { grade: 'A-', points: 3.7 },
  { grade: 'B+', points: 3.3 },
  { grade: 'B', points: 3.0 },
  { grade: 'B-', points: 2.7 },
  { grade: 'C+', points: 2.3 },
  { grade: 'C', points: 2.0 },
  { grade: 'C-', points: 1.7 },
  { grade: 'D+', points: 1.3 },
  { grade: 'D', points: 1.0 },
  { grade: 'D-', points: 0.7 },
  { grade: 'F', points: 0.0 },
];

const gradeToPoints = (grade: string): number => {
  const found = GRADE_SCALE.find((g) => g.grade === grade);
  return found ? found.points : 0;
};

let idCounter = 0;
const uid = () => `id-${++idCounter}-${Date.now()}`;

const createCourse = (): Course => ({
  id: uid(),
  name: '',
  creditHours: 3,
  grade: 'A',
});

const createSemester = (num: number): Semester => ({
  id: uid(),
  name: `Semester ${num}`,
  courses: [createCourse(), createCourse(), createCourse()],
});

export default function GpaCalculator() {
  const [semesters, setSemesters] = useState<Semester[]>([
    createSemester(1),
  ]);

  const updateCourse = useCallback(
    (semId: string, courseId: string, field: keyof Course, value: string | number) => {
      setSemesters((prev) =>
        prev.map((sem) =>
          sem.id === semId
            ? {
                ...sem,
                courses: sem.courses.map((c) =>
                  c.id === courseId ? { ...c, [field]: value } : c
                ),
              }
            : sem
        )
      );
    },
    []
  );

  const addCourse = useCallback((semId: string) => {
    setSemesters((prev) =>
      prev.map((sem) =>
        sem.id === semId
          ? { ...sem, courses: [...sem.courses, createCourse()] }
          : sem
      )
    );
  }, []);

  const removeCourse = useCallback((semId: string, courseId: string) => {
    setSemesters((prev) =>
      prev.map((sem) =>
        sem.id === semId
          ? { ...sem, courses: sem.courses.filter((c) => c.id !== courseId) }
          : sem
      )
    );
  }, []);

  const addSemester = useCallback(() => {
    setSemesters((prev) => [...prev, createSemester(prev.length + 1)]);
  }, []);

  const removeSemester = useCallback((semId: string) => {
    setSemesters((prev) => prev.filter((s) => s.id !== semId));
  }, []);

  const updateSemesterName = useCallback((semId: string, name: string) => {
    setSemesters((prev) =>
      prev.map((sem) => (sem.id === semId ? { ...sem, name } : sem))
    );
  }, []);

  const clearAll = useCallback(() => {
    setSemesters([createSemester(1)]);
  }, []);

  const results = useMemo(() => {
    let totalCredits = 0;
    let totalPoints = 0;
    const semesterResults = semesters.map((sem) => {
      let semCredits = 0;
      let semPoints = 0;
      sem.courses.forEach((c) => {
        const pts = gradeToPoints(c.grade);
        semCredits += c.creditHours;
        semPoints += c.creditHours * pts;
      });
      totalCredits += semCredits;
      totalPoints += semPoints;
      return {
        name: sem.name,
        gpa: semCredits > 0 ? semPoints / semCredits : 0,
        credits: semCredits,
      };
    });
    const cumulativeGpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return { semesterResults, cumulativeGpa, totalCredits };
  }, [semesters]);

  const resultsText = useMemo(() => {
    let text = 'GPA Results (US 4.0 Scale)\n';
    text += '='.repeat(30) + '\n';
    results.semesterResults.forEach((r) => {
      text += `${r.name}: ${r.gpa.toFixed(2)} GPA (${r.credits} credits)\n`;
    });
    text += '='.repeat(30) + '\n';
    text += `Cumulative GPA: ${results.cumulativeGpa.toFixed(2)} (${results.totalCredits} total credits)\n`;
    return text;
  }, [results]);

  const inputStyle: React.CSSProperties = {
    padding: '0.5rem 0.75rem',
    border: '1px solid var(--color-border)',
    borderRadius: '0.375rem',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    fontSize: '0.875rem',
    width: '100%',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    cursor: 'pointer',
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
      {/* Grade Scale Reference */}
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
            marginBottom: '0.75rem',
            color: 'var(--color-text)',
          }}
        >
          📋 Grade Scale Reference (US 4.0)
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
            gap: '0.375rem',
          }}
        >
          {GRADE_SCALE.map((g) => (
            <div
              key={g.grade}
              style={{
                textAlign: 'center',
                padding: '0.375rem',
                backgroundColor: 'var(--color-surface-alt)',
                borderRadius: '0.25rem',
                fontSize: '0.8125rem',
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{g.grade}</span>
              <span style={{ color: 'var(--color-text-muted)', marginLeft: '0.25rem' }}>
                = {g.points.toFixed(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Semesters */}
      {semesters.map((sem, semIdx) => (
        <div
          key={sem.id}
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
              justifyContent: 'space-between',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <input
              type="text"
              value={sem.name}
              onChange={(e) => updateSemesterName(sem.id, e.target.value)}
              aria-label={`Semester ${semIdx + 1} name`}
              style={{
                ...inputStyle,
                width: 'auto',
                maxWidth: '200px',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            />
            {semesters.length > 1 && (
              <button
                onClick={() => removeSemester(sem.id)}
                style={btnDanger}
                aria-label={`Remove ${sem.name}`}
              >
                ✕ Remove Semester
              </button>
            )}
          </div>

          {/* Course Headers */}
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
            <span>Course Name</span>
            <span>Credits</span>
            <span>Grade</span>
            <span style={{ width: '36px' }}></span>
          </div>

          {/* Courses */}
          {sem.courses.map((course) => (
            <div
              key={course.id}
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
                value={course.name}
                onChange={(e) => updateCourse(sem.id, course.id, 'name', e.target.value)}
                placeholder="Course name"
                aria-label="Course name"
                style={inputStyle}
              />
              <input
                type="number"
                value={course.creditHours}
                onChange={(e) =>
                  updateCourse(sem.id, course.id, 'creditHours', Math.max(0, Number(e.target.value)))
                }
                min={0}
                max={12}
                aria-label="Credit hours"
                style={inputStyle}
              />
              <select
                value={course.grade}
                onChange={(e) => updateCourse(sem.id, course.id, 'grade', e.target.value)}
                aria-label="Grade"
                style={selectStyle}
              >
                {GRADE_SCALE.map((g) => (
                  <option key={g.grade} value={g.grade}>
                    {g.grade}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeCourse(sem.id, course.id)}
                disabled={sem.courses.length <= 1}
                aria-label="Remove course"
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.375rem',
                  backgroundColor: 'transparent',
                  color: sem.courses.length <= 1 ? 'var(--color-text-muted)' : 'var(--color-error)',
                  cursor: sem.courses.length <= 1 ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                }}
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={() => addCourse(sem.id)}
            style={{ ...btnOutline, marginTop: '0.5rem' }}
          >
            + Add Course
          </button>

          {/* Semester GPA */}
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
              {sem.name} GPA
            </span>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--color-primary-dark)',
              }}
            >
              {results.semesterResults[semIdx]?.gpa.toFixed(2) ?? '0.00'}
            </span>
          </div>
        </div>
      ))}

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button onClick={addSemester} style={btnPrimary}>
          + Add Semester
        </button>
        <button onClick={clearAll} style={btnOutline}>
          ↺ Clear All
        </button>
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
          📊 GPA Results
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          {results.semesterResults.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--color-border-light)',
                fontSize: '0.9375rem',
              }}
            >
              <span style={{ color: 'var(--color-text-secondary)' }}>
                {r.name} ({r.credits} credits)
              </span>
              <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                {r.gpa.toFixed(2)}
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
            Cumulative GPA
          </div>
          <div
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--color-primary-dark)',
            }}
          >
            {results.cumulativeGpa.toFixed(2)}
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
