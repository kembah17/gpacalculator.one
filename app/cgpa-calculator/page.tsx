import type { Metadata } from 'next';
import CgpaCalculator from '@/components/tools/CgpaCalculator';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import RelatedTools from '@/components/ui/RelatedTools';
import FaqSchema from '@/components/seo/FaqSchema';

export const metadata: Metadata = {
  title: 'CGPA Calculator - Calculate Cumulative GPA | gpacalculator.one',
  description: 'Free CGPA calculator supporting 4.0, 5.0, 7.0, and 10.0 grading scales. Track your cumulative GPA across all semesters with visual trend charts.',
  alternates: { canonical: 'https://gpacalculator.one/cgpa-calculator/' },
  openGraph: {
    title: 'CGPA Calculator - Calculate Cumulative GPA',
    description: 'Free CGPA calculator supporting 4.0, 5.0, 7.0, and 10.0 grading scales. Track your cumulative GPA across all semesters with visual trend charts.',
    url: 'https://gpacalculator.one/cgpa-calculator/',
  },
};

const faqItems = [
  {
    question: 'What is CGPA and how is it different from GPA?',
    answer: 'CGPA stands for Cumulative Grade Point Average. While GPA can refer to a single semester\'s performance, CGPA specifically represents your overall academic performance across all semesters combined. It is calculated by taking the weighted average of all semester GPAs, where the weights are the credit hours for each semester.',
  },
  {
    question: 'How do I calculate CGPA from semester GPAs?',
    answer: 'To calculate CGPA, multiply each semester\'s GPA by its total credit hours, sum all these products, then divide by the total credit hours across all semesters. Formula: CGPA = Σ(Semester GPA × Credit Hours) ÷ Σ(Credit Hours). Our calculator does this automatically as you enter your data.',
  },
  {
    question: 'What grading scales does this calculator support?',
    answer: 'Our CGPA calculator supports four common grading scales: 4.0 (used in the US, Canada), 5.0 (used in Nigeria, some African countries), 7.0 (used in Australia, some European countries), and 10.0 (used in India, some Asian countries). Select your scale from the dropdown menu.',
  },
  {
    question: 'Can a low semester GPA significantly affect my CGPA?',
    answer: 'Yes, a low semester GPA can impact your CGPA, but the effect depends on the credit hours. A semester with more credit hours has a larger impact. For example, a poor performance in a 18-credit semester affects your CGPA more than a poor performance in a 12-credit semester. Use our trend chart to visualize how each semester contributes.',
  },
  {
    question: 'How can I raise my CGPA?',
    answer: 'To raise your CGPA, focus on earning higher grades in future semesters, especially in courses with more credit hours. Consider retaking courses where you received low grades if your institution allows grade replacement. Use our calculator to model different scenarios and see how future semester GPAs would affect your cumulative average.',
  },
];

const relatedTools = [
  { name: 'GPA Calculator', description: 'Calculate semester GPA with individual course grades on the US 4.0 scale.', href: '/gpa-calculator/' },
  { name: 'Grade Calculator', description: 'Calculate your course grade with weighted categories and assignment scores.', href: '/grade-calculator/' },
  { name: 'Weighted GPA Calculator', description: 'Compare weighted vs unweighted GPA for AP, Honors, and IB courses.', href: '/weighted-gpa-calculator/' },
];

export default function CgpaCalculatorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ marginTop: '1.5rem' }}>
          <AdSlot slot="cgpa-leaderboard" />
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
            CGPA Calculator <span style={{ color: 'var(--color-primary)' }}>— Cumulative GPA</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Calculate your cumulative GPA across all semesters. Supports 4.0, 5.0, 7.0, and 10.0 grading scales with a visual GPA trend chart.
          </p>
        </section>

        <CgpaCalculator />

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="cgpa-below-results" />
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
            How to Calculate Your Cumulative GPA
          </h2>
          <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Your Cumulative Grade Point Average (CGPA) is the single most comprehensive measure of your academic performance throughout your entire educational career. Unlike a semester GPA that only reflects one term, your CGPA tells the complete story of your academic journey. Understanding how to calculate and track your CGPA is crucial for maintaining academic standing, qualifying for scholarships, and meeting graduation requirements.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Understanding the CGPA Formula
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              The CGPA formula is straightforward: multiply each semester&apos;s GPA by the number of credit hours attempted that semester, sum all these products, and divide by the total credit hours across all semesters. Mathematically: CGPA = Σ(Semester GPA × Semester Credit Hours) ÷ Σ(All Credit Hours). This weighted average ensures that semesters where you took more courses have a proportionally larger impact on your cumulative average.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Choosing the Right Grading Scale
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Different countries and institutions use different grading scales. The 4.0 scale is standard in the United States and Canada. The 5.0 scale is common in Nigeria and several African countries. The 7.0 scale is used in parts of Australia and Europe. The 10.0 scale is prevalent in India and other Asian countries. Our calculator supports all four scales — simply select yours from the dropdown menu before entering your data.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Reading the GPA Trend Chart
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              The visual trend chart shows your GPA for each semester as a bar graph. This makes it easy to identify patterns in your academic performance — are your grades improving over time, declining, or staying consistent? Use this visualization to set realistic goals for future semesters and understand how each term contributes to your overall CGPA.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Strategic CGPA Planning
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              One of the most powerful uses of this calculator is planning ahead. Enter hypothetical future semester GPAs to see how they would affect your cumulative average. This is especially useful if you need to reach a specific CGPA threshold for graduation honors, scholarship renewal, or graduate school admission. Remember that as you accumulate more credit hours, each individual semester has a smaller marginal effect on your CGPA, making early academic performance particularly important.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Tips for Accurate Calculation
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              For the most accurate results, use the exact GPA and credit hours from your official transcript for each semester. Include all semesters, even those with lower performance. If your institution uses a different scale than the four options provided, you may need to convert your grades first. Remember that transfer credits may or may not be included in your CGPA depending on your institution&apos;s policy.
            </p>
          </div>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="cgpa-in-content" />
        </div>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>
            Related Tools
          </h2>
          <RelatedTools tools={relatedTools} />
        </section>

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="cgpa-footer" />
        </div>
      </div>
    </>
  );
}
