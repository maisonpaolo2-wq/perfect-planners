import Image from 'next/image'
import type { ReactNode } from 'react'
import HeroTitle from './HeroTitle'
import Reveal from './Reveal'

type Props = {
  image?: string
  alt?: string
  eyebrow: string
  lines: ReactNode[]
  text?: string
  /** Sin foto: titular editorial grande sobre fondo claro */
  editorial?: boolean
  watermark?: string
}

export default function PageHero({ image, alt = '', eyebrow, lines, text, editorial, watermark = 'Sí' }: Props) {
  if (editorial || !image) {
    return (
      <section className="page-hero page-hero--editorial">
        <span className="watermark watermark--hero" aria-hidden="true">
          {watermark}
        </span>
        <div className="container page-hero__content">
          <Reveal variant="fade-in">
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <HeroTitle lines={lines} />
          {text && (
            <Reveal delay={0.5}>
              <p className="lead">{text}</p>
            </Reveal>
          )}
        </div>
      </section>
    )
  }
  return (
    <section className="page-hero">
      <div className="hero__media">
        <Image src={image} alt={alt} fill priority sizes="100vw" />
      </div>
      <div className="container page-hero__content">
        <Reveal variant="fade-in">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
        </Reveal>
        <HeroTitle lines={lines} />
        {text && (
          <Reveal delay={0.5}>
            <p>{text}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
