'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor="hover"]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] w-1.5 h-1.5 rounded-full bg-[var(--t1)] pointer-events-none"
        style={{ x, y, translateX: '-50%', translateY: '-50%', mixBlendMode: 'difference' }}
      />
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] rounded-full border pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 46 : 26,
          height: hovering ? 46 : 26,
          borderColor: 'var(--t1)',
          borderWidth: 1,
          opacity: hovering ? 0.9 : 0.32,
          transition: 'width .25s cubic-bezier(.16,1,.3,1), height .25s cubic-bezier(.16,1,.3,1), opacity .25s ease',
          mixBlendMode: 'difference',
        }}
      />
    </>
  )
}
