import Image from 'next/image'
import type { ReactNode } from 'react'
import Reveal from './Reveal'

// Foto a sangre completa con overlay de la paleta, rompe el ritmo entre secciones
export default function Separator({ image, alt, children }: { image: string; alt: string; children?: ReactNode }) {
  return (
    <section className="separator">
      <Reveal variant="scale-in" className="separator__media">
        <Image src={image} alt={alt} fill sizes="100vw" />
      </Reveal>
      {children && (
        <div className="container separator__text">
          <Reveal>{children}</Reveal>
        </div>
      )}
    </section>
  )
}
