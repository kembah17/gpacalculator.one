'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            border: '1px solid var(--color-border-light)',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: 'var(--color-text)',
            }}
          >
            <span>{item.question}</span>
            <span
              style={{
                transition: 'transform 0.2s',
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                flexShrink: 0,
                marginLeft: '1rem',
              }}
            >
              ▼
            </span>
          </button>
          {openIndex === i && (
            <div
              style={{
                padding: '0 1.25rem 1rem',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
              }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
