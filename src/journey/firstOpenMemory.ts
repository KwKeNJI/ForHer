const STORAGE_KEY = 'heartfelt-dates-first-open'

export type FirstOpenMemory = {
  hasCompletedFirstOpen: () => boolean
  markFirstOpenComplete: () => void
}

export function createLocalStorageFirstOpenMemory(
  storage: Storage = localStorage,
): FirstOpenMemory {
  return {
    hasCompletedFirstOpen: () => storage.getItem(STORAGE_KEY) === 'true',
    markFirstOpenComplete: () => {
      storage.setItem(STORAGE_KEY, 'true')
    },
  }
}

export function createInMemoryFirstOpenMemory(
  initiallyComplete = false,
): FirstOpenMemory {
  let complete = initiallyComplete
  return {
    hasCompletedFirstOpen: () => complete,
    markFirstOpenComplete: () => {
      complete = true
    },
  }
}
