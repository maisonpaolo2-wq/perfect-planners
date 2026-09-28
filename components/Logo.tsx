// Firma caligráfica "Perfect Planners" + "BY LARM", como el logo de Instagram
export function HeartMark({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.5s-7.5-4.4-7.5-10.1A4.1 4.1 0 0 1 12 8.1a4.1 4.1 0 0 1 7.5 2.3c0 5.7-7.5 10.1-7.5 10.1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Logo() {
  return (
    <span className="logo">
      <span className="logo__script">Perfect Planners</span>
      <small className="logo__by">by larm</small>
    </span>
  )
}
