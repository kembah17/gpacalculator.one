'use client';

import Link from 'next/link';

interface ToolItem {
  name: string;
  description: string;
  href: string;
}

export default function ToolGrid({ tools }: { tools: ToolItem[] }) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.25rem',
        marginBottom: '3rem',
      }}
    >
      {tools.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          style={{
            display: 'block',
            padding: '1.5rem',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border-light)',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s',
            boxShadow: 'var(--shadow-sm)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            e.currentTarget.style.borderColor = 'var(--color-primary)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            e.currentTarget.style.borderColor = 'var(--color-border-light)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <h2
            style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: 'var(--color-text)',
              marginBottom: '0.5rem',
            }}
          >
            {tool.name}
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {tool.description}
          </p>
        </Link>
      ))}
    </section>
  );
}
