'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Photo = { src: string; alt: string }

type Props = {
  photos: Photo[]
  index: number | null
  onChange: (i: number | null) => void
}

export default function Lightbox({ photos, index, onChange }: Props) {
  const touchX = useRef<number | null>(null)
  const open = index !== null
  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return
      onChange((index + dir + photos.length) % photos.length)
    },
    [index, onChange, photos.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, go, onChange])

  const photo = index !== null ? photos[index] : null

  return (
    <AnimatePresence>
      {photo && index !== null && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => onChange(null)}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
            touchX.current = null
          }}
        >
          <p className="lightbox__caption">
            {index + 1} / {photos.length} · {photo.alt}
          </p>
          <motion.div
            key={photo.src}
            className="lightbox__frame"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="100vw" />
          </motion.div>
          <button type="button" className="lightbox__btn lightbox__close" aria-label="Cerrar" onClick={() => onChange(null)}>
            ×
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__prev"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
          >
            ←
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__next"
            aria-label="Foto siguiente"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
          >
            →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
