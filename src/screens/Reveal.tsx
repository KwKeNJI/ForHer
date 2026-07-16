import { FloatingAccents } from '../effects/FloatingAccents'

type RevealProps = {
  apology: string
  onContinue: () => void
}

export function Reveal({ apology, onContinue }: RevealProps) {
  return (
    <main className="screen reveal-screen">
      <FloatingAccents />
      <div className="reveal-content">
        <p className="brand-mark">Kai Wen and Hui Jing</p>
        <blockquote className="apology">{apology}</blockquote>
        <svg
          className="squiggle-svg"
          viewBox="0 0 120 20"
          width="120"
          height="20"
          aria-hidden="true"
        >
          <path
            d="M2 18C20 2 40 18 60 2C80 18 100 2 118 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <button type="button" className="cta-primary" onClick={onContinue}>
          See Our Date Plan
        </button>
        <p className="journey-label">Kai Wen and Hui Jing's Journey</p>
      </div>
    </main>
  )
}
