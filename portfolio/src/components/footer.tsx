const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
]

export default function Footer() {
  return (
    <footer
      data-testid="footer-section"
      className="border-t border-white/10 bg-[var(--color-card)]/90 py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[var(--color-text)]">
          © {new Date().getFullYear()} Portfolio. Crafted with Tailwind + React.
        </p>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold uppercase tracking-[0.3em] text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
