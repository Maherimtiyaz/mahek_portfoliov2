export default function Footer() {
  return (
    <footer className="border-t border-[var(--b1)] py-7 bg-[var(--bg)]">
      <div
        className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-[12px] text-[var(--t3)]">© 2026 Mahek Fatima</span>
        <div className="flex gap-5">
          {[
            { label: 'GitHub',    href: 'https://github.com/Maherimtiyaz' },
            { label: 'LinkedIn',  href: 'https://linkedin.com/in/mahek-fatima' },
            { label: 'Twitter',   href: 'https://x.com/itzmaherimtiyaz' },
            { label: 'Portfolio', href: 'https://maherimtiyaz.github.io/Portfolio/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[var(--t3)] hover:text-[var(--t1)] transition-colors tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>
        <span className="text-[12px] text-[var(--t3)]">mahekimtiyaz7@gmail.com</span>
      </div>
    </footer>
  )
}
