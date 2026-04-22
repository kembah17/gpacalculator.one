'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/gpa-calculator/', label: 'GPA Calculator' },
  { href: '/cgpa-calculator/', label: 'CGPA Calculator' },
  { href: '/grade-calculator/', label: 'Grade Calculator' },
  { href: '/weighted-gpa-calculator/', label: 'Weighted GPA' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-surface)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div
        style={{
          height: '3px',
          background: 'linear-gradient(to right, var(--color-primary), var(--color-primary-hover), var(--color-primary))',
        }}
      />
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-text)',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>📊</span>
          <span>GPA Calculator</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 800 }}>.one</span>
        </Link>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'none',
              gap: '1.25rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            style={{
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              cursor: 'pointer',
              color: 'var(--color-text)',
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
            }}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              cursor: 'pointer',
              color: 'var(--color-text)',
              fontSize: '1.25rem',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div
          className="mobile-nav"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border-light)',
            padding: '0.75rem 1rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                textDecoration: 'none',
                color: 'var(--color-text-secondary)',
                fontSize: '0.9375rem',
                borderRadius: '0.375rem',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface-alt)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
