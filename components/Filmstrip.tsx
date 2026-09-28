'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from './Lightbox'

type Photo = { src: string; alt: string }

// Tira horizontal con scroll-snap; cada foto abre el lightbox
export default function Filmstrip({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null)
  return (
    <>
      <div className="filmstrip" role="list">
        {photos.map((p, i) => (
          <button
            type="button"
            role="listitem"
            key={p.src}
            className="filmstrip__item"
            onClick={() => setActive(i)}
            aria-label={`Ampliar: ${p.alt}`}
          >
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 900px) 30vw, 78vw" />
            <span className="filmstrip__idx">{String(i + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <Lightbox photos={photos} index={active} onChange={setActive} />
    </>
  )
}
