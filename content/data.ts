// Contenido de la web de Perfect Planners (IG @perfect_.planners)
// Datos marcados PENDIENTE: confirmar con el cliente antes de publicar dominio propio.

export const siteConfig = {
  name: 'Perfect Planners',
  planner: 'Perfect Planners by LARM', // PENDIENTE: nombre de la persona detrás de "LARM"
  domain: 'perfectplanners.mx', // PENDIENTE: dominio real
  email: 'hola@perfectplanners.mx', // PENDIENTE: email real
  whatsapp: '524271174539', // 427 117 4539 (San Juan del Río, Qro.) sacado de sus publicaciones
  phoneDisplay: '427 117 4539',
  instagram: '@perfect_.planners',
  catalogUrl: 'https://ikmoagency.my.canva.site/perfect-planners-catalogo',
  locations: ['Querétaro', 'San Juan del Río', 'Tequisquiapan', 'Peña de Bernal', 'Ezequiel Montes', 'Pueblos mágicos de Querétaro'],
  tagline: 'Hacemos realidad la pedida que siempre soñaste',
  bio:
    'Perfect Planners nace en Querétaro con una idea muy concreta: que la pregunta más importante de tu vida tenga el escenario que merece. Diseñamos pedidas de matrimonio, pedidas de novia, aniversarios y citas sorpresa con corazones de rosas, letras gigantes, velas, chisperos y música, y nos encargamos de todo para que tú solo tengas que ponerte nervioso. Conocemos cada terraza, kiosco y mirador de Tequisquiapan, Peña de Bernal y San Juan del Río, y cuidamos el secreto hasta el último segundo.',
  bioShort:
    'Organizamos pedidas de matrimonio, pedidas de novia y aniversarios en Querétaro. Tú pones la pregunta, nosotros el escenario, la luz y cada detalle.',
  quote: 'La pregunta más emocionante de tu vida, con la persona que más te emociona.',
}

export const services: Array<{
  title: string
  slug: string
  kicker: string
  description: string
  longDescription: string
  includes: string[]
  image: string
}> = [
  {
    title: 'Pedida de matrimonio',
    slug: 'pedida-de-matrimonio',
    kicker: 'El sí más esperado',
    description: 'Escenario completo para pedir la mano: corazón de rosas, camino de velas, neón y el anillo en el momento justo.',
    longDescription:
      'Diseñamos tu pedida desde cero a partir de cómo es tu pareja: si le gustan los atardeceres, si es de sorpresas grandes o íntimas, si quiere a la familia escondida detrás del kiosco. Buscamos el lugar, montamos el escenario horas antes, coordinamos cómo llega sin sospechar nada y dejamos al fotógrafo en posición para que no se pierda ni una lágrima. Cuando termina, recogemos todo y ustedes solo se van a celebrar.',
    includes: ['Corazón de rosas rojo o rosa con neón', 'Camino de velas y pétalos', 'Fotografía con cámara profesional', 'Ramo de flores natural', 'Coordinación de la llegada'],
    image: '/photos/corazon-rojo-anillo-rodilla.webp',
  },
  {
    title: 'Pedida de novia',
    slug: 'pedida-de-novia',
    kicker: '¿Quieres ser mi novia?',
    description: 'Para el primer gran paso: un rincón con flores, luces y el letrero que lo dice todo sin que te tiemble la voz.',
    longDescription:
      'El comienzo de una historia también merece escenario. Montamos un rincón íntimo con nuestro corazón de rosas y el neón “¿Quieres ser mi novia?”, velas, globos o una mesa para cenar después. Funciona en una terraza, en un jardín o en casa, y lo dejamos listo en poco tiempo para que la sorpresa sea total. Es nuestra propuesta más pedida por quienes quieren algo especial sin montar una producción enorme.',
    includes: ['Corazón rosa o rojo con neón personalizado', 'Ramo de flores', 'Velas y pétalos', 'Música ambiente', 'Montaje y retiro'],
    image: '/photos/corazon-rosa-ramo.webp',
  },
  {
    title: 'Aniversarios y citas sorpresa',
    slug: 'aniversarios',
    kicker: 'Volver a enamorarse',
    description: 'Veladas románticas con cena, música en vivo y actividad en pareja para celebrar los años juntos.',
    longDescription:
      'Un aniversario puede ser mucho más que reservar mesa. Organizamos veladas con letras iluminadas, camino de velas, chisperos, músico en vivo y una actividad en pareja pensada para ustedes. También preparamos renovaciones de votos pequeñas y sorpresas de cumpleaños con el mismo cuidado que una pedida. Nos cuentas su historia y la convertimos en una noche que no se parece a ninguna otra.',
    includes: ['Renta de lugar o montaje en casa', 'Velada romántica con música', 'Actividad en pareja', 'Chisperos y letras luminosas', 'Fotografía del momento'],
    image: '/photos/marry-me-abrazo.webp',
  },
  {
    title: 'Escenarios y renta',
    slug: 'escenarios',
    kicker: 'Nuestros montajes',
    description: 'Corazón rojo, corazón rosa, letras MARRY ME, teepee y globo aerostático para tu propio evento.',
    longDescription:
      'Si ya tienes el plan y solo te falta el escenario, rentamos nuestros montajes con instalación incluida: el corazón rojo de rosas, el nuevo corazón rosa, las letras gigantes MARRY ME con focos, el teepee para picnic romántico y las pedidas en globo aerostático. Llegamos, montamos, iluminamos y desaparecemos para que el momento sea solo suyo.',
    includes: ['Letras MARRY ME iluminadas', 'Corazón de rosas rojo o rosa', 'Teepee con picnic', 'Pedida en globo aerostático', 'Chisperos fríos de pista'],
    image: '/photos/letras-marry-me-fuentes.webp',
  },
]

export const stages: Array<{ name: string; text: string; image: string }> = [
  {
    name: 'Corazón rojo',
    text: 'Nuestro clásico: cientos de rosas rojas en un corazón de más de dos metros con neón blanco. Se ve igual de impresionante en una terraza que frente a la Peña.',
    image: '/photos/corazon-rojo-chisperos-terraza.webp',
  },
  {
    name: 'Corazón rosa',
    text: 'El nuevo integrante, hecho con flores en tonos rosa y durazno junto a @limonymiel_floreria. Más suave, perfecto para interiores y pedidas de novia.',
    image: '/photos/corazon-rosa-abrazo.webp',
  },
  {
    name: 'Letras MARRY ME',
    text: 'Letras de más de un metro con focos cálidos. Con fuentes, un kiosco detrás o un jardín abierto, no hace falta decir nada más.',
    image: '/photos/marry-me-pareja.webp',
  },
  {
    name: 'Kiosco iluminado',
    text: 'Camino de velas, alfombra roja, chisperos a los lados y el corazón esperando bajo la cúpula. Para quien quiere escena de película.',
    image: '/photos/kiosco-chisperos-alfombra-roja.webp',
  },
]

export const processSteps: Array<{ number: number; title: string; description: string }> = [
  {
    number: 1,
    title: 'Nos mandas un mensaje',
    description: 'Escríbenos por WhatsApp o DM con la fecha que tienes en mente y cómo es tu pareja. Con eso ya empezamos a imaginar.',
  },
  {
    number: 2,
    title: 'Elegimos escenario y lugar',
    description: 'Te proponemos montaje, lugar y extras según tu presupuesto: corazón, letras, kiosco, música, fotógrafo. Apartas la fecha con anticipo.',
  },
  {
    number: 3,
    title: 'Planeamos la sorpresa',
    description: 'Definimos contigo la excusa, la hora de llegada y quién estará escondido. Guardamos el secreto y te acompañamos por mensaje todo el día.',
  },
  {
    number: 4,
    title: 'Tú solo haces la pregunta',
    description: 'Montamos horas antes, encendemos velas y chisperos al llegar y el fotógrafo captura todo. Al terminar, recogemos y ustedes celebran.',
  },
]

export const testimonials: Array<{ name: string; date: string; location: string; service: string; text: string }> = [
  {
    name: 'Daniel y Fernanda',
    date: 'Septiembre 2026',
    location: 'Terraza frente a la Peña de Bernal',
    service: 'Pedida de matrimonio',
    text:
      'Yo solo le dije que íbamos a cenar a Bernal. Cuando subimos a la terraza ya estaba el corazón rojo encendido con la Peña detrás y las velas marcando el camino. Me temblaban las manos y el equipo me iba escribiendo por WhatsApp cuándo avanzar. Dijo que sí antes de que terminara la frase.',
  },
  {
    name: 'Ricardo M.',
    date: 'Agosto 2026',
    location: 'Tequisquiapan',
    service: 'Pedida de novia',
    text:
      'Quería algo bonito pero no exagerado para pedirle que fuera mi novia. Me recomendaron el corazón rosa y fue perfecto, hasta el ramo iba a juego. Lo montaron en menos de una hora en el jardín de la casa de sus papás y ella no sospechó nada.',
  },
  {
    name: 'Alejandra y Tomás',
    date: 'Junio 2026',
    location: 'San Juan del Río',
    service: 'Aniversario, 5 años',
    text:
      'Mi esposo organizó nuestro quinto aniversario con ellos y todavía no me lo creo. Letras MARRY ME otra vez, como en su pedida, un violinista y chisperos al final. Las fotos quedaron preciosas y las tenemos colgadas en la sala.',
  },
  {
    name: 'Jorge Luis y Mariana',
    date: 'Abril 2026',
    location: 'Kiosco en Querétaro',
    service: 'Pedida con kiosco iluminado',
    text:
      'Lo que más valoro es que pensaron en todo: la excusa para llevarla, el clima, dónde esconder a nuestras familias detrás del kiosco. La alfombra roja con los chisperos parecía de película. Súper puntuales y muy atentos con cada duda que tuve.',
  },
]

export const photos: Array<{ src: string; alt: string; featured: boolean; orientation: 'landscape' | 'portrait' }> = [
  { src: '/photos/corazon-rojo-chisperos-terraza.webp', alt: 'Pedida de mano bajo un corazón de rosas rojas con neón y chisperos en una terraza de madera al anochecer', featured: true, orientation: 'portrait' },
  { src: '/photos/corazon-rosa-ramo.webp', alt: 'Chico con ramo de rosas frente al corazón rosa con neón ¿Quieres ser mi novia?', featured: true, orientation: 'landscape' },
  { src: '/photos/pena-bernal-corazon-beso.webp', alt: 'Pareja besándose bajo un arco de flores en forma de corazón con la Peña de Bernal al fondo', featured: true, orientation: 'portrait' },
  { src: '/photos/kiosco-chisperos-alfombra-roja.webp', alt: 'Kiosco iluminado con corazón de rosas, alfombra roja, velas y chisperos por la noche', featured: true, orientation: 'portrait' },
  { src: '/photos/letras-marry-me-fuentes.webp', alt: 'Letras gigantes MARRY ME iluminadas frente a un kiosco con fuentes de agua de colores', featured: true, orientation: 'landscape' },
  { src: '/photos/corazon-rojo-anillo-rodilla.webp', alt: 'Novio arrodillado besando la mano de su pareja frente al corazón rojo con neón ¿Te quieres casar conmigo?', featured: false, orientation: 'portrait' },
  { src: '/photos/manos-anillo-neon.webp', alt: 'Manos entrelazadas con anillo de compromiso bajo el neón Te quieres casar conmigo', featured: true, orientation: 'portrait' },
  { src: '/photos/marry-me-pareja.webp', alt: 'Pareja abrazada detrás de las letras luminosas MARRY ME con luz azul de fondo', featured: false, orientation: 'landscape' },
  { src: '/photos/kiosco-corazon-neon.webp', alt: 'Kiosco de columnas blancas con corazón de rosas rojas y neón ¿Quieres ser mi novia?', featured: false, orientation: 'portrait' },
  { src: '/photos/corazon-rosa-abrazo.webp', alt: 'Pareja abrazada junto al corazón de flores rosas con neón en un salón con luz cálida', featured: false, orientation: 'landscape' },
  { src: '/photos/pena-bernal-pareja-mano.webp', alt: 'Pareja de la mano mirando el corazón de flores iluminado en un mirador al atardecer', featured: false, orientation: 'portrait' },
  { src: '/photos/marry-me-beso.webp', alt: 'Beso junto a la letra M iluminada tras una pedida de matrimonio nocturna', featured: false, orientation: 'landscape' },
  { src: '/photos/kiosco-fuentes-camino-velas.webp', alt: 'Camino de velas sobre el pasto hacia un kiosco iluminado entre fuentes de colores', featured: false, orientation: 'portrait' },
  { src: '/photos/corazon-flores-noche-fuentes.webp', alt: 'Corazón de flores con neón ¿Quieres ser mi novia? junto a fuentes iluminadas por la noche', featured: false, orientation: 'portrait' },
  { src: '/photos/marry-me-abrazo.webp', alt: 'Abrazo emocionado de una pareja entre luces azules y letras MARRY ME', featured: false, orientation: 'landscape' },
]

export const faqs: Array<{ q: string; a: string }> = [
  {
    q: '¿Con cuánta anticipación debo reservar?',
    a: 'Lo ideal son dos o tres semanas, sobre todo en febrero, septiembre y diciembre. Si tienes prisa escríbenos igual: muchas pedidas las hemos armado en pocos días.',
  },
  {
    q: '¿En qué zonas trabajan?',
    a: 'En todo el estado de Querétaro: la capital, San Juan del Río, Tequisquiapan, Peña de Bernal, Ezequiel Montes y los pueblos mágicos cercanos. Para otras ciudades pregúntanos.',
  },
  {
    q: '¿Ustedes consiguen el lugar?',
    a: 'Sí. Tenemos terrazas, kioscos y miradores con los que trabajamos seguido, y también montamos en tu casa, jardín o el restaurante que elijas.',
  },
  {
    q: '¿Qué pasa si llueve?',
    a: 'Siempre dejamos un plan B techado acordado de antemano. Si el clima cambia, te avisamos con tiempo y movemos el montaje sin costo extra dentro del mismo lugar.',
  },
  {
    q: '¿Cómo aparto la fecha?',
    a: 'Con un anticipo que se descuenta del total. El resto se liquida antes del evento. Te mandamos por WhatsApp la propuesta con todo desglosado.',
  },
]

export const photo = (name: string) => {
  const p = photos.find((x) => x.src === `/photos/${name}.webp`)
  if (!p) throw new Error(`Foto no encontrada: ${name}`)
  return p
}

export const altOf = (src: string) => photos.find((x) => x.src === src)?.alt ?? ''
