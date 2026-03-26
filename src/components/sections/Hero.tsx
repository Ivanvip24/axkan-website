'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const collageImages = [
  '/images/mexico-1.jpg',
  '/images/mexico-2.jpg',
  '/images/mexico-3.jpg',
  '/images/mexico-4.jpg',
  '/images/mexico-5.jpg',
  '/images/mexico-6.jpg',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Collage Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1.05, 1.15], x: [0, '-1.5%'], y: [0, '-1%'] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="grid grid-cols-3 grid-rows-2 w-full h-full"
        >
          {collageImages.map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                priority={i < 3}
                sizes="33vw"
              />
            </div>
          ))}
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        <motion.span
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-axkan-magenta mb-4"
        >
          Recuerdos Hechos Souvenir
        </motion.span>

        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-display text-[clamp(36px,10vw,56px)] font-black leading-[1.05] text-white mb-3 tracking-wide"
        >
          Llévate <span className="text-axkan-magenta">México</span> Contigo
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[15px] text-white/60 leading-relaxed mb-7"
        >
          Souvenirs artesanales con corte láser y diseño único por destino.
        </motion.p>

        {/* CTA Cards */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 w-full"
        >
          <Link
            href="/pedido"
            className="flex items-center justify-between sm:justify-center sm:gap-2 flex-1 px-5 py-4 bg-axkan-magenta text-white font-semibold text-[15px] rounded-xl shadow-[0_4px_20px_rgba(231,42,136,0.35)] hover:shadow-[0_6px_28px_rgba(231,42,136,0.5)] hover:-translate-y-0.5 active:scale-[0.97] transition-all"
          >
            <span>Hacer Pedido</span>
            <span className="text-lg opacity-60">&rarr;</span>
          </Link>
          <Link
            href="/pedido"
            className="flex items-center justify-between sm:justify-center sm:gap-2 flex-1 px-5 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold text-[15px] rounded-xl hover:bg-white/[0.17] hover:-translate-y-0.5 active:scale-[0.97] transition-all"
          >
            <span>Rastrear Pedido</span>
            <span className="text-lg opacity-60">&rarr;</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[5px] h-[5px] rounded-full bg-white/40"
        />
      </motion.div>
    </section>
  )
}
