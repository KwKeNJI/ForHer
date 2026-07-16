export type Activity = {
  imageUrl: string
  vibe: string
  title: string
  time: string
  description: string
}

export type PublishedContent = {
  apology: string
  datePlan: {
    date: string
    activities: Activity[]
  }
}
