import type { MetadataRoute } from 'next'
import { sanityFetch } from '@/sanity/client'
import { categoriesQuery } from '@/sanity/queries'

type Category = {
  _id: string
  slug: { current: string }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://axkan.art'

  const categories = await sanityFetch<Category[]>({ query: categoriesQuery, tags: ['categories'] })

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/catalogo/${cat.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...categoryPages,
    {
      url: `${baseUrl}/pedido`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
