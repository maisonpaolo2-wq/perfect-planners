'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// Titular con stagger línea a línea (0.15s entre líneas)
export default function HeroTitle({ lines, className }: { lines: ReactNode[]; className?: string }) {
  return (
    <h1 className={className}>
      {lines.map((l, i) => (
        <motion.span
          key={i}
          className="line"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 + i * 0.15 }}
        >
          {l}
        </motion.span>
      ))}
    </h1>
  )
}
