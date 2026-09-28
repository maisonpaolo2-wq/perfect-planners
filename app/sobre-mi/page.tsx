import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import Separator from '@/components/Separator'
import CtaBand from '@/components/CtaBand'
import { photo, siteConfig, testimonials } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Nosotros · El equipo detrás de cada pedida',
  description:
    'Conoce a Perfect Planners by LARM, el equipo de Querétaro que organiza pedidas de matrimonio, de novia y aniversarios en Tequisquiapan y Peña de Bernal.',
  path: '/sobre-mi',
})

const values = [
  { t: 'Secreto absoluto', d: 'Nunca contactamos a tu pareja ni publicamos nada sin permiso. La sorpresa es sagrada.' },
  { t: 'Puntualidad', d: 'Montamos con horas de margen. Cuando llegan, todo está encendido y en su lugar.' },
  { t: 'Detalle local', d: 'Flores de floristas de la zona, lugares que conocemos y proveedores de confianza.' },
  { t: 'Acompañamiento', d: 'Te escribimos durante todo el día para que sepas en qué paso vas y cuándo avanzar.' },
]

export default function SobreMi() {
  const hero = photo('pena-bernal-pareja-mano')
  const portrait = photo('manos-anillo-neon')
  const sep = photo('marry-me-pareja')
  return (
    <>
      <PageHero
        image={hero.src}
        alt={hero.alt}
        eyebrow="Nosotros"
        lines={['Detrás de', 'cada sí', <em key="e">hay un plan</em>]}
      />

      <section className="section about">
        <div className="container about__grid">
          <Reveal variant="scale-in" className="about__photo about__photo--tall">
            <Image src={portrait.src} alt={portrait.alt} fill sizes="(min-width: 900px) 55vw, 100vw" />
          </Reveal>
          <div className="about__text">
            <Reveal>
              <span className="eyebrow">{siteConfig.planner}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Empezamos con <em>una pedida para un amigo</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Un amigo quería pedirle matrimonio a su novia y no sabía por dónde empezar. Conseguimos una terraza en
                Tequisquiapan, llenamos un corazón de rosas rojas, pusimos velas en el camino y escondimos a las dos familias
                detrás de una pared. Ella dijo que sí llorando y, esa misma semana, nos escribieron tres parejas más.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p>
                Así nació Perfect Planners. Hoy organizamos pedidas de matrimonio, pedidas de novia, aniversarios y citas
                sorpresa por todo Querétaro, y hemos sumado escenarios propios: el corazón rojo, el nuevo corazón rosa, las
                letras MARRY ME y el kiosco iluminado con chisperos.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="muted">
                Seguimos siendo un equipo pequeño. Nos gusta así: cada pedida la coordinamos nosotros de principio a fin, y
                por eso solo aceptamos unos cuantos eventos por fin de semana.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <span className="watermark watermark--left" aria-hidden="true">
          LARM
        </span>
        <div className="container">
          <div className="section-head">
            <Line />
            <Reveal>
              <h2 className="title">Lo que nunca negociamos</h2>
            </Reveal>
          </div>
          <ol className="steps steps--values">
            {values.map((v, i) => (
              <Reveal as="li" key={v.t} index={i} className="step">
                <span className="step__num">0{i + 1}</span>
                <div>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Separator image={sep.src} alt={sep.alt}>
        <p className="separator__quote">
          Nuestro trabajo termina <em>cuando empieza el suyo.</em>
        </p>
      </Separator>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <span className="eyebrow">Parejas que confiaron</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">Sus palabras, no las nuestras</h2>
            </Reveal>
          </div>
          <div className="stacked">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} index={i} className="stacked__item stacked__item--quote">
                <blockquote>“{t.text}”</blockquote>
                <p className="small muted">
                  <strong>{t.name}</strong> · {t.service} · {t.location} · {t.date}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
