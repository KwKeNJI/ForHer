Status: implemented

# Heartfelt Dates — Gift Journey Spec

## Problem Statement

I hurt my girlfriend with something I said. We have one planned date next month, and I want to give her something more lasting than a text apology: a cute, personal website she can open on her phone that feels like a gift — an Envelope she opens, an Apology she reads, and a clear Date Plan of Activities for that day so she can see I’m serious about making it up to her. I need to be able to add, update, or remove Activities myself as plans firm up, without building a backend or asking her to manage anything.

## Solution

A frontend-only static site (“Heartfelt Dates”) deployed on GitHub Pages. She is the Viewer; I am the Editor. She experiences a linear Journey: Envelope → Reveal (Apology) → Date Plan. Activities live in a Published data file I edit and redeploy. After First Open, return visits skip straight to the Date Plan. There is no path back to the Apology after leaving the Reveal. The live site is Viewer-only (no edit controls), mobile-first, accessible via a privately shared obscure link (no password), and keeps the rich WebGL / Three.js motion from the Stitch designs.

## User Stories

1. As the Editor, I want a website that feels like a personal gift, so that my Apology and Date Plan land as care, not as an app.
2. As the Viewer, I want to open a link on my phone, so that I can experience the gift without installing anything.
3. As the Viewer, I want the layout to work on a small screen, so that nothing feels broken or cramped on mobile.
4. As the Viewer, I want the site to also work on desktop, so that I can open it on a laptop if I choose.
5. As the Viewer, I want to land on an Envelope first, so that the gift feels sealed and intentional.
6. As the Viewer, I want a clear “Open with Love” (or equivalent) action on the Envelope, so that I know how to begin.
7. As the Viewer, I want opening the Envelope to feel animated and special, so that the moment matches the emotion.
8. As the Viewer, I want the Reveal to show the Apology, so that I feel heard before seeing plans.
9. As the Viewer, I want the Apology to name the hurt and the intent to make it right, so that the message is sincere, not vague.
10. As the Viewer, I want a clear action after the Apology to enter the Date Plan, so that the Journey continues without confusion.
11. As the Viewer, I want the Date Plan to feel forward-looking, so that the Apology and the plans stay emotionally separate.
12. As the Viewer, I want to see one shared calendar date for the outing, so that I know which day we’re talking about.
13. As the Viewer, I want to see an ordered list of Activities for that day, so that I can anticipate the plan.
14. As the Viewer, I want each Activity to show an image, so that each stop feels vivid.
15. As the Viewer, I want each Activity to show a Vibe label, so that I get the mood of each stop at a glance.
16. As the Viewer, I want each Activity to show a title, so that I know what we’re doing.
17. As the Viewer, I want each Activity to show a time that day, so that I know when each stop happens.
18. As the Viewer, I want each Activity to show a description, so that I understand why it matters.
19. As the Viewer, I do not want to see Edit, Remove, or “add Activity” controls, so that the site feels like a gift, not a tool.
20. As the Viewer, I do not want product-style navigation (Our Story, Date Ideas, Apologies, Planning), so that the experience stays intimate and linear.
21. As the Viewer, I do not want legal footer chrome on the gift screens, so that nothing breaks the mood.
22. As the Viewer on First Open, I want to complete Envelope → Reveal → Date Plan in order, so that the ceremony happens once.
23. As the Viewer after First Open, I want return visits to open on the Date Plan, so that I can check the plan without repeating the ceremony.
24. As the Viewer after leaving the Reveal, I want no path back to the Apology, so that the Apology remains a one-time beat.
25. As the Editor, I want to add an Activity by editing a data file, so that I can extend the Date Plan without a backend.
26. As the Editor, I want to update an Activity in that data file, so that details can change as plans firm up.
27. As the Editor, I want to remove an Activity from that data file, so that cancelled stops disappear after Publish.
28. As the Editor, I want to Publish by redeploying the static site, so that the Viewer sees the latest content on any device.
29. As the Editor, I want Activity images to be remote URLs in the data file, so that I can Publish without committing image binaries.
30. As the Editor, I want to update the Apology copy in Published content, so that I can refine the wording before she opens it.
31. As the Editor, I want to set the Date Plan’s shared calendar date in Published content, so that the day is accurate.
32. As the Editor, I want Activities ordered in the data file to match display order, so that the day reads morning → night (or whatever order I choose).
33. As the Viewer, I want rich visual motion (including heavy WebGL / Three.js effects from the designs), so that the gift feels magical.
34. As the Editor, I want those heavy effects kept even on mobile, so that the wow factor is not stripped for performance alone.
35. As the Editor, I still want light mobile optimizations where easy (e.g. pause off-screen, lower DPR), so that the phone does not melt unnecessarily.
36. As the Viewer, I want access via a hard-to-guess private URL, so that random people are unlikely to find the gift.
37. As the Viewer, I do not want a password gate before the Envelope, so that opening the gift stays frictionless on mobile.
38. As the Editor, I want to share the URL privately only, so that the gift stays between us.
39. As the Editor, I want a frontend-only architecture, so that I do not run or pay for a backend host.
40. As the Editor, I want deployment on GitHub Pages, so that hosting stays simple and free for a static gift.
41. As the Editor, I want the app built with Vite, React, and TypeScript, so that Journey state and UI composition stay maintainable.
42. As the Editor, I want the visual language to follow the Whimsical Romance / Stitch designs (Envelope, Reveal, Date Plan cards), so that what she sees matches the intended cute look.
43. As the Viewer, I want floating / sparkle accents where the designs call for them, so that the Journey feels alive.
44. As the Viewer, I want Activity cards to feel scrapbook-like (soft surfaces, gentle hover/press feedback), so that the Date Plan is delightful to browse.
45. As the Editor, I want First Open remembered only in the Viewer’s browser, so that there are no accounts or servers.
46. As the Viewer on a new browser or cleared storage, I want First Open to run again, so that a fresh device still gets the ceremony.
47. As the Editor, I want a single Date Plan only (not multiple outings), so that the gift stays focused on our next month date.
48. As the Viewer, I want Activity times to be clock times for that shared date (not separate calendar dates per card), so that the day is easy to read.
49. As the Editor, I want placeholder Stitch content replaceable with real Apology text, date, and Activities before sharing, so that she never sees mock copy.
50. As someone implementing the feature, I want one test seam at the Journey, so that behavior is verified without coupling to animation internals.

## Implementation Decisions

- Respect `CONTEXT.md` vocabulary (Journey, Envelope, Reveal, Apology, Date Plan, Activity, Vibe, Viewer, Editor, Publish, First Open) and ADRs 0001–0010.
- Greenfield app: Vite + React + TypeScript SPA, static deploy to GitHub Pages (ADR 0010). Configure Vite `base` for the project Pages URL shape.
- No backend, no database, no Render (ADR 0001).
- Published content lives in a committed data file (JSON or equivalent) that includes at least: Apology text, Date Plan calendar date, ordered Activities (image URL, Vibe, title, time, description). Editor changes content by editing this file and Publishing via redeploy (ADR 0002).
- Activity images are remote URLs, not repo binaries (ADR 0009). Prefer stable URLs over disposable design-tool links.
- Journey is linear and fixed for v1: Envelope → Reveal → Date Plan (ADR 0003). No separate Our Story / Apologies / Planning pages; strip marketing nav and legal footer chrome from Viewer UI.
- Reveal presents the Apology; Date Plan is forward-looking only.
- Live site is Viewer-only: never render Edit / Remove / add-Activity controls (ADR 0005). Stitch mocks that show those controls are design reference only.
- First Open: persist a client-only flag after Envelope → Reveal completes. Later visits route to Date Plan. No navigation back to Apology after leaving Reveal (ADR 0004, updated).
- Access: obscure private URL; no password gate (ADR 0006).
- Mobile-first layout and touch targets (ADR 0007); desktop supported secondarily.
- Keep heavy WebGL / Three.js (and related) effects from Stitch; allow light mobile mitigations without replacing the effects (ADR 0008).
- Port visual design from `stitch_sweet_date_planner` screens: Envelope (`heartfelt_dates_the_envelope_restored`), Reveal (`heartfelt_dates_the_reveal_linked`), Date Plan cards from `heartfelt_dates_home`, design tokens from Whimsical Romance DESIGN.md (newer pink/magenta system preferred over the older cream mock where they diverge).
- Journey routing/state is owned at the app shell; screens are presentational given Published content + Journey step.
- Decision-rich content shape (illustrative, from design discussion — not a locked schema file path):

```ts
type PublishedContent = {
  apology: string
  datePlan: {
    date: string // shared calendar date for the outing
    activities: Array<{
      imageUrl: string
      vibe: string
      title: string
      time: string // time that day only
      description: string
    }>
  }
}
```

- First Open memory is browser-local only (e.g. `localStorage`); absence of the flag means First Open path.

## Testing Decisions

- Good tests assert external Viewer behavior only — not WebGL internals, CSS class names, or framework implementation details.
- **Single seam: Journey.** Drive the app as the Viewer with Published content + First Open memory as inputs; assert which step/content is visible and that Editor controls are absent.
- Cover at least:
  - First visit walks Envelope → Reveal (Apology visible) → Date Plan
  - After First Open, revisit lands on Date Plan
  - No path to Apology after leaving Reveal
  - Date Plan shows one shared date; Activities show all five fields in order
  - No Edit / Remove / add controls on the live UI
- No prior art in-repo (greenfield). Prefer Vitest + React Testing Library (or equivalent) at the Journey seam once the app exists.
- Visual/motion quality is manual / out of automated seam scope unless it blocks Journey progression.

## Out of Scope

- Backend, database, auth, accounts, or Render hosting
- Password / unlock gate
- Viewer editing of Activities or Apology
- Path back to Apology after Reveal
- Multi-day plans or multiple Date Plans
- Separate Our Story / Apologies / Planning product pages
- Bundling Activity images in the repo
- Replacing heavy WebGL/Three.js with CSS-only motion for v1
- CMS, admin UI on the live site, or collaborative editing
- Push notifications, email, or calendar invites
- iOS/Android native apps
- Analytics, SEO, or public marketing site concerns
- Privacy Policy / Terms pages

## Further Notes

- Share the GitHub Pages URL privately; do not post it publicly.
- Replace Stitch placeholder copy and Activity data with real content before sending the link.
- If remote image URLs break, fix by updating URLs in the data file and Publishing again.
- Issue tracker for this repo is currently local markdown under `.scratch/` because `gh` is not available; GitHub Issues can replace it later.
- Design references live under `stitch_sweet_date_planner/`.
