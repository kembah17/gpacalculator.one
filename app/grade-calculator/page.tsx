import type { Metadata } from 'next';
import GradeCalculator from '@/components/tools/GradeCalculator';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import RelatedTools from '@/components/ui/RelatedTools';
import FaqSchema from '@/components/seo/FaqSchema';

export const metadata: Metadata = {
  title: 'Grade Calculator - Calculate Your Course Grade | gpacalculator.one',
  description: 'Free grade calculator with weighted categories. Calculate your current course grade and find out what you need on your final exam to reach your target grade.',
  alternates: { canonical: 'https://gpacalculator.one/grade-calculator/' },
  openGraph: {
    title: 'Grade Calculator - Calculate Your Course Grade',
    description: 'Free grade calculator with weighted categories. Calculate your current course grade and find out what you need on your final exam.',
    url: 'https://gpacalculator.one/grade-calculator/',
  },
};

const faqItems = [
  {
    question: 'How do weighted grades work?',
    answer: 'Weighted grades assign different importance to different categories of assignments. For example, if homework is worth 20% and the final exam is worth 50%, the final exam has 2.5 times more impact on your grade. Each category\'s average is multiplied by its weight percentage, and these weighted averages are summed to produce your overall grade.',
  },
  {
    question: 'What if my category weights don\'t add up to 100%?',
    answer: 'Ideally, your category weights should sum to exactly 100%. If they don\'t, the calculator will show a warning. When weights don\'t sum to 100%, the calculator normalizes them proportionally. However, for the most accurate results, make sure your weights match your course syllabus exactly.',
  },
  {
    question: 'How does the "What Do I Need" calculator work?',
    answer: 'The "What Do I Need" feature uses algebra to determine the minimum score required in a specific category to achieve your target overall grade. It takes your current scores in all other categories, applies their weights, and calculates what score in the selected category would bring your overall grade to the target. If the needed score exceeds 100%, the target may not be achievable through that category alone.',
  },
  {
    question: 'What is the difference between percentage and points grading?',
    answer: 'In percentage mode, each assignment\'s score is converted to a percentage (score ÷ max score × 100), and the category average is the mean of these percentages. In points mode, all scores and max scores within a category are summed first, then the percentage is calculated from the totals. Points mode is more common in college courses where assignments have different point values.',
  },
  {
    question: 'Can I use this for a pass/fail course?',
    answer: 'Yes! Enter your assignments and their scores as usual. The calculator will show your current percentage. You can then compare this to your course\'s pass/fail threshold (commonly 60% or 70%) to determine your standing. Use the "What Do I Need" feature to find out the minimum score needed on remaining work to pass.',
  },
];

const relatedTools = [
  { name: 'GPA Calculator', description: 'Calculate your semester and cumulative GPA on the US 4.0 scale.', href: '/gpa-calculator/' },
  { name: 'CGPA Calculator', description: 'Track your cumulative GPA across all semesters with visual trend charts.', href: '/cgpa-calculator/' },
  { name: 'Weighted GPA Calculator', description: 'Compare weighted vs unweighted GPA for AP, Honors, and IB courses.', href: '/weighted-gpa-calculator/' },
];

export default function GradeCalculatorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ marginTop: '1.5rem' }}>
          <AdSlot slot="grade-leaderboard" />
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
            Grade Calculator <span style={{ color: 'var(--color-primary)' }}>— Course Grades</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Calculate your current course grade with weighted categories. Add assignments, set weights, and use the &quot;What Do I Need&quot; calculator to plan your target grade.
          </p>
        </section>

        <GradeCalculator />

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="grade-below-results" />
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
            How to Calculate Your Course Grade
          </h2>
          <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Understanding how your course grade is calculated empowers you to make strategic decisions about where to focus your study time. Most college and university courses use a weighted grading system where different types of assignments contribute different percentages to your final grade. Our grade calculator makes it easy to track your progress and plan ahead for the grades you want to achieve.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Step 1: Set Up Your Categories
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Start by entering the grading categories from your course syllabus. Common categories include Homework, Quizzes, Midterm Exams, Final Exam, Projects, Participation, and Lab Work. Enter the weight (percentage) for each category exactly as listed in your syllabus. The weights should sum to 100% — our calculator will warn you if they don&apos;t.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Step 2: Enter Your Assignments
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Within each category, add your individual assignments with their scores and maximum possible scores. For example, if you scored 85 out of 100 on a homework assignment, enter 85 as the score and 100 as the max score. You can add as many assignments as needed within each category.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Step 3: Choose Your Grading Mode
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Toggle between Percentage and Points mode depending on how your course calculates grades. In Percentage mode, each assignment is weighted equally within its category. In Points mode, assignments with higher max scores count more. Check your syllabus or ask your professor which method your course uses.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Step 4: Plan with &quot;What Do I Need&quot;
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              The most powerful feature of this calculator is the &quot;What Do I Need&quot; section. Enter your target grade (e.g., 90% for an A-) and select the category you want to calculate for (typically your final exam). The calculator will tell you exactly what score you need in that category to achieve your target overall grade. If the required score is above 100%, you may need to improve in other categories as well.
            </p>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem', marginTop: '1.25rem' }}>
              Tips for Grade Management
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Update this calculator after every graded assignment to maintain an accurate picture of your standing. Pay special attention to heavily weighted categories — a 50% final exam has much more impact than 10% participation. If you&apos;re struggling in a high-weight category, consider seeking tutoring or forming study groups early in the semester rather than waiting until the final.
            </p>
          </div>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <AdSlot slot="grade-in-content" />
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
          <AdSlot slot="grade-footer" />
        </div>
      </div>
    </>
  );
}
