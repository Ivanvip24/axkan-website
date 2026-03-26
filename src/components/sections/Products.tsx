'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type Category = {
  _id: string
  name: string
  slug: { current: string }
  description: string
  color: string
  image: { url: string } | null
}

type ProductsProps = {
  categories: Category[]
}

type ProductCard = {
  id: string
  title: string
  label: string
  subtitle: string
  image: string
  href: string
  buyHref: string
  size: 'full' | 'half'
  bg: string
  accent: string
}

const productCards: ProductCard[] = [
  {
    id: '1',
    title: 'Imanes MDF',
    label: 'Producto Estrella',
    subtitle: 'Relieve 3D, colores vibrantes y el destino grabado con orgullo mexicano.',
    image: '/images/hero-magnet.jpg',
    href: '/catalogo?category=imanes',
    buyHref: '/pedido',
    size: 'full',
    bg: 'bg-white',
    accent: 'bg-axkan-magenta',
  },
  {
    id: '2',
    title: 'Llaveros',
    label: 'Para Cada Viajero',
    subtitle: 'Tu destino favorito siempre contigo. Corte láser sobre MDF con acabado premium.',
    image: '/images/product-keychain.png',
    href: '/catalogo?category=llaveros',
    buyHref: '/pedido',
    size: 'full',
    bg: 'bg-[#f5f5f5]',
    accent: 'bg-axkan-turquesa',
  },
  {
    id: '3',
    title: 'Portallaves',
    label: 'Para el Hogar',
    subtitle: 'Funcional y decorativo. Cada portallaves cuenta la historia de un destino.',
    image: '/images/product-keyholder.png',
    href: '/catalogo?category=portallaves',
    buyHref: '/pedido',
    size: 'half',
    bg: 'bg-white',
    accent: 'bg-axkan-verde',
  },
  {
    id: '4',
    title: 'Destapadores',
    label: 'El Favorito',
    subtitle: 'Útiles, divertidos y 100% coleccionables. El souvenir que todos quieren.',
    image: '/images/product-magnet.png',
    href: '/catalogo?category=destapadores',
    buyHref: '/pedido',
    size: 'half',
    bg: 'bg-[#f5f5f5]',
    accent: 'bg-axkan-naranja',
  },
]

export default function Products({ categories }: ProductsProps) {
  // Override with Sanity data if available
  const cards = productCards.map((card, i) => {
    if (categories[i]?.image?.url) {
      return { ...card, image: categories[i].image!.url }
    }
    return card
  })

  return (
    <section id="productos" className="bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className={`${card.size === 'full' ? 'md:col-span-2' : 'col-span-1'}`}
          >
            <div className={`${card.bg} rounded-[20px] overflow-hidden relative text-center py-12 px-6 md:py-16`}>
              {/* Accent line */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-full ${card.accent}`} />

              {/* Label */}
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-obsidiana/40 mb-1.5">
                {card.label}
              </p>

              {/* Title */}
              <h2 className="font-display text-[clamp(28px,6vw,48px)] font-black text-obsidiana leading-tight mb-2">
                {card.title}
              </h2>

              {/* Subtitle */}
              <p className="text-[15px] text-obsidiana/50 leading-relaxed max-w-xs mx-auto mb-6">
                {card.subtitle}
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <Link
                  href={card.href}
                  className="inline-flex items-center px-6 py-2.5 bg-axkan-magenta text-white text-sm font-semibold rounded-full shadow-[0_4px_16px_rgba(231,42,136,0.3)] hover:shadow-[0_6px_24px_rgba(231,42,136,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  Ver más
                </Link>
                <Link
                  href={card.buyHref}
                  className="inline-flex items-center px-6 py-2.5 border-[1.5px] border-axkan-magenta text-axkan-magenta text-sm font-semibold rounded-full hover:bg-axkan-magenta/5 hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  Comprar
                </Link>
              </div>

              {/* Product Image */}
              <div className={`relative mx-auto ${card.size === 'full' ? 'max-w-md md:max-w-lg' : 'max-w-xs'}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={card.size === 'full' ? 560 : 320}
                  height={card.size === 'full' ? 420 : 280}
                  className="w-full h-auto object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
