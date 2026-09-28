import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type Lead = {
  name?: string
  email?: string
  phone?: string
  eventType?: string
  date?: string
  guests?: string
  message?: string
  privacy?: string
  company?: string
}

const esc = (s = '') => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)
const clip = (s: unknown, n = 2000) => (typeof s === 'string' ? s.trim().slice(0, n) : '')

export async function POST(req: Request) {
  let body: Lead
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Formato no válido' }, { status: 400 })
  }

  // Honeypot: los bots rellenan el campo oculto
  if (body.company) return NextResponse.json({ ok: true })

  const lead = {
    name: clip(body.name, 120),
    email: clip(body.email, 160),
    phone: clip(body.phone, 40),
    eventType: clip(body.eventType, 60),
    date: clip(body.date, 60),
    guests: clip(body.guests, 20),
    message: clip(body.message),
  }

  if (lead.name.length < 2) return NextResponse.json({ error: 'Falta el nombre' }, { status: 422 })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return NextResponse.json({ error: 'Email no válido' }, { status: 422 })
  if (lead.phone.replace(/\D/g, '').length < 9) return NextResponse.json({ error: 'Teléfono no válido' }, { status: 422 })
  if (!body.privacy) return NextResponse.json({ error: 'Falta aceptar la política de privacidad' }, { status: 422 })

  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.log('[lead] RESEND_API_KEY no configurada, lead recibido:', lead)
    return NextResponse.json({ ok: true })
  }

  const rows = Object.entries(lead)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#7c7a70">${k}</td><td>${esc(v) || '·'}</td></tr>`)
    .join('')

  try {
    const resend = new Resend(key)
    const { error } = await resend.emails.send({
      from: process.env.LEAD_FROM_EMAIL || 'Web Perfect Planners <onboarding@resend.dev>',
      to: process.env.LEAD_TO_EMAIL || 'hola@perfectplanners.mx',
      replyTo: lead.email,
      subject: `Nueva sorpresa · ${lead.eventType} · ${lead.name}`,
      html: `<h2 style="font-family:Georgia,serif">Nueva consulta desde la web</h2><table>${rows}</table>`,
    })
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[lead] error Resend', e)
    return NextResponse.json({ error: 'No se pudo enviar ahora mismo' }, { status: 502 })
  }
}
