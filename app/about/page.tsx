import type { Metadata } from 'next';
import AdSlot from '@/components/ui/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - GPA Calculator Suite | gpacalculator.one',
  description: 'Learn about gpacalculator.one — free, privacy-focused GPA calculation tools that work entirely in your browser.',
  alternates: { canonical: 'https://gpacalculator.one/about/' },
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <section style={{ padding: '2rem 0 1rem' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: 'var(--color-text)',
            marginBottom: '0.5rem',
          }}
        >
          About <span style={{ color: 'var(--color-primary)' }}>gpacalculator.one</span>
        </h1>
      </section>

      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: '0.75rem',
          padding: '2rem',
          border: '1px solid var(--color-border-light)',
          marginBottom: '2rem',
        }}
      >
        <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>
            Our Mission
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            gpacalculator.one was created with a simple mission: to provide students with free, accurate, and easy-to-use GPA calculation tools. We believe every student deserves access to tools that help them understand and track their academic performance without barriers — no sign-ups, no fees, no data collection.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Our Tools
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We offer a comprehensive suite of four GPA and grade calculation tools designed to cover every student&apos;s needs:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>GPA Calculator</strong> — Calculate semester and cumulative GPA on the standard US 4.0 scale with support for multiple semesters and courses.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>CGPA Calculator</strong> — Track your cumulative GPA across all semesters with support for 4.0, 5.0, 7.0, and 10.0 grading scales used worldwide.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Grade Calculator</strong> — Calculate your current course grade with weighted categories and use the &quot;What Do I Need&quot; feature to plan for exams.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Weighted GPA Calculator</strong> — Compare weighted vs unweighted GPA for AP, Honors, IB, and Dual Enrollment courses.
            </li>
          </ul>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Privacy First
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            All calculations happen entirely in your browser. We never send your grades, courses, or any personal information to a server. Your academic data stays on your device. The only data we store is your theme preference (light or dark mode) in your browser&apos;s local storage. Read our full{' '}
            <Link href="/privacy/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
              privacy policy
            </Link>{' '}
            for more details.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            How Our Calculators Work
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Our calculators use standard academic formulas to ensure accuracy. The GPA calculator multiplies grade points by credit hours and divides by total credits. The CGPA calculator applies the same weighted average across semesters. The grade calculator computes weighted category averages. All calculations update in real time as you enter your data, giving you instant feedback.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Accessibility & Design
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We designed gpacalculator.one to be accessible to all users. Our tools feature proper ARIA labels, keyboard navigation support, and a dark mode option for comfortable use in any lighting condition. The responsive design ensures our tools work perfectly on phones, tablets, and desktop computers.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Contact
          </h2>
          <p style={{ marginBottom: '0' }}>
            Have feedback, suggestions, or found a bug? We&apos;d love to hear from you. Reach out to us at{' '}
            <span style={{ color: 'var(--color-primary)' }}>hello@gpacalculator.one</span>.
          </p>
        </div>
      </div>

      <AdSlot slot="about-bottom" />
    </div>
  );
}
