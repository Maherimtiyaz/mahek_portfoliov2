'use client'
import { useActiveSection } from '@/hooks/useActiveSection'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/layout/ScrollProgress'
import HeroSection       from '@/components/sections/HeroSection'
import AboutSection      from '@/components/sections/AboutSection'
import SkillsSection     from '@/components/sections/SkillsSection'
import ProjectsSection   from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection    from '@/components/sections/ContactSection'

export default function Page() {
  const active = useActiveSection()
  return (
    <>
      <ScrollProgress />
      <Navbar active={active} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
