'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from './Reveal'
import Lightbox from './Lightbox'

type Photo = { src: string; alt: string; orientation: 'landscape' | 'portrait' }

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null)
  return (
    <>
      <div className="masonry">
        {photos.map((p, i) => (
          <Reveal key={p.src} variant="scale-in" index={i % 3}>
            <button
              type="button"
              className={`masonry__item masonry__item--${p.orientation}`}
              onClick={() => setActive(i)}
              aria-label={`Ampliar: ${p.alt}`}
            >
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1000px) 33vw, (min-width: 560px) 50vw, 100vw" />
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox photos={photos} index={active} onChange={setActive} />
    </>
  )
}
