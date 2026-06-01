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
              {[
                { href: '/gpa-calculator/', icon: '📊', label: 'GPA Calculator' },
                { href: '/cgpa-calculator/', icon: '📈', label: 'CGPA Calculator' },
                { href: '/grade-calculator/', icon: '📝', label: 'Grade Calculator' },
                { href: '/weighted-gpa-calculator/', icon: '⚖️', label: 'Weighted GPA Calculator' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'var(--color-footer-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>
                    {link.icon} {link.label}
                  </Link>
                </li>
              ))}
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

                {/* More Free Tools */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '2rem', paddingTop: '1.5rem' }}>
          <h4 style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-footer-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>More Free Tools</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
            <a href="https://pdftools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📄 PDF Tools</a>
            <a href="https://pictools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🖼️ Image Tools</a>
            <a href="https://percentcalc.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔢 Percentage Calculator</a>
            <a href="https://developertools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>💻 Developer Tools</a>
            <a href="https://wordcount.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📝 Word Counter</a>
            <a href="https://texttools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔤 Text Tools</a>
            <a href="https://socialmediatools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📱 Social Media Tools</a>
            <a href="https://randomize.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎲 Random Generator</a>
            <a href="https://qrcodegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📲 QR Code Generator</a>
            <a href="https://invoicegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🧾 Invoice Generator</a>
            <a href="https://caloriecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔥 Calorie Calculator</a>
            <a href="https://passwordgenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔐 Password Generator</a>
            <a href="https://datecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📅 Date Calculator</a>
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
