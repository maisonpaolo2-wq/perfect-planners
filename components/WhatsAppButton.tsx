import { siteConfig } from '@/content/data'

export const waLink = (text = 'Hola Perfect Planners, quiero organizar una sorpresa.') =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`

export default function WhatsAppButton() {
  return (
    <a className="wa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.97 1-3.62-.24-.37a9.8 9.8 0 1 1 8.33 4.6zm8.34-18.14A11.75 11.75 0 0 0 12.05.2C5.55.2.26 5.48.26 11.98c0 2.08.54 4.1 1.58 5.9L.16 24l6.27-1.64a11.8 11.8 0 0 0 5.62 1.43h.01c6.5 0 11.79-5.29 11.79-11.79 0-3.15-1.23-6.11-3.46-8.34z" />
      </svg>
    </a>
  )
}
