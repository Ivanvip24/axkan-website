import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Products from '@/components/sections/Products'
import About from '@/components/sections/About'
import Footer from '@/components/layout/Footer'
import { sanityFetch } from '@/sanity/client'
import { categoriesQuery } from '@/sanity/queries'

type Category = {
  _id: string
  name: string
  slug: { current: string }
  description: string
  color: string
  image: { url: string } | null
}

export default async function Home() {
  const categories = await sanityFetch<Category[]>({
    query: categoriesQuery,
    tags: ['categories'],
  })

  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Products categories={categories} />
      <About />
      <Footer />
    </main>
  )
}
