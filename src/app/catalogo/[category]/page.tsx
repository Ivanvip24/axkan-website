import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CatalogClient from '@/components/catalog/CatalogClient'
import { sanityFetch } from '@/sanity/client'
import { categoriesQuery, productsQuery } from '@/sanity/queries'

type Category = {
  _id: string
  name: string
  slug: { current: string }
  description: string
  color: string
  image: { url: string } | null
}

type Product = {
  _id: string
  name: string
  slug: { current: string }
  description: string
  price: number
  destination: string
  featured: boolean
  category: { name: string; slug: { current: string }; color: string } | null
  images: { asset: { url: string }; alt: string }[] | null
}

type PageProps = {
  params: Promise<{ category: string }>
}

// This generates the SEO metadata for each category page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  const categories = await sanityFetch<Category[]>({ query: categoriesQuery, tags: ['categories'] })
  const found = categories.find(c => c.slug.current === category)

  if (!found) return {}

  return {
    alternates: {
      canonical: `/catalogo/${category}`,
    },
    title: `${found.name} | AXKAN - Souvenirs Premium Mexicanos`,
    description: `Explora nuestra colección de ${found.name.toLowerCase()}. ${found.description}`,
    openGraph: {
      title: `${found.name} | AXKAN`,
      description: `Colección de ${found.name.toLowerCase()} — souvenirs premium mexicanos.`,
    },
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const [categories, products] = await Promise.all([
    sanityFetch<Category[]>({ query: categoriesQuery, tags: ['categories'] }),
    sanityFetch<Product[]>({ query: productsQuery, tags: ['products'] }),
  ])

  // If the category slug doesn't exist, show 404
  const validCategory = categories.find(c => c.slug.current === category)
  if (!validCategory) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-crema">
      <Header />
      <Suspense fallback={null}>
        <CatalogClient
          categories={categories}
          products={products}
          activeCategory={category}
        />
      </Suspense>
      <Footer />
    </main>
  )
}
