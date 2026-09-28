import PageHero from '@/components/PageHero'
import Gallery from '@/components/Gallery'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { photos } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Portfolio · Pedidas reales en Querétaro',
  description:
    'Galería de pedidas de matrimonio y de novia organizadas por Perfect Planners en Peña de Bernal, Tequisquiapan y San Juan del Río, Querétaro.',
  path: '/portfolio',
})

export default function Portfolio() {
  return (
    <>
      <PageHero
        editorial
        watermark="Sí"
        eyebrow="Portfolio"
        lines={['Todas', 'dijeron', <em key="e">que sí</em>]}
        text="Pedidas reales en terrazas, kioscos y miradores de Querétaro. Toca cualquier foto para verla en grande."
      />
      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <p className="muted small gallery-count">
              {photos.length} momentos · Querétaro · Tequisquiapan · Peña de Bernal
            </p>
          </Reveal>
          <Gallery photos={photos} />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
