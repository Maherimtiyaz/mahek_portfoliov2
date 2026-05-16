'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { SectionMeta, Reveal } from '@/components/ui/Section'
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // 👉 Connect Formspree: replace fetch URL with https://formspree.io/f/YOUR_ID
    await new Promise((r) => setTimeout(r, 1100))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4500)
  }

  const inputClass =
    'w-full bg-[var(--bg)] border border-[var(--b1)] rounded-md px-4 py-2.5 text-[14px] text-[var(--t1)] placeholder:text-[var(--t3)] outline-none focus:border-[var(--b2)] transition-colors font-light'
  const labelClass =
    'block text-[11px] tracking-[0.12em] uppercase text-[var(--t3)] mb-1.5'

  return (
    <Section id="contact" className="py-28 bg-[var(--bg)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal><SectionMeta num="05" label="Contact" /></Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <h2
                className="text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.025em] text-[var(--t1)] mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                Let's build<br />
                <em style={{ fontStyle: 'italic', color: 'var(--t2)' }}>something great.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-[15px] text-[var(--t2)] mb-10 leading-relaxed font-light max-w-md">
                Open to remote backend engineering opportunities and junior roles globally.
                Response guaranteed within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="space-y-3 mb-8">
                {[
                  { Icon: Mail,   label: 'Email',    val: 'mahekimtiyaz7@gmail.com', href: 'mailto:mahekimtiyaz7@gmail.com' },
                  { Icon: MapPin, label: 'Location', val: 'Jaipur, India · Remote-first', href: null },
                ].map(({ Icon, label, val, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 border border-[var(--b1)] rounded-lg bg-[var(--bg2)] hover:border-[var(--b2)] transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--b1)] rounded-md bg-[var(--bg)]">
                      <Icon size={14} className="text-[var(--t3)]" />
                    </div>
                    <div>
                      <p
                        className="text-[10px] tracking-[0.12em] uppercase text-[var(--t3)] mb-0.5"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-[13px] text-[var(--t1)] hover:underline underline-offset-3">
                          {val}
                        </a>
                      ) : (
                        <p className="text-[13px] text-[var(--t1)]">{val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex gap-2 mb-6">
                {[
                  { label: 'GitHub',   href: 'https://github.com/Maherimtiyaz',      Icon: Github   },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/mahek-fatima', Icon: Linkedin },
                  { label: 'Twitter',  href: 'https://x.com/itzmaherimtiyaz',        Icon: Twitter  },
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 border border-[var(--b1)] rounded-lg text-[12px] text-[var(--t3)] hover:text-[var(--t1)] hover:border-[var(--b2)] transition-all"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <Icon size={12} />
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="p-4 border border-[var(--b2)] rounded-lg bg-[var(--bg2)]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'pulseDot 2s infinite' }} />
                  <span className="text-[13px] font-semibold text-[var(--t1)]">Available now</span>
                </div>
                <p className="text-[12px] text-[var(--t3)] leading-relaxed">
                  Actively seeking remote backend engineering opportunities.
                  Open to full-time remote roles globally.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} style={{ fontFamily: "'JetBrains Mono', monospace" }}>Name</label>
                  <input
                    type="text" required placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email</label>
                  <input
                    type="email" required placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass} style={{ fontFamily: "'JetBrains Mono', monospace" }}>Subject</label>
                <input
                  type="text" placeholder="Backend internship opportunity"
                  value={form.subject}
                  onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} style={{ fontFamily: "'JetBrains Mono', monospace" }}>Message</label>
                <textarea
                  required rows={5} placeholder="Tell me about the role or project..."
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--t1)] text-[var(--bg)] rounded-lg text-[14px] font-semibold hover:opacity-85 transition-opacity disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-[var(--bg)]/30 border-t-[var(--bg)] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending…
                  </>
                ) : status === 'sent' ? (
                  '✓ Sent! I\'ll reply within 24 hours'
                ) : (
                  <><Send size={14} /> Send message</>
                )}
              </motion.button>
              <p className="text-[12px] text-center text-[var(--t3)]">
                Or email directly:{' '}
                <a href="mailto:mahekimtiyaz7@gmail.com" className="text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  mahekimtiyaz7@gmail.com
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
