import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | gpacalculator.one',
  description: 'Privacy policy for gpacalculator.one. We do not collect any personal data. All calculations happen in your browser.',
  alternates: { canonical: 'https://gpacalculator.one/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <section style={{ padding: '2rem 0 1rem' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: 'var(--color-text)',
            marginBottom: '0.5rem',
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          Last updated: January 1, 2025
        </p>
      </section>

      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: '0.75rem',
          padding: '2rem',
          border: '1px solid var(--color-border-light)',
          marginBottom: '2rem',
        }}
      >
        <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>
            Overview
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            gpacalculator.one (&quot;we,&quot; &quot;our,&quot; or &quot;the site&quot;) is committed to protecting your privacy. This privacy policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            No Data Collection
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We do not collect, store, or transmit any personal information. All GPA calculations, grade computations, and other tool operations happen entirely within your web browser using client-side JavaScript. Your grades, courses, credit hours, and any other data you enter into our tools never leave your device.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Local Storage
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            The only data we store on your device is your theme preference (light or dark mode), which is saved in your browser&apos;s localStorage. This is a standard browser feature that stores a small piece of data locally on your device. You can clear this data at any time through your browser settings.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Cookies
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We do not use cookies for tracking or analytics purposes. If third-party advertising is displayed on our site, those ad networks may use their own cookies subject to their respective privacy policies. We have no control over and assume no responsibility for third-party cookies.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Third-Party Services
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Our site may display advertisements from third-party ad networks. These services may collect anonymous usage data through their own mechanisms. We recommend reviewing the privacy policies of any third-party services for more information about their data practices.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            External Links
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Our site may contain links to external websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policy of any website you visit.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Children&apos;s Privacy
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Our tools are designed to be used by students of all ages. Since we do not collect any personal information, there are no special concerns regarding children&apos;s privacy. No account creation or personal data submission is required to use any of our tools.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Changes to This Policy
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of the site after any changes constitutes acceptance of the updated policy.
          </p>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', marginTop: '1.5rem' }}>
            Contact Us
          </h2>
          <p style={{ marginBottom: '0' }}>
            If you have any questions about this privacy policy, please contact us at{' '}
            <span style={{ color: 'var(--color-primary)' }}>hello@gpacalculator.one</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
