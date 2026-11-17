"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "featured-work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [actionButtonsVisible, setActionButtonsVisible] =
    useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (
              sections.map((section) => section.id).includes(entry.target.id)
            ) {
              window.history.replaceState(
                window.history.state,
                "",
                `#${entry.target.id}`,
              );
            } else {
              window.history.replaceState(
                window.history.state,
                "",
                window.location.pathname,
              );
            }
            if (entry.target.id === "action-buttons") {
              setActionButtonsVisible(true);
            } else {
              setActionButtonsVisible(false);
            }
          }
          console.log(actionButtonsVisible);
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      },
    );
    //removes active section when top section is visible
    const topElement = document.getElementById("top");
    if (topElement) observer.observe(topElement);
    const actionButtonsElement = document.getElementById("action-buttons");
    if (actionButtonsElement) observer.observe(actionButtonsElement);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`  fixed bottom-[calc(1rem+env(safe-area-inset-bottom))]
left-1/2 z-50
sm:bottom-auto sm:top-4
  -translate-x-1/2
  rounded-full
  border border-white/20
  bg-[linear-gradient(135deg,rgba(255,255,255,0.17)_0%,rgba(40,40,58,0.65)_30%,rgba(28,27,49,0.65)_65%,rgba(110,80,220,0.30)_100%)]
  px-1.5 py-1.5 sm:px-6 sm:py-1
  shadow-[0_8px_40px_rgba(0,0,0,0.4)]
  backdrop-blur-3xl
  ${
    actionButtonsVisible
      ? "translate-y-[calc(100%+4rem)] sm:-translate-y-[calc(100%+4rem)] opacity-0 pointer-events-none"
      : "translate-y-0 opacity-100"
  }
  transition- duration-300 ease-in-out motion-reduce:transition-none
  `}
    >
      <nav
        className="mx-auto w-full max-w-3xl  flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="text-lg px-2 py-2 sm:text-3xl sm:px-6 sm:py-3 font-bold"
        >
          DI<span className="text-accent">.</span>
        </Link>
        <div className="mx-0.5 h-5 w-px sm:mx-1 sm:h-6 bg-white/20" />
        <ul className="flex items-center gap-0.5 sm:gap-1 text-sm font-medium text-foreground/60 sm:text-base">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                className={`
            rounded-full min-h-11	px-2.5 sm:px-4 py-3 text-xs sm:text-sm font-semibold
            transition-colors duration-200
            ${
              activeSection === id
                ? "bg-accent/20 text-accent font-bold"
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
            }
          `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
