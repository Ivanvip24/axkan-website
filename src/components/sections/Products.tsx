'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  {
    name: 'Imanes de MDF',
    description: 'Captura tus destinos favoritos con nuestros imanes premium de MDF con acabado brillante.',
    price: 'Desde $15',
    image: '/images/products/magnet-placeholder.jpg',
    color: 'bg-axkan-magenta',
    popular: true,
  },
  {
    name: 'Llaveros',
    description: 'Lleva México contigo a todos lados con nuestros llaveros de alta resistencia.',
    price: 'Desde $18',
    image: '/images/products/keychain-placeholder.jpg',
    color: 'bg-axkan-turquesa',
    popular: false,
  },
  {
    name: 'Destapadores',
    description: 'Funcionales y decorativos, perfectos para cualquier ocasión mexicana.',
    price: 'Desde $25',
    image: '/images/products/opener-placeholder.jpg',
    color: 'bg-axkan-verde',
    popular: false,
  },
  {
    name: 'Portallaves',
    description: 'Decora tu hogar con arte mexicano funcional que cuenta historias.',
    price: 'Desde $45',
    image: '/images/products/keyholder-placeholder.jpg',
    color: 'bg-axkan-naranja',
    popular: false,
  },
]

const destinations = [
  'Huasteca Potosina', 'Oaxaca', 'Cancún', 'CDMX', 'Guanajuato',
  'San Miguel', 'Puerto Vallarta', 'Chiapas', 'Yucatán', 'Acapulco',
]

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-gradient-to-b from-white to-crema relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-axkan-verde/10 text-axkan-verde rounded-full text-sm font-semibold mb-4"
          >
            Nuestros Productos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display text-obsidiana mb-4"
          >
            Souvenirs que{' '}
            <span className="text-axkan-magenta">sí</span> importan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-obsidiana/60 max-w-2xl mx-auto"
          >
            Cada pieza cuenta una historia de mil años de tradición mexicana.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-axkan-rojo text-white text-xs font-bold rounded-full">
                  Más Popular
                </div>
              )}

              {/* Product Image Placeholder */}
              <div className={`h-48 ${product.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-30">🎨</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-obsidiana mb-2 font-display">
                  {product.name}
                </h3>
                <p className="text-obsidiana/60 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-axkan-magenta">
                    {product.price}
                  </span>
                  <Link
                    href={`/catalogo?category=${product.name}`}
                    className="text-sm font-semibold text-axkan-turquesa hover:text-axkan-magenta transition-colors"
                  >
                    Ver más →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Destinations Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-8 bg-obsidiana rounded-2xl"
        >
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-obsidiana to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-obsidiana to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...destinations, ...destinations].map((dest, i) => (
              <span
                key={i}
                className="mx-8 text-2xl font-bold text-white/20 hover:text-white/60 transition-colors cursor-default"
              >
                {dest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-axkan-magenta to-axkan-rojo text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Ver Catálogo Completo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
