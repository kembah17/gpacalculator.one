export default function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GPA Calculator Suite',
    url: 'https://gpacalculator.one',
    description: 'Free online GPA calculator tools. Calculate your GPA, CGPA, weighted GPA, and course grades instantly.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://gpacalculator.one/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
