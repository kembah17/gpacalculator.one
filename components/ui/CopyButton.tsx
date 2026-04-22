'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
        backgroundColor: copied ? 'var(--color-success)' : 'var(--color-primary)',
        color: copied ? '#fff' : 'var(--color-primary-text)',
      }}
    >
      {copied ? '✓ Copied!' : '📋 Copy'}
    </button>
  );
}
