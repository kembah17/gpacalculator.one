"use client";
import Link from 'next/link';

interface Tool {
  name: string;
  description: string;
  href: string;
}

export default function RelatedTools({ tools }: { tools: Tool[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
      }}
    >
      {tools.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          style={{
            display: 'block',
            padding: '1.25rem',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border-light)',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s, border-color 0.2s',
            boxShadow: 'var(--shadow-sm)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            e.currentTarget.style.borderColor = 'var(--color-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            e.currentTarget.style.borderColor = 'var(--color-border-light)';
          }}
        >
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginBottom: '0.375rem',
            }}
          >
            {tool.name}
          </h3>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {tool.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
