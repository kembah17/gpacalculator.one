'use client';

import { useState, useMemo, useCallback } from 'react';
import CopyButton from '@/components/ui/CopyButton';

interface Course {
  id: string;
  name: string;
  creditHours: number;
  grade: string;
  courseType: string;
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

interface CourseTypeConfig {
  label: string;
  key: string;
  defaultBoost: number;
}

const COURSE_TYPES: CourseTypeConfig[] = [
  { label: 'Regular', key: 'regular', defaultBoost: 0 },
  { label: 'Honors', key: 'honors', defaultBoost: 0.5 },
  { label: 'AP/IB', key: 'ap_ib', defaultBoost: 1.0 },
  { label: 'Dual Enrollment', key: 'dual', defaultBoost: 1.0 },
];

let idCounter = 0;
const uid = () => `wgpa-${++idCounter}-${Date.now()}`;

const createCourse = (): Course => ({
  id: uid(),
  name: '',
  creditHours: 3,
  grade: 'A',
  courseType: 'regular',
});

export default function WeightedGpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    createCourse(),
    createCourse(),
    createCourse(),
    createCourse(),
  ]);

  const [boosts, setBoosts] = useState<Record<string, number>>(
    Object.fromEntries(COURSE_TYPES.map((ct) => [ct.key, ct.defaultBoost]))
  );

  const [showCustom, setShowCustom] = useState(false);

  const updateCourse = useCallback(
    (id: string, field: keyof Course, value: string | number) => {
      setCourses((prev) =>
        prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
      );
    },
    []
  );

  const addCourse = useCallback(() => {
    setCourses((prev) => [...prev, createCourse()]);
  }, []);

  const removeCourse = useCallback((id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setCourses([createCourse(), createCourse(), createCourse(), createCourse()]);
    setBoosts(Object.fromEntries(COURSE_TYPES.map((ct) => [ct.key, ct.defaultBoost])));
  }, []);

  const results = useMemo(() => {
    let unweightedCredits = 0;
    let unweightedPoints = 0;
    let weightedCredits = 0;
    let weightedPoints = 0;

    courses.forEach((c) => {
      const basePoints = gradeToPoints(c.grade);
      const boost = boosts[c.courseType] ?? 0;
      const boostedPoints = basePoints + (basePoints > 0 ? boost : 0);

      unweightedCredits += c.creditHours;
      unweightedPoints += c.creditHours * basePoints;
      weightedCredits += c.creditHours;
      weightedPoints += c.creditHours * boostedPoints;
    });

    const unweightedGpa = unweightedCredits > 0 ? unweightedPoints / unweightedCredits : 0;
    const weightedGpa = weightedCredits > 0 ? weightedPoints / weightedCredits : 0;

    return {
      unweightedGpa,
      weightedGpa,
      totalCredits: unweightedCredits,
      difference: weightedGpa - unweightedGpa,
    };
  }, [courses, boosts]);

  const resultsText = useMemo(() => {
    let text = 'Weighted GPA Results\n';
    text += '='.repeat(30) + '\n';
    courses.forEach((c) => {
      const typeLabel = COURSE_TYPES.find((ct) => ct.key === c.courseType)?.label ?? c.courseType;
      text += `${c.name || 'Unnamed'} (${typeLabel}, ${c.creditHours} cr): ${c.grade}\n`;
    });
    text += '='.repeat(30) + '\n';
    text += `Unweighted GPA: ${results.unweightedGpa.toFixed(2)} / 4.00\n`;
    text += `Weighted GPA: ${results.weightedGpa.toFixed(2)}\n`;
    text += `Boost: +${results.difference.toFixed(2)}\n`;
    text += `Total Credits: ${results.totalCredits}\n`;
    return text;
  }, [courses, results]);

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Weight Scale Info */}
      <div
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
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', margin: 0 }}>
            ⚖️ Weight Scales
          </h3>
          <button
            onClick={() => setShowCustom(!showCustom)}
            style={{
              ...btnOutline,
              padding: '0.375rem 0.75rem',
              fontSize: '0.8125rem',
            }}
          >
            {showCustom ? 'Hide Custom' : '✏️ Customize Boosts'}
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.5rem',
          }}
        >
          {COURSE_TYPES.map((ct) => (
            <div
              key={ct.key}
              style={{
                padding: '0.75rem',
                backgroundColor: 'var(--color-surface-alt)',
                borderRadius: '0.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)' }}>
                {ct.label}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                Max: {(4.0 + boosts[ct.key]).toFixed(1)}
              </div>
              {showCustom && (
                <div style={{ marginTop: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Boost:</label>
                  <input
                    type="number"
                    value={boosts[ct.key]}
                    onChange={(e) =>
                      setBoosts((prev) => ({
                        ...prev,
                        [ct.key]: Math.max(0, Number(e.target.value)),
                      }))
                    }
                    min={0}
                    max={3}
                    step={0.1}
                    aria-label={`${ct.label} boost value`}
                    style={{ ...inputStyle, marginTop: '0.25rem', textAlign: 'center' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Course Inputs */}
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
          📝 Enter Your Courses
        </h3>

        {/* Headers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1.2fr auto',
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
          <span>Type</span>
          <span style={{ width: '36px' }}></span>
        </div>

        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1.2fr auto',
              gap: '0.5rem',
              marginBottom: '0.5rem',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              value={course.name}
              onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
              placeholder="Course name"
              aria-label="Course name"
              style={inputStyle}
            />
            <input
              type="number"
              value={course.creditHours}
              onChange={(e) =>
                updateCourse(course.id, 'creditHours', Math.max(0, Number(e.target.value)))
              }
              min={0}
              max={12}
              aria-label="Credit hours"
              style={inputStyle}
            />
            <select
              value={course.grade}
              onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
              aria-label="Grade"
              style={selectStyle}
            >
              {GRADE_SCALE.map((g) => (
                <option key={g.grade} value={g.grade}>
                  {g.grade}
                </option>
              ))}
            </select>
            <select
              value={course.courseType}
              onChange={(e) => updateCourse(course.id, 'courseType', e.target.value)}
              aria-label="Course type"
              style={selectStyle}
            >
              {COURSE_TYPES.map((ct) => (
                <option key={ct.key} value={ct.key}>
                  {ct.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => removeCourse(course.id)}
              disabled={courses.length <= 1}
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
                color: courses.length <= 1 ? 'var(--color-text-muted)' : 'var(--color-error)',
                cursor: courses.length <= 1 ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
              }}
            >
              ✕
            </button>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
          <button onClick={addCourse} style={btnPrimary}>
            + Add Course
          </button>
          <button onClick={clearAll} style={btnOutline}>
            ↺ Clear All
          </button>
        </div>
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
            marginBottom: '1.25rem',
            color: 'var(--color-text)',
          }}
        >
          📊 GPA Comparison
        </h3>

        {/* Side by Side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'var(--color-surface-alt)',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-text-muted)',
                marginBottom: '0.375rem',
                fontWeight: 500,
              }}
            >
              Unweighted GPA
            </div>
            <div
              style={{
                fontSize: '2.25rem',
                fontWeight: 800,
                color: 'var(--color-text)',
              }}
            >
              {results.unweightedGpa.toFixed(2)}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>/ 4.00 scale</div>
          </div>

          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'var(--color-primary-light)',
              borderRadius: '0.75rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-text-muted)',
                marginBottom: '0.375rem',
                fontWeight: 500,
              }}
            >
              Weighted GPA
            </div>
            <div
              style={{
                fontSize: '2.25rem',
                fontWeight: 800,
                color: 'var(--color-primary-dark)',
              }}
            >
              {results.weightedGpa.toFixed(2)}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>boosted scale</div>
          </div>
        </div>

        {/* Boost Info */}
        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--color-surface-alt)',
            borderRadius: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            Weight Boost
          </span>
          <span
            style={{
              fontWeight: 700,
              color: results.difference > 0 ? 'var(--color-success)' : 'var(--color-text)',
              fontSize: '1rem',
            }}
          >
            +{results.difference.toFixed(2)}
          </span>
        </div>

        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--color-surface-alt)',
            borderRadius: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            Total Credit Hours
          </span>
          <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
            {results.totalCredits}
          </span>
        </div>

        <CopyButton text={resultsText} />
      </div>
    </div>
  );
}
