import type { Metadata } from 'next';
import WeightedGpaCalculator from '@/components/tools/WeightedGpaCalculator';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import RelatedTools from '@/components/ui/RelatedTools';
import FaqSchema from '@/components/seo/FaqSchema';

export const metadata: Metadata = {
  title: 'Weighted GPA Calculator - AP, Honors & IB | gpacalculator.one',
  description: 'Free weighted GPA calculator for AP, Honors, IB, and Dual Enrollment courses. Compare weighted vs unweighted GPA with customizable boost values.',
  alternates: { canonical: 'https://gpacalculator.one/weighted-gpa-calculator/' },
  openGraph: {
    title: 'Weighted GPA Calculator - AP, Honors & IB',
    description: 'Free weighted GPA calculator for AP, Honors, IB, and Dual Enrollment courses. Compare weighted vs unweighted GPA side by side.',
    url: 'https://gpacalculator.one/weighted-gpa-calculator/',
  },
};

const faqItems = [
  {
    question: 'What is the difference between weighted and unweighted GPA?',
    answer: 'An unweighted GPA uses the standard 4.0 scale for all courses regardless of difficulty. A weighted GPA gives extra points for advanced courses: typically +0.5 for Honors courses (making an A worth 4.5) and +1.0 for AP, IB, and Dual Enrollment courses (making an A worth 5.0). This rewards students who take more challenging coursework.',
  },
  {
    question: 'How much does an AP class boost your GPA?',
    answer: 'On a standard weighted scale, AP (Advanced Placement) classes add 1.0 to each grade point. So an A in an AP class is worth 5.0 instead of 4.0, a B is worth 4.0 instead of 3.0, and so on. However, an F (0.0) in an AP class still receives no boost. The exact boost may vary by school district — our calculator lets you customize the boost values.',
  },
  {
    question: 'Do colleges look at weighted or unweighted GPA?',
    answer: 'Most colleges consider both weighted and unweighted GPA, but practices vary. Many admissions officers prefer unweighted GPA because it provides a standardized comparison across schools with different weighting systems. However, they also consider course rigor — taking AP and Honors courses is viewed favorably even if your unweighted GPA is slightly lower as a result.',
  },
  {
    question: 'How are Honors classes weighted differently from AP classes?',
    answer: 'In the standard weighting system, Honors classes receive a +0.5 boost (making the maximum 4.5), while AP and IB classes receive a +1.0 boost (making the maximum 5.0). This reflects the greater difficulty and college-level rigor of AP/IB courses compared to Honors courses. Some schools use different boost values, which is why our calculator allows customization.',
  },
  {
    question: 'What is Dual Enrollment and how does it affect GPA?',
    answer: 'Dual Enrollment courses are college-level classes taken by high school students, often at a local community college. These courses typically receive the same +1.0 GPA boost as AP and IB courses because they are actual college courses. The credits earned may also count toward your college degree, giving you a head start on your higher education.',
  },
];

const relatedTools = [
  { name: 'GPA Calculator', description: 'Calculate your semester and cumulative GPA on the standard US 4.0 scale.', href: '/gpa-calculator/' },
  { name: 'CGPA Calculator', description: 'Track your cumulative GPA across all semesters with visual trend charts.', href: '/cgpa-calculator/' },
  { name: 'Grade Calculator', description: 'Calculate your course grade with weighted categories and assignment scores.', href: '/grade-calculator/' },
];

export default function WeightedGpaCalculatorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ marginTop: '1.5rem' }}>
          <AdSlot slot="weighted-leaderboard" />
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
            Weighted GPA Calculator{' '}
            <span style={{ color: 'var(--color-primary)' }}>— AP, Honors & IB</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Calculate your weighted and unweighted GPA side by side. Supports Regular, Honors, AP/IB, and Dual Enrollment courses with customizable boost values.
          </p>
        </section>

        <WeightedGpaCalculator />

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="weighted-below-results" />
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
            Understanding Weighted GPA: A Complete Guide
          </h2>
          <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Weighted GPA is a grading system used by many high schools to reward students who take more challenging courses. Unlike the standard 4.0 unweighted scale, a weighted GPA system assigns additional grade points to advanced courses, allowing students to earn GPAs above 4.0. Understanding how weighted GPA works is essential for high school students planning their course loads and college applications.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              How Weighted GPA Works
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              In a weighted GPA system, courses are classified by difficulty level, and each level receives a different maximum GPA. Regular courses use the standard 4.0 scale. Honors courses typically use a 4.5 scale (adding 0.5 to each grade point). AP (Advanced Placement), IB (International Baccalaureate), and Dual Enrollment courses use a 5.0 scale (adding 1.0 to each grade point). This means an A in an AP course is worth 5.0 points, while an A in a regular course is worth 4.0 points.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Why Schools Use Weighted GPA
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Schools implement weighted GPA to incentivize students to challenge themselves academically. Without weighting, a student who takes all regular courses and earns straight A&apos;s would have the same 4.0 GPA as a student who takes all AP courses and earns straight A&apos;s. Weighted GPA recognizes the additional effort and difficulty of advanced coursework, which is particularly important for class rank calculations and academic honors.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Weighted GPA and College Admissions
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              College admissions officers understand that different schools have different weighting systems. Many colleges recalculate GPAs using their own formulas to create a level playing field. However, course rigor is one of the most important factors in college admissions. Taking AP, IB, and Honors courses demonstrates intellectual curiosity and readiness for college-level work, even if your GPA is slightly lower than it would be with all regular courses.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Using This Calculator
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Enter each of your courses with its credit hours, letter grade, and course type (Regular, Honors, AP/IB, or Dual Enrollment). The calculator instantly shows both your unweighted GPA (standard 4.0 scale) and weighted GPA (with boosts applied) side by side. You can customize the boost values using the &quot;Customize Boosts&quot; button if your school uses different weighting than the standard system.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Strategic Course Planning
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Use this calculator to model different course load scenarios. Try adding AP or Honors courses to see how they would affect your weighted GPA. Remember that a B in an AP course (4.0 weighted) is worth the same as an A in a regular course (4.0 unweighted), so taking advanced courses can be beneficial even if your grades are slightly lower. However, balance is key — overloading on AP courses at the expense of your mental health and grades can be counterproductive.
            </p>
          </div>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="weighted-in-content" />
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
          <AdSlot slot="weighted-footer" />
        </div>
      </div>
    </>
  );
}
