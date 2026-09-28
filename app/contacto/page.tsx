import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { faqs, photo, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Contacto · Organiza tu pedida en Querétaro',
  description:
    'Escríbenos para organizar tu pedida de matrimonio, de novia o aniversario en Querétaro, Tequisquiapan, Peña de Bernal o San Juan del Río. Respuesta el mismo día.',
  path: '/contacto',
})

export default function Contacto() {
  const hero = photo('corazon-rosa-ramo')
  const side = photo('kiosco-corazon-neon')
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <>
      <PageHero
        image={hero.src}
        alt={hero.alt}
        eyebrow="Contacto"
        lines={['Cuéntanos', <em key="e">tu sorpresa</em>]}
        text="Respondemos el mismo día. Tu secreto está a salvo con nosotros."
      />

      <section className="section">
        <div className="container contact-page">
          <div>
            <Line />
            <Reveal>
              <h2 className="title">Pide tu propuesta</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">
                Mientras más nos cuentes de tu pareja, mejor. Si ya tienes fecha y zona, te decimos al momento qué escenarios
                están libres.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <ContactForm />
            </Reveal>
          </div>
          <aside className="contact-aside">
            <Reveal variant="scale-in" className="contact-aside__photo">
              <Image src={side.src} alt={side.alt} fill sizes="(min-width: 900px) 35vw, 100vw" />
            </Reveal>
            <Reveal className="contact-card">
              <h3>Directo</h3>
              <ul>
                <li>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp · {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  <a href={`https://www.instagram.com/${ig}/`} target="_blank" rel="noopener noreferrer">
                    DM en {siteConfig.instagram}
                  </a>
                </li>
              </ul>
            </Reveal>
            <Reveal className="contact-card" delay={0.08}>
              <h3>Zona de cobertura</h3>
              <p className="muted small">Todo el estado de Querétaro. Para otras ciudades pregúntanos.</p>
              <ul className="chips">
                {siteConfig.locations.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--surface" id="preguntas">
        <div className="container faq">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Antes de escribirnos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">Preguntas frecuentes</h2>
            </Reveal>
          </div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} index={i}>
                <details className="faq__item">
                  <summary>{f.q}</summary>
                  <p className="muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-row">
            <a href={waLink()} className="btn btn--solid" target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
