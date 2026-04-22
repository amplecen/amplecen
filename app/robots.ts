import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://www.amplecen.com/',
    sitemap: 'https://www.amplecen.com/sitemap.xml',
  }
}
