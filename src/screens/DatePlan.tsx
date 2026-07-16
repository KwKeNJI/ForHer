import type { PublishedContent } from '../content/types'
import { FloatingHeart3D } from '../effects/FloatingHeart3D'
import { HeartShader } from '../effects/HeartShader'

type DatePlanProps = {
  datePlan: PublishedContent['datePlan']
}

export function DatePlan({ datePlan }: DatePlanProps) {
  return (
    <main className="screen date-plan-screen">
      <section className="date-plan-hero">
        <HeartShader className="hero-shader" />
        <div className="date-plan-hero-content">
          <p className="brand-mark">Heartfelt Dates</p>
          <p className="section-eyebrow">Our next adventure</p>
          <h1 className="date-plan-headline">Our Date Plan</h1>
          <p className="shared-date">{datePlan.date}</p>
          <div className="hero-heart" aria-hidden="true">
            <FloatingHeart3D />
          </div>
        </div>
      </section>

      <section className="activities" aria-label="Activities">
        {datePlan.activities.map((activity) => (
          <article key={activity.title} className="activity-card">
            <div className="activity-image-wrap">
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="activity-image"
              />
              <span className="vibe">{activity.vibe}</span>
            </div>
            <h2 className="activity-title">{activity.title}</h2>
            <p className="activity-time">{activity.time}</p>
            <p className="activity-description">{activity.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
