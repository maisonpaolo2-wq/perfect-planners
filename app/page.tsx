import Image from 'next/image'
import Link from 'next/link'
import HeroTitle from '@/components/HeroTitle'
import Reveal, { Line } from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import QuoteSlider from '@/components/QuoteSlider'
import Separator from '@/components/Separator'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { altOf, photo, photos, processSteps, services, siteConfig, stages } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Pedidas de matrimonio y de novia en Querétaro',
  description:
    'Organizamos pedidas de matrimonio, pedidas de novia y aniversarios en Querétaro, Tequisquiapan y Peña de Bernal. Corazones de rosas, letras y chisperos.',
  path: '/',
})

const words = ['¿Te quieres casar conmigo?', '¿Quieres ser mi novia?', 'Marry me', 'Feliz aniversario', '¿Bailamos?']

export default function Home() {
  const heroMobile = photo('corazon-rojo-chisperos-terraza')
  const heroDesk = photo('letras-marry-me-fuentes')
  const intro = photo('pena-bernal-corazon-beso')
  const introDetail = photo('manos-anillo-neon')
  const sep1 = photo('kiosco-chisperos-alfombra-roja')
  const about = photo('corazon-rojo-anillo-rodilla')
  const sep2 = photo('corazon-rosa-abrazo')
  const contact = photo('pena-bernal-pareja-mano')
  const portfolio = photos.filter((p) => p.src !== heroMobile.src).slice(0, 9)

  return (
    <>
      {/* HERO · fullbleed, foto distinta en móvil (vertical) y escritorio (horizontal) */}
      <section className="hero">
        <div className="hero__media hero__media--mobile">
          <Image src={heroMobile.src} alt={heroMobile.alt} fill priority sizes="(max-width: 899px) 100vw, 1px" />
        </div>
        <div className="hero__media hero__media--desk">
          <Image src={heroDesk.src} alt={heroDesk.alt} fill priority sizes="(min-width: 900px) 100vw, 1px" />
        </div>
        <div className="container hero__content">
          <Reveal variant="fade-in">
            <span className="eyebrow eyebrow--light">Pedidas · Aniversarios · Querétaro</span>
          </Reveal>
          <HeroTitle
            className="display"
            lines={['La pregunta', 'merece un', <em key="e">escenario</em>]}
          />
          <Reveal delay={0.65} className="btn-row">
            <a href={waLink()} className="btn btn--light btn--solid-light" target="_blank" rel="noopener noreferrer">
              Planear mi pedida
            </a>
            <Link href="/portfolio" className="btn btn--light">
              Ver pedidas reales
            </Link>
          </Reveal>
        </div>
        <span className="hero__side" aria-hidden="true">
          Tequisquiapan · Peña de Bernal · San Juan del Río
        </span>
      </section>

      {/* Cinta de frases en neón */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...words, ...words].map((w, i) => (
            <span key={i}>
              {w} <i>♥</i>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO · asimétrica 40/60, empieza con subtítulo fino */}
      <section className="section intro" id="intro">
        <span className="watermark watermark--left" aria-hidden="true">
          Sí
        </span>
        <div className="container intro__grid">
          <div className="intro__text">
            <Reveal>
              <span className="eyebrow">Nosotros nos encargamos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Tú haces la pregunta, <em>nosotros todo lo demás</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">{siteConfig.bioShort}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="muted">
                Lugar, flores, velas, chisperos, música, fotógrafo y la excusa perfecta para que no sospeche. Lo montamos horas
                antes, lo encendemos cuando llegan y lo recogemos cuando ya están celebrando.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <Link href="/sobre-mi" className="link-arrow">
                Quiénes somos
              </Link>
            </Reveal>
          </div>
          <div className="intro__media">
            <Reveal variant="scale-in" className="intro__photo">
              <Image src={intro.src} alt={intro.alt} fill sizes="(min-width: 900px) 40vw, 100vw" />
            </Reveal>
            <Reveal variant="scale-in" delay={0.2} className="intro__detail">
              <Image src={introDetail.src} alt={introDetail.alt} fill sizes="(min-width: 900px) 20vw, 45vw" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICIOS · cards con foto, empiezan con línea + título */}
      <section className="section section--surface" id="servicios">
        <div className="container">
          <div className="section-head">
            <Line />
            <Reveal>
              <h2 className="title">Momentos que organizamos</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">Del primer “¿quieres ser mi novia?” al quinto aniversario, con el mismo cuidado.</p>
            </Reveal>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal as="article" key={s.slug} index={i} className="svc-card">
                <Link href={`/servicios#${s.slug}`} className="svc-card__img" aria-label={s.title}>
                  <Image src={s.image} alt={altOf(s.image)} fill sizes="(min-width: 900px) 25vw, (min-width: 560px) 50vw, 100vw" />
                  <span className="svc-card__num">0{i + 1}</span>
                </Link>
                <div className="svc-card__body">
                  <span className="svc-card__kicker">{s.kicker}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link href={`/servicios#${s.slug}`} className="link-arrow">
                    Ver qué incluye
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Separador a sangre */}
      <Separator image={sep1.src} alt={sep1.alt}>
        <p className="separator__quote">
          Velas encendidas, chisperos a los lados y <em>el corazón esperando</em>.
        </p>
      </Separator>

      {/* ESCENARIOS · filas con foto grande, empieza con número grande */}
      <section className="section" id="escenarios">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <span className="big-num" aria-hidden="true">
                4
              </span>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">Nuestros escenarios</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title">Montajes que ya son firma de la casa</h2>
              </Reveal>
            </div>
          </div>
          <div className="stage-grid">
            {stages.map((s, i) => (
              <Reveal as="article" key={s.name} index={i} className="stage">
                <div className="stage__img">
                  <Image src={s.image} alt={altOf(s.image)} fill sizes="(min-width: 900px) 25vw, (min-width: 560px) 50vw, 100vw" />
                </div>
                <h3>{s.name}</h3>
                <p className="muted small">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-row">
            <Link href="/escenarios" className="btn">
              Ver todos los escenarios
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROCESO · números grandes, fondo surface */}
      <section className="section section--surface" id="proceso">
        <div className="container process">
          <div className="process__head">
            <Reveal>
              <span className="eyebrow">Cómo trabajamos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Del primer mensaje <em>al sí</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Cuatro pasos y un secreto bien guardado. Te acompañamos por WhatsApp hasta que la pregunta está hecha.
              </p>
            </Reveal>
          </div>
          <ol className="steps">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.number} index={i} className="step">
                <span className="step__num">0{s.number}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTFOLIO · masonry, empieza con subtítulo fino */}
      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <Reveal>
                <span className="eyebrow">Pedidas reales</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title">Dijeron que sí</h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/portfolio" className="link-arrow">
                Galería completa
              </Link>
            </Reveal>
          </div>
          <Gallery photos={portfolio} />
        </div>
      </section>

      {/* SOBRE · retrato grande al 50%+ */}
      <section className="section section--surface about" id="sobre">
        <div className="container about__grid">
          <Reveal variant="scale-in" className="about__photo">
            <Image src={about.src} alt={about.alt} fill sizes="(min-width: 900px) 52vw, 100vw" />
          </Reveal>
          <div className="about__text">
            <span className="watermark watermark--inline" aria-hidden="true">
              ♥
            </span>
            <Reveal>
              <span className="eyebrow">Perfect Planners by LARM</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Guardamos secretos <em>desde el primer mensaje</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Somos un equipo pequeño de Querétaro obsesionado con los detalles. Empezamos armando pedidas para amigos y hoy
                conocemos cada terraza, kiosco y mirador de Tequisquiapan, Bernal y San Juan del Río.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="muted">
                Trabajamos con floristas locales como @limonymiel_floreria y con fotógrafos que saben esconderse bien.
                Nuestra regla es simple: que tú solo te preocupes por los nervios.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <Link href="/sobre-mi" className="btn">
                Nuestra historia
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS · quote grande, una a la vez */}
      <section className="section testimonials" id="testimonios">
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow--center">Lo que nos cuentan después</span>
          </Reveal>
          <QuoteSlider />
        </div>
      </section>

      {/* Separador 2 */}
      <Separator image={sep2.src} alt={sep2.alt}>
        <p className="separator__quote">
          Ya vi que te emocionaste. <em>Mándanos un mensaje.</em>
        </p>
      </Separator>

      {/* CONTACTO */}
      <section className="section contact-home" id="contacto">
        <div className="container contact-home__grid">
          <div>
            <Line />
            <Reveal>
              <h2 className="title">Cuéntanos tu sorpresa</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">
                Fecha, zona y cómo es tu pareja. Respondemos el mismo día. Si prefieres,{' '}
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-link">
                  escríbenos por WhatsApp al {siteConfig.phoneDisplay}
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <ContactForm compact />
            </Reveal>
          </div>
          <Reveal variant="scale-in" className="contact-home__photo">
            <Image src={contact.src} alt={contact.alt} fill sizes="(min-width: 900px) 40vw, 100vw" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
