import { useState } from 'react'
import { FloatingAccents } from '../effects/FloatingAccents'

type EnvelopeProps = {
  onOpen: () => void
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    window.setTimeout(() => {
      onOpen()
    }, 900)
  }

  return (
    <main className="screen envelope-screen">
      <FloatingAccents />
      <div className="glow glow-top" aria-hidden="true" />
      <div className="glow glow-bottom" aria-hidden="true" />

      <div className="envelope-content">
        <p className="brand-mark">Heartfelt Dates</p>
        <h1 className="envelope-headline">A message from my heart...</h1>
        <p className="envelope-subhead">Waiting to be discovered by you</p>
        <div className="squiggle" aria-hidden="true" />

        <div
          className={`envelope${opening ? ' envelope--opening' : ''}`}
          aria-hidden="true"
        >
          <div className="envelope-body">
            <div className="envelope-flap" />
            <div className="envelope-letter">
              <span className="heart-icon">♥</span>
            </div>
            <div className="envelope-seal">
              <span aria-hidden="true">✉</span>
            </div>
            <div className="envelope-base" />
          </div>
        </div>

        <button
          type="button"
          className="cta-primary"
          onClick={handleOpen}
          disabled={opening}
        >
          Open with Love
        </button>
      </div>
    </main>
  )
}
