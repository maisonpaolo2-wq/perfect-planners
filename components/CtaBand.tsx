import Link from 'next/link'
import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { waLink } from './WhatsAppButton'

type Props = { title?: ReactNode; text?: string; surface?: boolean }

export default function CtaBand({
  title = (
    <>
      ¿Ya tienes <em>la pregunta</em>? Nosotros el escenario.
    </>
  ),
  text = 'Mándanos la fecha y cómo es tu pareja. Te respondemos el mismo día con una propuesta y los escenarios disponibles.',
  surface = true,
}: Props) {
  return (
    <section className={`section cta-band${surface ? ' section--surface' : ''}`}>
      <span className="watermark watermark--center" aria-hidden="true">
        Sí
      </span>
      <div className="container" style={{ position: 'relative' }}>
        <Reveal>
          <span className="eyebrow eyebrow--center">Siguiente paso</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="title">{title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="muted cta-band__text">{text}</p>
        </Reveal>
        <Reveal delay={0.24} className="btn-row btn-row--center">
          <a href={waLink()} className="btn btn--solid" target="_blank" rel="noopener noreferrer">
            Escribir por WhatsApp
          </a>
          <Link href="/contacto" className="btn">
            Formulario
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
