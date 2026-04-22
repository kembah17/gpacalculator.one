import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';
import ToolGrid from '@/components/ui/ToolGrid';
import WebSiteSchema from '@/components/seo/WebSiteSchema';

export const metadata: Metadata = {
  title: 'GPA Calculator Suite - Free Online GPA Tools | gpacalculator.one',
  description: 'Free GPA calculator suite with tools for GPA, CGPA, course grades, and weighted GPA. Accurate, private, and works entirely in your browser.',
  alternates: { canonical: 'https://gpacalculator.one/' },
  openGraph: {
    title: 'GPA Calculator Suite - Free Online GPA Tools',
    description: 'Free GPA calculator suite with tools for GPA, CGPA, course grades, and weighted GPA.',
    url: 'https://gpacalculator.one/',
    siteName: 'gpacalculator.one',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator Suite - Free Online GPA Tools',
    description: 'Free GPA calculator suite with tools for GPA, CGPA, course grades, and weighted GPA.',
  },
};

const tools = [
  {
    name: '\ud83d\udcca GPA Calculator',
    description: 'Calculate your semester and cumulative GPA on the US 4.0 scale. Add multiple semesters and courses with real-time results.',
    href: '/gpa-calculator/',
  },
  {
    name: '\ud83d\udcc8 CGPA Calculator',
    description: 'Calculate your cumulative GPA across all semesters. Supports 4.0, 5.0, 7.0, and 10.0 grading scales with visual trend charts.',
    href: '/cgpa-calculator/',
  },
  {
    name: '\ud83d\udcdd Grade Calculator',
    description: 'Calculate your course grade with weighted categories. Includes a "What Do I Need" calculator to plan your target grade.',
    href: '/grade-calculator/',
  },
  {
    name: '\u2696\ufe0f Weighted GPA Calculator',
    description: 'Calculate weighted vs unweighted GPA for AP, Honors, IB, and Dual Enrollment courses with customizable boost values.',
    href: '/weighted-gpa-calculator/',
  },
];

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Ad Slot Top */}
        <div style={{ marginTop: '1.5rem' }}>
          <AdSlot slot="home-top" />
        </div>

        {/* Hero Section */}
        <section
          style={{
            textAlign: 'center',
            padding: '3rem 1rem',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--color-text)',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            Free{' '}
            <span style={{ color: 'var(--color-primary)' }}>GPA Calculator</span>{' '}
            Suite
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '640px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}
          >
            Calculate your GPA, CGPA, course grades, and weighted GPA instantly. Free, accurate, and
            works entirely in your browser &mdash; no data is ever sent to a server.
          </p>
          <Link
            href="/gpa-calculator/"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-primary-text)',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            Start Calculating \u2192
          </Link>
        </section>

        {/* Tool Grid */}
        <ToolGrid tools={tools} />

        {/* SEO Content */}
        <section
          style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: '0.75rem',
            padding: '2rem',
            marginBottom: '2rem',
            border: '1px solid var(--color-border-light)',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}
          >
            Understanding GPA: Your Complete Guide
          </h2>

          <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Your Grade Point Average (GPA) is one of the most important academic metrics used by colleges, universities, graduate schools, and employers to evaluate your academic performance. Whether you are a high school student preparing for college applications, a college student tracking your progress toward graduation, or a graduate student maintaining your academic standing, understanding how to calculate and improve your GPA is essential for academic success.
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
              What Is GPA and How Is It Calculated?
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              GPA stands for Grade Point Average, a standardized way of measuring academic achievement. In the United States, the most common scale is the 4.0 scale, where an A equals 4.0 points, a B equals 3.0 points, a C equals 2.0 points, a D equals 1.0 point, and an F equals 0.0 points. Your GPA is calculated by multiplying each course grade by its credit hours, summing those values, and dividing by the total number of credit hours. This weighted average ensures that courses with more credit hours have a proportionally larger impact on your overall GPA.
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
              Cumulative GPA vs. Semester GPA
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Your semester GPA reflects your performance in a single academic term, while your cumulative GPA (CGPA) represents your overall academic performance across all semesters. Colleges and employers typically look at your cumulative GPA when making admissions or hiring decisions. Our CGPA calculator supports multiple grading scales including 4.0, 5.0, 7.0, and 10.0, making it useful for students in different educational systems around the world.
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
              Weighted vs. Unweighted GPA
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Many high schools use a weighted GPA system that gives extra points for advanced courses. In a weighted system, Honors courses typically add 0.5 points to the standard scale (making an A worth 4.5), while Advanced Placement (AP), International Baccalaureate (IB), and Dual Enrollment courses add 1.0 point (making an A worth 5.0). This system rewards students who challenge themselves with rigorous coursework. Our weighted GPA calculator lets you compare your weighted and unweighted GPAs side by side.
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
              Why Your GPA Matters
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Your GPA affects many aspects of your academic and professional life. It determines eligibility for scholarships, Dean&apos;s List recognition, honor societies, and academic probation thresholds. For college admissions, a strong GPA combined with standardized test scores forms the foundation of your application. Graduate programs often require minimum GPAs of 3.0 or higher. Many employers, especially for entry-level positions, use GPA as a screening criterion, with some requiring a minimum of 3.0 or 3.5.
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
              Tips for Improving Your GPA
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Improving your GPA requires consistent effort and strategic planning. Start by using our grade calculator to understand exactly what scores you need on remaining assignments to reach your target grade. Focus on courses where small improvements can have the biggest impact &mdash; a course with more credit hours will affect your GPA more significantly. Take advantage of office hours, study groups, and tutoring services. Consider retaking courses where you received low grades if your institution allows grade replacement. Most importantly, use our tools regularly to track your progress and stay motivated throughout the semester.
            </p>
          </div>
        </section>

        {/* Ad Slot Bottom */}
        <div style={{ marginBottom: '2rem' }}>
          <AdSlot slot="home-bottom" />
        </div>
      </div>
    </>
  );
}
