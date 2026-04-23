import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-footer-bg)',
        color: 'var(--color-footer-text)',
        marginTop: '3rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <AdSlot slot="footer-top" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '1rem',
                color: 'var(--color-footer-text)',
              }}
            >
              Tools
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <Link href="/gpa-calculator/" style={{ color: 'var(--color-footer-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/cgpa-calculator/" style={{ color: 'var(--color-footer-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  CGPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/grade-calculator/" style={{ color: 'var(--color-footer-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Grade Calculator
                </Link>
              </li>
              <li>
                <Link href="/weighted-gpa-calculator/" style={{ color: 'var(--color-footer-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Weighted GPA Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '1rem',
                color: 'var(--color-footer-text)',
              }}
            >
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <Link href="/about/" style={{ color: 'var(--color-footer-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy/" style={{ color: 'var(--color-footer-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '1rem',
                color: 'var(--color-footer-text)',
              }}
            >
              Legal
            </h3>
            <p style={{ color: 'var(--color-footer-muted)', fontSize: '0.8125rem', lineHeight: 1.6 }}>
              All calculations are performed client-side. We do not store any personal data. Results are for informational purposes only.
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--color-footer-border)',
            paddingTop: '1.5rem',
            textAlign: 'center',
            color: 'var(--color-footer-muted)',
            fontSize: '0.8125rem',
          }}
        >
          © 2024–2026 gpacalculator.one. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
