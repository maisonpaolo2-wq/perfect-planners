import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { waLink } from '@/components/WhatsAppButton'
import { altOf, photo, services } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Servicios · Pedidas, aniversarios y renta de escenarios',
  description:
    'Pedidas de matrimonio, pedidas de novia, aniversarios y renta de escenarios en Querétaro, Tequisquiapan y Bernal. Mira qué incluye cada servicio.',
  path: '/servicios',
})

const extras = [
  { t: 'Fotografía profesional', d: 'Fotógrafo escondido desde antes de que lleguen, entrega en galería digital.' },
  { t: 'Música en vivo', d: 'Violín, guitarra o mariachi para el momento exacto de la pregunta.' },
  { t: 'Chisperos fríos', d: 'Pirotecnia fría de pista, segura en terrazas y jardines.' },
  { t: 'Ramo de flores', d: 'Ramo natural a juego con el escenario, hecho por floristas locales.' },
  { t: 'Camino de velas y pétalos', d: 'Guía el paso hasta el corazón o las letras.' },
  { t: 'Renta de lugar', d: 'Terrazas, kioscos y miradores con los que trabajamos seguido.' },
]

export default function Servicios() {
  const hero = photo('kiosco-corazon-neon')
  return (
    <>
      <PageHero
        image={hero.src}
        alt={hero.alt}
        eyebrow="Servicios"
        lines={['Todo lo que', <em key="e">necesita tu sí</em>]}
        text="Cuatro formas de trabajar con nosotros, siempre con montaje, coordinación y retiro incluidos."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Line />
            <Reveal>
              <h2 className="title">Elige cómo quieres sorprender</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">
                Cada servicio se adapta a tu presupuesto y al lugar. Te mandamos la propuesta desglosada por WhatsApp.
              </p>
            </Reveal>
          </div>

          <div className="svc-detail-list">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className={`svc-detail${i % 2 ? ' svc-detail--flip' : ''}`}>
                <Reveal variant="scale-in" className="svc-detail__img">
                  <Image src={s.image} alt={altOf(s.image)} fill sizes="(min-width: 900px) 55vw, 100vw" />
                </Reveal>
                <div className="svc-detail__body">
                  <Reveal>
                    <span className="svc-detail__num" aria-hidden="true">
                      0{i + 1}
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <span className="eyebrow">{s.kicker}</span>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="title">{s.title}</h2>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <p>{s.longDescription}</p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <ul className="checks">
                      {s.includes.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.25} className="btn-row">
                    <a
                      href={waLink(`Hola, me interesa: ${s.title}.`)}
                      className="btn btn--solid"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pedir precio
                    </a>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head section-head--center">
            <Reveal>
              <span className="eyebrow eyebrow--center">Súmale a tu evento</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">Extras que marcan la diferencia</h2>
            </Reveal>
          </div>
          <ul className="extras">
            {extras.map((e, i) => (
              <Reveal as="li" key={e.t} index={i} className="extra">
                <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
                  <path
                    d="M12 20.5s-7.5-4.4-7.5-10.1A4.1 4.1 0 0 1 12 8.1a4.1 4.1 0 0 1 7.5 2.3c0 5.7-7.5 10.1-7.5 10.1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
                <h3>{e.t}</h3>
                <p className="muted small">{e.d}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="center-row">
            <Link href="/escenarios" className="link-arrow">
              Ver nuestros escenarios
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand surface={false} />
    </>
  )
}
