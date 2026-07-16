import { useState } from 'react'
import type { PublishedContent } from '../content/types'
import { DatePlan } from '../screens/DatePlan'
import { Envelope } from '../screens/Envelope'
import { Reveal } from '../screens/Reveal'
import type { FirstOpenMemory } from './firstOpenMemory'

export type JourneyStep = 'envelope' | 'reveal' | 'datePlan'

type JourneyProps = {
  content: PublishedContent
  firstOpenMemory: FirstOpenMemory
}

function initialStep(memory: FirstOpenMemory): JourneyStep {
  return memory.hasCompletedFirstOpen() ? 'datePlan' : 'envelope'
}

export function Journey({ content, firstOpenMemory }: JourneyProps) {
  const [step, setStep] = useState<JourneyStep>(() =>
    initialStep(firstOpenMemory),
  )

  if (step === 'envelope') {
    return (
      <Envelope
        onOpen={() => {
          setStep('reveal')
        }}
      />
    )
  }

  if (step === 'reveal') {
    return (
      <Reveal
        apology={content.apology}
        onContinue={() => {
          firstOpenMemory.markFirstOpenComplete()
          setStep('datePlan')
        }}
      />
    )
  }

  return <DatePlan datePlan={content.datePlan} />
}
