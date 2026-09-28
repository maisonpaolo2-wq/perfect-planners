'use client'

import { MotionConfig } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'

export default function ClientRoot({ children }: { children: ReactNode }) {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
