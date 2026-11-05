import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Meeting Notes Tool — Case Study | David Ivankov",
  description:
    "Case study of the AI Meeting Notes Tool: a SaaS-style web app that turns meeting content into structured summaries and action items. Built with Next.js, React, TypeScript, and Tailwind CSS, deployed on Vercel.",
};

const keyFeatures = [
  "Invite-gated beta access with a public request-access flow",
  "Marketing surface: landing page, how-it-works, pricing",
  "Privacy and terms pages so the product reads as production-grade",
  "Public sample meeting page recruiters can review without signing up",
  "Structured output: short summary, key decisions, and action items",
  "Continuous deployment on Vercel with preview URLs per change",
];

const technicalDecisions = [
  {
    title: "Next.js App Router + React + TypeScript",
    body: "One focused stack across the marketing surface and the gated app. Strong types catch breakage early and keep the codebase readable as it grows.",
  },
  {
    title: "Tailwind CSS",
    body: "Fast, consistent styling without a parallel CSS layer to maintain. Encourages a small set of reusable patterns instead of bespoke components.",
  },
  {
    title: "Public marketing pages around a private app",
    body: "Recruiters and potential customers can read the product end-to-end without exposing the source. The repository stays private because the project may become commercial.",
  },
  {
    title: "Public sample meeting page",
    body: "A no-signup demo proves the output format and the product's voice without requiring a beta invite to evaluate it.",
  },
  {
    title: "Invite-gated beta",
    body: "Lets me control rollout and quality while still showing the request flow publicly, so the product can be evaluated as a real SaaS shell.",
  },
  {
    title: "Vercel deployment",
    body: "Zero-config preview and production deploys make iteration cheap and let me share a live URL for any change instead of screenshots.",
  },
];

const projectProof = [
  "Shipped a real end-to-end product surface, not a single-page UI demo",
  "Built and maintains a TypeScript/Next.js codebase combining marketing pages and a gated app",
  "Made a deliberate product trade-off: private repo, fully public demo",
  "Owned deployment and iteration on Vercel from day one",
  "Can explain technical and product decisions in plain language",
];

export default function AiMeetingNotesCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav
          className="mx-auto w-full max-w-3xl px-6 py-4 sm:px-8 sm:py-6 flex items-center justify-between"
          aria-label="Primary"
        >
          <Link href="/" className="text-2xl font-bold">
            DI
          </Link>
          <ul className="flex items-center gap-4 text-sm font-medium text-foreground/60 sm:text-base">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#featured-work" className="hover:text-foreground">
                Featured Work
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="mb-10 text-sm">
          <Link
            href="/#featured-work"
            className="text-foreground/60 hover:text-foreground"
          >
            ← Back to Featured Work
          </Link>
        </p>

        <section aria-labelledby="overview-heading" className="mb-16 sm:mb-20">
          <p className="text-xs font-medium uppercase tracking-wider text-foreground/60 sm:text-sm">
            Case Study · SaaS · Next.js
          </p>
          <h1
            id="overview-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            AI Meeting Notes Tool
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            A SaaS-style web app that turns meeting content into structured
            summaries and action items. It ships as a complete product surface —
            landing page, request-access flow, pricing, privacy, terms,
            how-it-works, and a public sample meeting — so recruiters and
            potential customers can evaluate the product without ever seeing the
            source code.
          </p>
          <dl className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:text-base">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/60 sm:text-sm">
                Role
              </dt>
              <dd className="mt-1 text-foreground/80">Solo developer</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/60 sm:text-sm">
                Stack
              </dt>
              <dd className="mt-1 text-foreground/80">
                Next.js, React, TypeScript, Tailwind, Vercel
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/60 sm:text-sm">
                Status
              </dt>
              <dd className="mt-1 text-foreground/80">
                Invite-gated beta, deployed
              </dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="problem-heading" className="mb-16 sm:mb-20">
          <h2
            id="problem-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Problem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Meeting notes are usually messy, inconsistent, and hard to act on.
            Teams either write nothing, or end up with a wall of unsorted text
            that hides decisions and follow-ups. The result is forgotten action
            items, lost context, and re-litigating the same questions in the
            next meeting.
          </p>
        </section>

        <section aria-labelledby="solution-heading" className="mb-16 sm:mb-20">
          <h2
            id="solution-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Solution
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            The AI Meeting Notes Tool takes meeting content and produces a
            structured output: a short summary, key decisions, and a clear list
            of action items. The product is wrapped in a real SaaS shell —
            invite-gated beta access, marketing pages, and a public sample
            meeting — so anyone can evaluate the product end-to-end without an
            account.
          </p>
        </section>

        <section aria-labelledby="role-heading" className="mb-16 sm:mb-20">
          <h2
            id="role-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            My role
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            I designed, built, and shipped the entire web product on my own,
            from the public marketing pages to the invite-gated beta flow. The
            repository is intentionally private because the project may become
            commercial — but every recruiter-relevant surface is public and
            deployed. I treat the live site itself as the demo, and this case
            study as the readable proof.
          </p>
        </section>

        <section aria-labelledby="features-heading" className="mb-16 sm:mb-20">
          <h2
            id="features-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Key features
          </h2>
          <ul className="mt-6 space-y-4">
            {keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"
                />
                <span className="text-base leading-relaxed text-foreground/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="decisions-heading" className="mb-16 sm:mb-20">
          <h2
            id="decisions-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Technical decisions
          </h2>
          <ul className="mt-6 space-y-4">
            {technicalDecisions.map((decision) => (
              <li
                key={decision.title}
                className="rounded-2xl border border-foreground/10 p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {decision.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">
                  {decision.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="proof-heading" className="mb-16 sm:mb-20">
          <h2
            id="proof-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            What this project proves
          </h2>
          <ul className="mt-6 space-y-4">
            {projectProof.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"
                />
                <span className="text-base leading-relaxed text-foreground/80">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="back-heading">
          <h2 id="back-heading" className="sr-only">
            Back to homepage
          </h2>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background sm:text-base"
          >
            Back to homepage
          </Link>
        </section>
      </main>

      <footer className="mt-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <p className="text-center text-sm text-foreground/60 py-4 px-6">
          © 2026 David Ivankov.{" "}
          <span className="block sm:inline">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </span>
        </p>
      </footer>
    </>
  );
}
