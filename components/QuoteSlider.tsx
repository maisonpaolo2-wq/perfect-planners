'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { testimonials } from '@/content/data'

// Testimonios en QUOTE GRANDE: una cita centrada cada vez, con anterior/siguiente
export default function QuoteSlider() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (d: 1 | -1) => setI((i + d + testimonials.length) % testimonials.length)

  return (
    <div className="qs">
      <span className="qs__mark" aria-hidden="true">
        “
      </span>
      <div className="qs__stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={t.name}
            className="qs__fig"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <blockquote>{t.text}</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>
                {t.service} · {t.location} · {t.date}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="qs__nav">
        <button type="button" onClick={() => go(-1)} aria-label="Testimonio anterior">
          ←
        </button>
        <span className="qs__count">
          {String(i + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
        </span>
        <button type="button" onClick={() => go(1)} aria-label="Testimonio siguiente">
          →
        </button>
      </div>
    </div>
  )
}
