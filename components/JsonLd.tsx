import { faqs, services, siteConfig, testimonials } from '@/content/data'

export default function JsonLd() {
  const url = `https://${siteConfig.domain}`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'WeddingPlanner'],
        '@id': `${url}/#business`,
        name: siteConfig.name,
        description: siteConfig.bioShort,
        slogan: siteConfig.tagline,
        url,
        image: `${url}/og-image.jpg`,
        logo: `${url}/icon.svg`,
        email: siteConfig.email,
        telephone: `+${siteConfig.whatsapp}`,
        priceRange: '$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'San Juan del Río',
          addressRegion: 'Querétaro',
          addressCountry: 'MX',
        },
        areaServed: siteConfig.locations.map((l) => ({ '@type': 'Place', name: l })),
        sameAs: [`https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`],
        makesOffer: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.description },
        })),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          reviewCount: testimonials.length,
        },
        review: testimonials.map((t) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: t.name },
          reviewBody: t.text,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}/contacto#preguntas`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
