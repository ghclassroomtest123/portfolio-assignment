export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="isolate px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-10 rounded-3xl border border-white/5 bg-[var(--color-card)]/70 p-10 shadow-2xl shadow-[rgba(249,115,22,0.2)] backdrop-blur">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
            test
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl">
            Crafting deliberate React experiences with striking visuals.
          </h1>

          <p className="max-w-3xl text-lg text-[var(--color-muted)]">
            I design interfaces that blend typography, motion, and thoughtful
            content so each interaction feels purposeful. Every layout is tuned
            for clarity, performance, and accessibility from the first paint to
            the final scroll.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white"
          >
            Explore projects
          </a>
          <a
            href="#skills"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            View skills
          </a>
        </div>

        <div className="grid gap-4 text-sm text-[var(--color-muted)] sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Focus
            </p>
            <p>Front-end architecture + accessibility</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Tools
            </p>
            <p>React, TypeScript, Tailwind, Playwright</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Availability
            </p>
            <p>Open to collaborating on thoughtful product teams</p>
          </div>
        </div>
      </div>
    </section>
  )
}
