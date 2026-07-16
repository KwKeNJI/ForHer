import published from './content/published.json'
import type { PublishedContent } from './content/types'
import { Journey } from './journey/Journey'
import { createLocalStorageFirstOpenMemory } from './journey/firstOpenMemory'

const content = published as PublishedContent
const firstOpenMemory = createLocalStorageFirstOpenMemory()

export default function App() {
  return <Journey content={content} firstOpenMemory={firstOpenMemory} />
}
