import Link from "next/link";
import Image from "next/image";

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
      {/*
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
*/}
      <main className="flex-1 w-full">
        <section
          aria-labelledby="hero-heading"
          className="mx-auto min-h-screen flex flex-col justify-center w-full max-w-7xl px-4 py-16 sm:px-12 sm:py-24 lg:px-8 "
        >
          <p className="text-xs font-medium uppercase tracking-wider mb-4 text-foreground/60 sm:text-sm ">
            Full-Stack Web Developer
          </p>
          <div className=" gap-y-12 mb-20 sm:mb-28  flex flex-col  lg:flex-row gap-x-12 bg:gap-y-12">
            <div className="flex flex-col items-start justify-start   w-full">
              <div className=" flex flex-col items-start justify-center margin-top-0">
                <h1
                  id="hero-heading"
                  className="text-5xl font-semibold [text-box:trim-both_cap_alphabetic] leading-none  tracking-tighter sm:text-7xl md:text-7xl "
                >
                  Hi, I&apos;m David.
                  <br />I build web applications.
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-foreground/80 sm:text-2xl lg:text-xl ">
                  I build practical applications using Vue.js, Node.js, and
                  TypeScript, with a focus on usability and solving real
                  problems.
                </p>
              </div>
              <div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="#featured-work"
                    className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background sm:text-base"
                  >
                    View featured work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-5 py-3 text-sm font-medium text-foreground sm:text-base"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative w-full min-w-0">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] bg-indigo-500/30 blur-[120px] sm:-inset-10"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-4xl bg-violet-400/20 blur-[60px] :-inset-4"
              />

              <div
                className="
      relative overflow-hidden rounded-2xl
      border border-white/20 bg-zinc-900
      shadow-[0_25px_80px_rgba(0,0,0,0.55)]
      p-3
      transition duration-300 ease-out
      group-hover:-translate-y-1 group-hover:scale-[1.01]
    "
              >
                <Image
                  src="/images/projects/collabplan/calendar.png"
                  alt="CollabPlan calendar interface"
                  width={1200}
                  height={800}
                  className="block w-full h-auto"
                />
              </div>

              <span
                className="
      absolute -top-4 right-4 rounded-full
      bg-indigo-500 px-4 py-1.5
      text-sm font-semibold text-white
      shadow-lg
    "
              >
                Featured
              </span>
            </div>
          </div>
        </section>

        <section
          id="featured-work"
          aria-labelledby="featured-heading"
          className="mb-20 sm:mb-28 scroll-mt-16"
        >
          <h2
            id="featured-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Featured Work
          </h2>
          <ul className="mt-6 space-y-4">
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
                <Link
                  href="/case-studies/ai-meeting-notes"
                  className="text-sm font-medium text-foreground hover:underline sm:text-base"
                >
                  Read the case study →
                </Link>
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
      <footer className="mt-auto bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
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
