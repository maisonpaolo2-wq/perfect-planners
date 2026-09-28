import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Separator from '@/components/Separator'
import CtaBand from '@/components/CtaBand'
import { waLink } from '@/components/WhatsAppButton'
import { altOf, photo, siteConfig, stages } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Escenarios · Corazón de rosas, letras MARRY ME y kiosco',
  description:
    'Renta de corazón rojo y rosa de flores, letras MARRY ME iluminadas, kiosco con chisperos y teepee para pedidas en Querétaro, Tequisquiapan y Bernal.',
  path: '/escenarios',
})

const more = [
  { name: 'Teepee romántico', text: 'Picnic bajo tela, cojines, luces colgantes y tabla de quesos. Ideal para aniversarios al atardecer.' },
  { name: 'Globo aerostático', text: 'La pregunta a cientos de metros sobre los viñedos de Tequisquiapan y Ezequiel Montes, al amanecer.' },
  { name: 'Neón personalizado', text: 'Sus nombres, su fecha o su frase. Lo fabricamos para que se lo lleven a casa después.' },
]

export default function Escenarios() {
  const hero = photo('corazon-flores-noche-fuentes')
  const sep = photo('marry-me-beso')
  return (
    <>
      <PageHero
        image={hero.src}
        alt={hero.alt}
        eyebrow="Escenarios y renta"
        lines={['Montajes que', <em key="e">se ven de lejos</em>]}
        text="Llegamos, montamos, iluminamos y desaparecemos. El momento es solo suyo."
      />

      <section className="section">
        <div className="container">
          {stages.map((s, i) => (
            <article key={s.name} className={`stage-row${i % 2 ? ' stage-row--flip' : ''}`}>
              <Reveal variant="scale-in" className="stage-row__img">
                <Image src={s.image} alt={altOf(s.image)} fill sizes="(min-width: 900px) 60vw, 100vw" />
              </Reveal>
              <div className="stage-row__body">
                <Reveal>
                  <span className="big-num big-num--sm" aria-hidden="true">
                    0{i + 1}
                  </span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="title">{s.name}</h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p>{s.text}</p>
                </Reveal>
                <Reveal delay={0.24}>
                  <a
                    href={waLink(`Hola, ¿tienen disponible el escenario ${s.name}?`)}
                    className="link-arrow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar disponibilidad
                  </a>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Separator image={sep.src} alt={sep.alt}>
        <p className="separator__quote">
          Letras de más de un metro. <em>No hace falta decir nada más.</em>
        </p>
      </Separator>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">También hacemos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">Más ideas para sorprender</h2>
            </Reveal>
          </div>
          <div className="stacked">
            {more.map((m, i) => (
              <Reveal key={m.name} index={i} className="stacked__item">
                <h3>{m.name}</h3>
                <p className="muted">{m.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-row">
            <a href={siteConfig.catalogUrl} className="btn" target="_blank" rel="noopener noreferrer">
              Ver catálogo completo
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand surface={false} />
    </>
  )
}
