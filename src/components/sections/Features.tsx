'use client'

import { motion } from 'framer-motion'

const features = [
  { icon: '🎯', name: 'Corte Láser', desc: 'Precisión artesanal', color: 'bg-axkan-magenta/10' },
  { icon: '🚚', name: 'Envío Nacional', desc: '8-14 días', color: 'bg-axkan-turquesa/10' },
  { icon: '🎨', name: 'Diseños Únicos', desc: 'Por destino', color: 'bg-axkan-verde/10' },
  { icon: '📦', name: 'Desde 100 pzas', desc: 'Mayoreo', color: 'bg-axkan-naranja/10' },
]

export default function Features() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 border-y border-gray-200"
      style={{ gap: '1px', background: '#e5e7eb' }}
    >
      {features.map((f, i) => (
        <div key={i} className="bg-white py-6 px-4 text-center">
          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-[10px] ${f.color} text-xl mb-2`}>
            {f.icon}
          </div>
          <p className="text-[13px] font-bold text-obsidiana">{f.name}</p>
          <p className="text-[11px] text-obsidiana/40">{f.desc}</p>
        </div>
      ))}
    </motion.div>
  )
}
