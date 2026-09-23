'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { Sun, Moon, Menu, X } from 'lucide-react'
import type { ActiveSection } from '@/types'
import Magnetic from '@/components/ui/Magnetic'

const NAV: { label: string; href: string; id: ActiveSection }[] = [
  { label: 'About',      href: '#about',      id: 'about'      },
  { label: 'Skills',     href: '#skills',     id: 'skills'     },
  { label: 'Projects',   href: '#projects',   id: 'projects'   },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact',    href: '#contact',    id: 'contact'    },
]

export default function Navbar({ active }: { active: ActiveSection }) {
  const { dark, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1])

  return (
    <>
      {/* ── Main bar ── */}
      <motion.nav
        className="fixed top-0 inset-x-0 z-50 h-14 bg-[var(--bg)]"
        style={{}}
      >
        <motion.div
          className="absolute bottom-0 inset-x-0 h-px bg-[var(--b1)]"
          style={{ opacity: borderOpacity }}
        />

        <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-[13px] text-[var(--t3)] hover:text-[var(--t1)] transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-[var(--t1)]">mf</span>.dev
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={n.href}
                className={`relative px-3.5 py-1.5 text-[13px] transition-colors rounded-md ${
                  active === n.id
                    ? 'text-[var(--t1)]'
                    : 'text-[var(--t3)] hover:text-[var(--t2)]'
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--t1)]"
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  />
                )}
                {n.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--b1)] text-[var(--t3)] hover:text-[var(--t1)] hover:border-[var(--b2)] transition-all"
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <Magnetic>
              <a
                href="#contact"
                className="hidden sm:block px-4 py-1.5 text-[13px] font-semibold rounded-full bg-[var(--t1)] text-[var(--bg)] hover:opacity-80 transition-opacity"
              >
                Hire me
              </a>
            </Magnetic>

            <button
              className="md:hidden w-8 h-8 flex items-center justify-center text-[var(--t3)] hover:text-[var(--t1)] transition-colors"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        className="fixed top-14 inset-x-0 z-40 overflow-hidden bg-[var(--bg)] border-b border-[var(--b1)] md:hidden"
      >
        <div className="p-5 flex flex-col gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                active === n.id
                  ? 'bg-[var(--bg2)] text-[var(--t1)] font-medium'
                  : 'text-[var(--t2)] hover:text-[var(--t1)]'
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 px-4 py-2.5 rounded-lg bg-[var(--t1)] text-[var(--bg)] text-sm font-semibold text-center"
          >
            Hire me
          </a>
        </div>
      </motion.div>
    </>
  )
}
