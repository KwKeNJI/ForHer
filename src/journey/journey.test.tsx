import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import type { PublishedContent } from '../content/types'
import { createInMemoryFirstOpenMemory } from './firstOpenMemory'
import { Journey } from './Journey'

const testContent: PublishedContent = {
  apology:
    'I hurt you with what I said, and I am sorry. I want to make it right.',
  datePlan: {
    date: 'Saturday, August 15, 2026',
    activities: [
      {
        imageUrl: 'https://example.com/picnic.jpg',
        vibe: 'Quiet',
        title: 'Sunset Picnic',
        time: '5:00 PM',
        description: 'Cheese, strawberries, and cider.',
      },
      {
        imageUrl: 'https://example.com/stars.jpg',
        vibe: 'Candle-lit',
        title: 'Stargazing',
        time: '8:30 PM',
        description: 'Blankets and hot cocoa under the sky.',
      },
    ],
  },
}

describe('Journey', () => {
  it('on First Open walks Envelope → Reveal (Apology) → Date Plan', async () => {
    const user = userEvent.setup()
    const memory = createInMemoryFirstOpenMemory(false)

    render(<Journey content={testContent} firstOpenMemory={memory} />)

    expect(
      screen.getByRole('button', { name: /open with love/i }),
    ).toBeInTheDocument()
    expect(screen.queryByText(testContent.apology)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /open with love/i }))

    expect(
      await screen.findByText(testContent.apology, {}, { timeout: 1500 }),
    ).toBeInTheDocument()
    expect(screen.queryByText(testContent.datePlan.date)).not.toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: /see our date plan/i }),
    )

    expect(screen.getByText(testContent.datePlan.date)).toBeInTheDocument()
    expect(screen.queryByText(testContent.apology)).not.toBeInTheDocument()
  })

  it('after First Open, return visit lands on Date Plan', () => {
    const memory = createInMemoryFirstOpenMemory(true)

    render(<Journey content={testContent} firstOpenMemory={memory} />)

    expect(screen.getByText(testContent.datePlan.date)).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /open with love/i }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText(testContent.apology)).not.toBeInTheDocument()
  })

  it('has no path back to the Apology after leaving the Reveal', async () => {
    const user = userEvent.setup()
    const memory = createInMemoryFirstOpenMemory(false)

    render(<Journey content={testContent} firstOpenMemory={memory} />)

    await user.click(screen.getByRole('button', { name: /open with love/i }))
    await screen.findByText(testContent.apology, {}, { timeout: 1500 })
    await user.click(
      screen.getByRole('button', { name: /see our date plan/i }),
    )

    expect(screen.queryByText(testContent.apology)).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /open with love/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /apology|reveal|back/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /apology|reveal|back/i }),
    ).not.toBeInTheDocument()
  })

  it('shows the shared date and each Activity field in order', () => {
    const memory = createInMemoryFirstOpenMemory(true)

    render(<Journey content={testContent} firstOpenMemory={memory} />)

    expect(screen.getByText(testContent.datePlan.date)).toBeInTheDocument()

    const activities = screen.getAllByRole('article')
    expect(activities).toHaveLength(2)

    const [first, second] = activities
    expect(within(first).getByText('Quiet')).toBeInTheDocument()
    expect(within(first).getByText('Sunset Picnic')).toBeInTheDocument()
    expect(within(first).getByText('5:00 PM')).toBeInTheDocument()
    expect(
      within(first).getByText('Cheese, strawberries, and cider.'),
    ).toBeInTheDocument()
    expect(within(first).getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/picnic.jpg',
    )

    expect(within(second).getByText('Candle-lit')).toBeInTheDocument()
    expect(within(second).getByText('Stargazing')).toBeInTheDocument()
    expect(within(second).getByText('8:30 PM')).toBeInTheDocument()
    expect(
      within(second).getByText('Blankets and hot cocoa under the sky.'),
    ).toBeInTheDocument()
  })

  it('never shows Edit, Remove, or add-Activity controls', () => {
    const memory = createInMemoryFirstOpenMemory(true)

    render(<Journey content={testContent} firstOpenMemory={memory} />)

    expect(screen.queryByRole('button', { name: /edit/i })).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /remove/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /add|plan another/i }),
    ).not.toBeInTheDocument()
  })
})
