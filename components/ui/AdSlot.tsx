export default function AdSlot({ slot }: { slot: string }) {
  return (
    <div className="ad-slot" data-ad-slot={slot}>
      <div
        style={{
          backgroundColor: 'var(--color-surface-alt)',
          border: '1px dashed var(--color-border)',
          borderRadius: '0.5rem',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--color-text-muted)',
        }}
      >
        Advertisement
      </div>
    </div>
  );
}
