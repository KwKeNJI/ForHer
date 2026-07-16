import { useCallback, useRef, useState } from 'react'

type Offset = { x: number; y: number }

export function AgreePrompt() {
  const [agreed, setAgreed] = useState(false)
  const [noOffset, setNoOffset] = useState<Offset>({ x: 0, y: 0 })
  const [yesPulse, setYesPulse] = useState(false)
  const areaRef = useRef<HTMLDivElement>(null)

  const agree = useCallback(() => {
    setAgreed(true)
    setYesPulse(true)
    setNoOffset({ x: 0, y: 0 })
  }, [])

  const dodgeNo = useCallback(() => {
    if (agreed) return
    const area = areaRef.current
    const maxX = area ? Math.min(120, area.clientWidth * 0.28) : 100
    const maxY = 56
    const angle = Math.random() * Math.PI * 2
    const distance = 48 + Math.random() * 56
    setNoOffset({
      x: Math.cos(angle) * Math.min(distance, maxX),
      y: Math.sin(angle) * Math.min(distance, maxY),
    })
    setYesPulse(true)
    window.setTimeout(() => setYesPulse(false), 450)
  }, [agreed])

  if (agreed) {
    return (
      <section className="agree-prompt agree-prompt--done" aria-live="polite">
        <p className="agree-celebration">It&apos;s a yes. See you then. ♥</p>
      </section>
    )
  }

  return (
    <section className="agree-prompt" aria-label="Agree to the Date Plan">
      <p className="agree-question">So… are we on for this date?</p>
      <div className="agree-actions" ref={areaRef}>
        <button
          type="button"
          className={`cta-primary agree-yes${yesPulse ? ' agree-yes--pulse' : ''}`}
          onClick={agree}
        >
          Yes, I agree
        </button>
        <button
          type="button"
          className="agree-no"
          style={{
            transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
          }}
          onMouseEnter={dodgeNo}
          onFocus={dodgeNo}
          onPointerDown={dodgeNo}
        >
          No
        </button>
      </div>
    </section>
  )
}
