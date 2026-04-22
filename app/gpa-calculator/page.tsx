import type { Metadata } from 'next';
import GpaCalculator from '@/components/tools/GpaCalculator';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import RelatedTools from '@/components/ui/RelatedTools';
import FaqSchema from '@/components/seo/FaqSchema';

export const metadata: Metadata = {
  title: 'GPA Calculator (US 4.0 Scale) - Calculate Your GPA | gpacalculator.one',
  description: 'Free GPA calculator using the US 4.0 grading scale. Add multiple semesters and courses, calculate semester and cumulative GPA instantly.',
  alternates: { canonical: 'https://gpacalculator.one/gpa-calculator/' },
  openGraph: {
    title: 'GPA Calculator (US 4.0 Scale) - Calculate Your GPA',
    description: 'Free GPA calculator using the US 4.0 grading scale. Add multiple semesters and courses, calculate semester and cumulative GPA instantly.',
    url: 'https://gpacalculator.one/gpa-calculator/',
  },
};

const faqItems = [
  {
    question: 'How is GPA calculated on a 4.0 scale?',
    answer: 'GPA is calculated by multiplying each course\'s grade points (A=4.0, B=3.0, etc.) by its credit hours, summing all the products, and dividing by the total credit hours. For example, if you earn an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course, your GPA would be (4.0×3 + 3.0×4) / (3+4) = 24/7 = 3.43.',
  },
  {
    question: 'What is the difference between semester GPA and cumulative GPA?',
    answer: 'Semester GPA reflects your performance in a single academic term, while cumulative GPA represents your overall performance across all semesters combined. Cumulative GPA is what most colleges and employers reference when evaluating your academic record.',
  },
  {
    question: 'Is an A+ worth more than an A in GPA calculation?',
    answer: 'On the standard US 4.0 scale, both A+ and A are worth 4.0 grade points. Some institutions may award 4.3 for an A+, but the most common practice is to cap the scale at 4.0. Our calculator uses the standard 4.0 for both A+ and A.',
  },
  {
    question: 'How do credit hours affect my GPA?',
    answer: 'Credit hours serve as weights in the GPA calculation. A course with more credit hours has a larger impact on your GPA. For example, a 4-credit course affects your GPA twice as much as a 2-credit course. This is why performing well in high-credit courses is especially important.',
  },
  {
    question: 'Can I use this calculator for graduate school GPA?',
    answer: 'Yes, this calculator works for any program using the US 4.0 grading scale, including undergraduate, graduate, and professional programs. Simply enter your courses, credit hours, and grades for accurate GPA calculation.',
  },
];

const relatedTools = [
  { name: 'CGPA Calculator', description: 'Calculate cumulative GPA across multiple semesters with support for various grading scales.', href: '/cgpa-calculator/' },
  { name: 'Grade Calculator', description: 'Calculate your course grade with weighted categories and find out what you need on finals.', href: '/grade-calculator/' },
  { name: 'Weighted GPA Calculator', description: 'Compare weighted vs unweighted GPA for AP, Honors, and IB courses.', href: '/weighted-gpa-calculator/' },
];

export default function GpaCalculatorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ marginTop: '1.5rem' }}>
          <AdSlot slot="gpa-leaderboard" />
        </div>

        <section style={{ padding: '2rem 0 1rem' }}>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--color-text)',
              marginBottom: '0.5rem',
            }}
          >
            GPA Calculator <span style={{ color: 'var(--color-primary)' }}>(US 4.0 Scale)</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Calculate your semester and cumulative GPA using the standard US 4.0 grading scale. Add multiple semesters, enter your courses, and get instant results.
          </p>
        </section>

        <GpaCalculator />

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="gpa-below-results" />
        </div>

        {/* How-To Guide */}
        <section
          style={{
            backgroundColor: 'var(--color-surface)',
            borderRadius: '0.75rem',
            padding: '2rem',
            marginTop: '2rem',
            border: '1px solid var(--color-border-light)',
          }}
        >
          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>
            How to Calculate Your GPA: A Complete Guide
          </h2>
          <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Calculating your Grade Point Average (GPA) is essential for tracking your academic progress and meeting requirements for scholarships, graduate school admissions, and career opportunities. The US 4.0 scale is the most widely used grading system in American colleges and universities, and understanding how it works gives you the power to plan your academic strategy effectively.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Step 1: Gather Your Course Information
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              For each course, you need two pieces of information: the letter grade you received and the number of credit hours the course is worth. Credit hours are typically listed in your course catalog or on your transcript. Most standard courses are 3 credit hours, while lab courses may be 1 or 4 credits, and some intensive courses may be 4 or 5 credits.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Step 2: Convert Grades to Grade Points
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Each letter grade corresponds to a specific number of grade points on the 4.0 scale. An A or A+ equals 4.0, an A- equals 3.7, a B+ equals 3.3, a B equals 3.0, and so on down to an F which equals 0.0. Our calculator includes a complete grade scale reference table so you can verify the conversion for any grade.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Step 3: Calculate Quality Points
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              For each course, multiply the grade points by the credit hours to get quality points. For example, an A (4.0) in a 3-credit course yields 12.0 quality points, while a B+ (3.3) in a 4-credit course yields 13.2 quality points. This weighting ensures that courses with more credit hours have a proportionally larger impact on your GPA.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Step 4: Compute Your GPA
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Add up all quality points across your courses and divide by the total number of credit hours. The result is your GPA. For cumulative GPA, include all courses from all semesters in the calculation. Our calculator handles this automatically — simply add your semesters and courses, and the results update in real time.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Tips for Using This Calculator
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Use the "Add Semester" button to organize your courses by term. You can rename semesters to match your actual academic terms (Fall 2024, Spring 2025, etc.). The calculator shows both individual semester GPAs and your cumulative GPA across all semesters. Use the copy button to save your results for reference, and the clear button to start fresh with a new calculation.
            </p>
          </div>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="gpa-in-content" />
        </div>

        {/* FAQ */}
        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </section>

        {/* Related Tools */}
        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>
            Related Tools
          </h2>
          <RelatedTools tools={relatedTools} />
        </section>

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="gpa-footer" />
        </div>
      </div>
    </>
  );
}
