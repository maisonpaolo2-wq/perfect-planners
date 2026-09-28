import type { Metadata } from 'next'
import { siteConfig } from './data'

export const siteUrl = `https://${siteConfig.domain}`

type Opts = { title: string; description: string; path: string; image?: string }

export function pageMeta({ title, description, path, image = '/og-image.jpg' }: Opts): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: 'es_MX',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}
