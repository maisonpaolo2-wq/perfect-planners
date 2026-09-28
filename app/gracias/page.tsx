import Image from 'next/image'
import Link from 'next/link'
import HeroTitle from '@/components/HeroTitle'
import Reveal from '@/components/Reveal'
import { waLink } from '@/components/WhatsAppButton'
import { photo } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = {
  ...pageMeta({
    title: 'Gracias · Ya tenemos tu mensaje',
    description:
      'Gracias por escribir a Perfect Planners. Te respondemos el mismo día para organizar tu pedida o aniversario en Querétaro, Tequisquiapan o Peña de Bernal.',
    path: '/gracias',
  }),
  robots: { index: false, follow: true },
}

export default function Gracias() {
  const bg = photo('marry-me-abrazo')
  return (
    <section className="hero hero--short">
      <div className="hero__media">
        <Image src={bg.src} alt={bg.alt} fill priority sizes="100vw" />
      </div>
      <div className="container hero__content">
        <Reveal variant="fade-in">
          <span className="eyebrow eyebrow--light">Mensaje recibido</span>
        </Reveal>
        <HeroTitle className="display" lines={['Gracias,', <em key="e">el secreto</em>, 'está a salvo']} />
        <Reveal delay={0.6}>
          <p className="hero__lead">
            Te escribimos hoy mismo. Si es urgente, mándanos un WhatsApp y te atendemos al momento.
          </p>
        </Reveal>
        <Reveal delay={0.7} className="btn-row">
          <a href={waLink('Hola, acabo de mandar el formulario de la web.')} className="btn btn--light btn--solid-light" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <Link href="/portfolio" className="btn btn--light">
            Ver más pedidas
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
