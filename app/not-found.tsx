import Link from 'next/link'

export const metadata = { title: 'Página no encontrada' }

export default function NotFound() {
  return (
    <section className="page-hero page-hero--editorial notfound">
      <span className="watermark watermark--hero" aria-hidden="true">
        404
      </span>
      <div className="container page-hero__content">
        <span className="eyebrow">Error 404</span>
        <h1>
          Esta página <em>dijo que no</em>
        </h1>
        <p className="lead">Pero el resto de la web sigue diciendo que sí.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn--solid">
            Volver al inicio
          </Link>
          <Link href="/contacto" className="btn">
            Contacto
          </Link>
        </div>
      </div>
    </section>
  )
}
