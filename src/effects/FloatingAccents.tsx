import { useEffect, useMemo, useState } from 'react'

type Accent = {
  id: number
  left: string
  top: string
  size: number
  delay: string
  duration: string
  glyph: string
  color: string
}

const GLYPHS = ['♥', '✦', '✧', '❤']
const COLORS = ['#b90760', '#ff4d94', '#e17350', '#feb700']

function createAccents(count: number): Accent[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 12 + Math.random() * 20,
    delay: `${Math.random() * 4}s`,
    duration: `${4 + Math.random() * 4}s`,
    glyph: GLYPHS[id % GLYPHS.length]!,
    color: COLORS[id % COLORS.length]!,
  }))
}

export function FloatingAccents() {
  const [visible, setVisible] = useState(true)
  const accents = useMemo(() => createAccents(12), [])

  useEffect(() => {
    const onVisibility = () => {
      setVisible(document.visibilityState === 'visible')
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  if (!visible) return null

  return (
    <div className="floating-accents" aria-hidden="true">
      {accents.map((accent) => (
        <span
          key={accent.id}
          className="floating-accent"
          style={{
            left: accent.left,
            top: accent.top,
            fontSize: accent.size,
            animationDelay: accent.delay,
            animationDuration: accent.duration,
            color: accent.color,
          }}
        >
          {accent.glyph}
        </span>
      ))}
    </div>
  )
}
