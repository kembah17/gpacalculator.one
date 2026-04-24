import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from "@/components/GoogleAnalytics";

// GSC verification loaded from env
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  ...(gscVerification && { verification: { google: gscVerification } }),
  title: 'GPA Calculator Suite - Free Online GPA Tools | gpacalculator.one',
  description: 'Free online GPA calculator tools. Calculate your GPA, CGPA, weighted GPA, and course grades instantly. Supports 4.0, 5.0, and custom grading scales.',
  keywords: 'GPA calculator, CGPA calculator, grade calculator, weighted GPA, college GPA, university GPA, grade point average',
  openGraph: {
    title: 'GPA Calculator Suite - Free Online GPA Tools',
    description: 'Free online GPA calculator tools. Calculate your GPA, CGPA, weighted GPA, and course grades instantly.',
    url: 'https://gpacalculator.one',
    siteName: 'gpacalculator.one',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator Suite - Free Online GPA Tools',
    description: 'Free online GPA calculator tools. Calculate your GPA, CGPA, weighted GPA, and course grades instantly.',
  },
  alternates: {
    canonical: 'https://gpacalculator.one',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main style={{ minHeight: 'calc(100vh - 160px)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
