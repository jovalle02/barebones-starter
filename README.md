## Example Page

The file [`app/client-page.tsx`](./app/client-page.tsx) demonstrates how the `NewsletterSignup` component integrates with TinaCMS. It uses the `useTina()` hook to hydrate the page with real-time CMS content, which is defined in `newsletterSignup.json` and editable via the Tina Cloud sidebar.

To see CMS edits in action:

1. Visit the deployed app: [Live Site on Vercel](https://your-vercel-deployment-link.vercel.app)
2. Log into the TinaCMS sidebar at `/admin` to edit content in real time.

> Content edits reflect instantly thanks to `fetchCache = 'force-no-store'` (used as a workaround for Next.js caching issues).

---

## Design Notes

- I redesigned the owl mascot as a responsive SVG in **Figma**, optimized for use across screen sizes.
- The layout prioritizes clarity and responsiveness with:
  - A clean form hierarchy
  - TailwindCSS spacing and contrast utilities
- GSAP is used to deliver a subtle transition between form and confirmation feedback.

---

## Developer’s Note

> I spent significant time debugging a TinaCMS/Next.js caching issue that blocked live content updates. After investigating community threads (see [issue #556](https://github.com/tinacms/tina-cloud-starter/issues/556)), I resolved it by applying the `force-no-store` workaround.
>
> This hands-on debugging deepened my understanding of Next.js rendering behavior and CMS-driven dynamic content flows.
>
> I also created and styled the owl mascot using Figma and SVG techniques, keeping performance and responsiveness in mind.

---

## Technical Decisions & Rationale

This component was built using the TinaCMS Starter Kit with Next.js App Router to ensure real-time visual editing via Tina Cloud. I chose to build the newsletter signup form as a standalone, reusable React component (`NewsletterSignup`) and used TypeScript for strict prop validation and clarity.

To satisfy the CMS integration requirements, I defined a custom schema (`components`) where each field—title, description, placeholder, button text, and privacy consent—can be edited through the TinaCMS sidebar. Rich text fields were rendered using `TinaMarkdown` to support markdown formatting.

I opted for TailwindCSS to streamline responsive design across breakpoints and ensure fast layout iteration. The layout was kept clean and minimal, prioritizing accessibility and clarity. I used GSAP for subtle transitions: when the form is submitted, the inputs fade out and a success message fades in, enhancing user experience without relying on external services.

One of the main technical challenges was the issue with TinaCMS content not updating due to Next.js caching. After researching the issue and referencing community discussions ([issue #556](https://github.com/tinacms/tina-cloud-starter/issues/556)), I resolved it by adding `fetchCache = 'force-no-store'` to the route. While not best practice for production, this ensured real-time edits during development and demonstrated a deeper understanding of how caching interacts with CMS hydration.

Additionally, I redesigned the owl mascot as an optimized SVG in Figma, balancing playful design with performance. Overall, every decision—tech stack, layout, styling, animation, CMS schema—was made to prioritize clarity, maintainability, and a seamless CMS editing experience.

---


## 📨 Submission

This submission includes:

- GitHub Repository ✅
- Vercel Deployment 🌐 [Live Site]([https://your-vercel-deployment-link.vercel.app](https://barebones-starter-nu-sandy.vercel.app/))
- TinaCMS Visual Editor Access 🔧

For any questions, feel free to contact me.
ja.ovalle2@uniandes.edu.co
---

**Built using TinaCMS, Next.js, and TailwindCSS**
