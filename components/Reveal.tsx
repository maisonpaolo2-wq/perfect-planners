'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode, CSSProperties } from 'react'

type Variant = 'fade-up' | 'fade-in' | 'scale-in' | 'line'

const EASE = [0.25, 0.1, 0.25, 1] as const

const variants: Record<Variant, Variants> = {
  'fade-up': { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  'fade-in': { hidden: { opacity: 0 }, show: { opacity: 1 } },
  'scale-in': { hidden: { opacity: 0, scale: 1.06 }, show: { opacity: 1, scale: 1 } },
  line: { hidden: { scaleX: 0 }, show: { scaleX: 1 } },
}

type Props = {
  children?: ReactNode
  variant?: Variant
  delay?: number
  /** posición en una lista: añade 0.08s por item */
  index?: number
  as?: 'div' | 'li' | 'span' | 'article'
  className?: string
  style?: CSSProperties
}

export default function Reveal({ children, variant = 'fade-up', delay = 0, index = 0, as = 'div', className, style }: Props) {
  const M = motion[as]
  return (
    <M
      className={className}
      style={style}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: EASE, delay: delay + index * 0.08 }}
    >
      {children}
    </M>
  )
}

export function Line({ width = '4rem', delay = 0 }: { width?: string; delay?: number }) {
  return <Reveal variant="line" delay={delay} className="line-deco" style={{ width }} />
}
