import Link from "next/link";

const aiMeetingNotesToolProofPoints = [
  "Built with Next.js, React, TypeScript, Tailwind, and Vercel",
  "Invite-gated beta flow and request-access path",
  "Public sample meeting page for recruiter/customer review",
  "Privacy, terms, pricing, and how-it-works pages",
];

const collabPlanProofPoints = [
  "Public GitHub repository with client and server structure",
  "TypeScript-heavy codebase with Vue frontend work",
  "Authentication, project management, participant roles, and task assignment",
  "AI-powered task duration suggestions",
  "Calendar view, notifications, and documented test commands",
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Product",
    items: ["SaaS UX", "Case studies", "Landing pages", "User flows"],
  },
  {
    title: "Workflow",
    items: [
      "AI-assisted development",
      "Code review",
      "Deployment",
      "SEO basics",
    ],
  },
];

export default function Home() {
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
              <Link href="#featured-work" className="hover:text-foreground">
                Featured Work
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <section aria-labelledby="hero-heading" className="mb-20 sm:mb-28">
          <p className="text-xs font-medium uppercase tracking-wider text-foreground/60 sm:text-sm">
            Web Developer · Next.js · React · TypeScript
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            David Ivankov builds practical SaaS-style web applications.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            I am a web developer focused on clean, maintainable interfaces and
            real product workflows. My current featured project is an AI Meeting
            Notes Tool, built as a SaaS-style product with invite-gated beta
            access, public marketing pages, and a recruiter-readable demo flow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#featured-work"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background sm:text-base"
            >
              View Featured Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-5 py-3 text-sm font-medium text-foreground sm:text-base"
            >
              Contact me
            </a>
          </div>
        </section>

        <section id="featured-work" className="mb-20 sm:mb-28 scroll-mt-16">
          <h2 className="text-xs font-medium uppercase tracking-wider text-foreground/60 sm:text-sm">
            Featured Work
          </h2>
          <ul className="mt-6 space-y-2 text-base text-foreground/80">
            <li>
              <article className="flex flex-col gap-3 rounded-2xl border border-foreground/10 p-6">
                <h3 className="border-b border-foreground/10 pb-2 text-lg font-semibold tracking-tight sm:text-xl">
                  AI Meeting Notes Tool
                </h3>
                <p className="text-base leading-relaxed text-foreground/80">
                  A SaaS-style web app that turns meeting content into
                  structured summaries and action items. The project includes
                  public product pages, beta access flow, pricing, privacy,
                  terms, and a sample meeting page to show the product clearly
                  without exposing the private repository.
                </p>
                <ul className="mt-6 space-y-4">
                  {aiMeetingNotesToolProofPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
            <li>
              <article className="flex flex-col gap-3 rounded-2xl border border-foreground/10 p-6">
                <h3 className="border-b border-foreground/10 pb-2 text-lg font-semibold tracking-tight sm:text-xl">
                  CollabPlan
                </h3>
                <p className="text-base leading-relaxed text-foreground/80">
                  CollabPlan is a collaborative project planning application for
                  remote teams. It supports secure login and registration,
                  project creation, participant roles, task assignment,
                  AI-powered task duration suggestions, notifications, and
                  calendar-based task visualization.
                </p>
                <ul className="mt-6 space-y-4">
                  {collabPlanProofPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </ul>
        </section>

        <section aria-labelledby="skills-heading" className="mb-20 sm:mb-28">
          <h2
            id="skills-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Skills
          </h2>
          <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/60 sm:text-sm">
                  {group.title}
                </dt>
                <dd className="mt-2">
                  <ul className="space-y-1 text-base text-foreground/80">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-16"
        >
          <h2
            id="contact-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Interested in working together?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            I am looking for web development opportunities where I can build
            clean, useful, production-ready interfaces.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background sm:text-base"
          >
            your.email@example.com
          </a>
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
