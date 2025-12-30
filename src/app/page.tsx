'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Products from '@/components/sections/Products'
import About from '@/components/sections/About'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Products />
      <About />
      <Footer />
    </main>
  )
}
