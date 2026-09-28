import type { MetadataRoute } from 'next'
import { siteUrl } from '@/content/seo'

const routes = [
  { path: '', priority: 1 },
  { path: '/servicios', priority: 0.9 },
  { path: '/escenarios', priority: 0.8 },
  { path: '/portfolio', priority: 0.8 },
  { path: '/sobre-mi', priority: 0.7 },
  { path: '/contacto', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r.priority,
  }))
}
