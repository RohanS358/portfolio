"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Code, Users, Zap, Globe, Smartphone, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

const projects = [
  {
    title: "QuickTech Inc Website",
    description:
      "Responsive, high-performance website with optimized UI/UX, cross-device compatibility, and SEO best practices for enhanced online presence.",
    tech: ["MERN Stack", "React", "Node.js", "SEO"],
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Development",
  },
  {
    title: "Blockchain Analytics Platform",
    description:
      "Decentralized application for tracking and analyzing blockchain transactions with real-time data visualization and smart contract integration.",
    tech: ["Blockchain", "Web3", "Solidity", "React"],
    image: "/placeholder.svg?height=300&width=400",
    category: "Blockchain",
  },
  {
    title: "Mobile Learning App",
    description:
      "Cross-platform educational mobile application built with Flutter, featuring interactive lessons and progress tracking for students.",
    tech: ["Flutter", "Dart", "Firebase", "UI/UX"],
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile Development",
  },
  {
    title: "Hackathon Project Hub",
    description:
      "Platform showcasing projects from 4+ hackathons with collaborative features and project management tools for student developers.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/placeholder.svg?height=300&width=400",
    category: "Community",
  },
]

const skills = [
  { name: "UI/UX Design", icon: Globe, level: 90, description: "User-centered design, prototyping" },
  { name: "MERN Stack Development", icon: Code, level: 65, description: "MongoDB, Express, React, Node.js" },
  { name: "Blockchain Development", icon: Database, level: 40, description: "Smart contracts, DApps, Web3" },
  { name: "Flutter Development", icon: Smartphone, level: 40, description: "Cross-platform mobile apps" },
  { name: "Community Leadership", icon: Users, level: 88, description: "Event management, team coordination" },
  { name: "Social Media Strategy", icon: Zap, level: 82, description: "Content strategy, brand management" },
]

const experiences = [
  {
    title: "Community Service Chair",
    company: "Rotaract Club of Pashupati Kathmandu",
    period: "May 2024 - Present",
    description:
      "Leading community service initiatives and coordinating social impact projects. Managing volunteer teams and organizing events that benefit local communities.",
  },
  {
    title: "Web Developer",
    company: "QuickTech Inc Nepal",
    period: "Jan 2024 - Present",
    description:
      "Developing responsive, high-performance websites with focus on UI/UX optimization and SEO best practices. Working with modern web technologies and frameworks.",
  },
  {
    title: "Student Ambassador",
    company: "KU IT Meet",
    period: "2024",
    description:
      "Represented the university at major IT events, facilitated networking between students and industry professionals, and promoted tech education initiatives.",
  },
  {
    title: "Social Media Manager",
    company: "Hult Prize at Khwopa College",
    period: "Oct 2024 - Feb 2025",
    description:
      "Managing digital content strategy, coordinating with departments, and analyzing engagement metrics for institutional growth and event promotion.",
  },
]

// Wave-like Rhombus Pattern Component
function WaveRhombusPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let t = 0

    const animate = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const s = Math.min(canvas.width, canvas.height) / 20
      const g = Math.ceil(canvas.width / s) * 2
      const h = Math.ceil(canvas.height / (s * 0.5)) * 2
      const w = canvas.width / 2
      const v = canvas.height / 2

      for (let y = -h; y < h; y++) {
        for (let i = -g; i < g; i++) {
          const p = w + ((i - y) * s) / 2
          const q = v + ((i + y) * s) / 4
          const m = Math.sqrt(i * i + y * y)
          const n = Math.sqrt(g * g + h * h)
          const e = 1 - m / n
          const f = s * e * Math.abs(Math.sin(m * 0.3 + t)) * 0.3

          ctx.beginPath()
          ctx.moveTo(p, q - f)
          ctx.lineTo(p + s / 2, q - s / 2 - f)
          ctx.lineTo(p + s, q - f)
          ctx.lineTo(p + s, q)
          ctx.lineTo(p + s / 2, q + s / 2)
          ctx.lineTo(p, q)
          ctx.closePath()

          // Check if we're in dark mode
          const isDark = document.documentElement.classList.contains("dark")

          if (isDark) {
            // White colors for dark mode - light fill, darker outline
            const l = ctx.createLinearGradient(p, q - f, p + s, q)
            l.addColorStop(0, "rgba(255, 255, 255, 0.07)")
            l.addColorStop(1, "rgba(255, 255, 255, 0.0)")
            ctx.fillStyle = l
            ctx.fill()

            ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
            ctx.lineWidth = 0.7
            ctx.stroke()

            // Inner lines
            ctx.beginPath()
            ctx.moveTo(p, q)
            ctx.lineTo(p, q - f)
            ctx.moveTo(p + s, q)
            ctx.lineTo(p + s, q - f)
            ctx.moveTo(p + s / 2, q + s / 2)
            ctx.lineTo(p + s / 2, q - s / 2 - f)
            ctx.strokeStyle = "rgba(255, 255, 255, 0.12)"
            ctx.lineWidth = 0.3
            ctx.stroke()
          } else {
            // Black colors for light mode - light fill, darker outline
            const l = ctx.createLinearGradient(p, q - f, p + s, q)
            l.addColorStop(0, "rgba(0,0,0,0.08)")
            l.addColorStop(1, "rgba(0,0,0,0.04)")
            ctx.fillStyle = l
            ctx.fill()

            ctx.strokeStyle = "rgba(0,0,0,0.3)"
            ctx.lineWidth = 0.7
            ctx.stroke()

            // Inner lines
            ctx.beginPath()
            ctx.moveTo(p, q)
            ctx.lineTo(p, q - f)
            ctx.moveTo(p + s, q)
            ctx.lineTo(p + s, q - f)
            ctx.moveTo(p + s / 2, q + s / 2)
            ctx.lineTo(p + s / 2, q - s / 2 - f)
            ctx.strokeStyle = "rgba(0,0,0,0.15)"
            ctx.lineWidth = 0.3
            ctx.stroke()
          }
        }
      }

      t += 0.06
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-70 dark:opacity-80"
      style={{ mixBlendMode: "normal" }}
    />
  )
}

export function HorizontalPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)

  // Simple vertical to horizontal scroll conversion
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      container.scrollLeft += e.deltaY
    }

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const sectionWidth = container.clientWidth
      const section = Math.floor(scrollLeft / sectionWidth)
      setCurrentSection(Math.max(0, Math.min(4, section)))
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Touch/swipe support for mobile
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let startX = 0
    let scrollLeft = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - startX) * 2
      container.scrollLeft = scrollLeft - walk
    }

    container.addEventListener("touchstart", handleTouchStart)
    container.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <div className="h-screen overflow-hidden bg-white dark:bg-black relative">
      {/* Wave-like Rhombus Background */}
      <WaveRhombusPattern />

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Section Indicators */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-6 z-50 flex space-x-2 md:space-x-3">
        {["Hero", "About", "Experience", "Projects", "Contact"].map((section, index) => (
          <div
            key={section}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 backdrop-blur-md ${
              currentSection === index
                ? "bg-black/20 dark:bg-white/20 border border-black/30 dark:border-white/30 scale-125"
                : "bg-gray-400/30 dark:bg-gray-600/30 border border-gray-400/40 dark:border-gray-600/40"
            }`}
          />
        ))}
      </div>

      {/* Section Counter */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono backdrop-blur-md bg-white/10 dark:bg-black/10 px-2 py-1 rounded border border-white/20 dark:border-black/20">
        {String(currentSection + 1).padStart(2, "0")} / 05
      </div>

      {/* Navigation Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-6 z-50 text-center">
        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 backdrop-blur-md bg-white/10 dark:bg-black/10 px-3 py-2 rounded-full border border-white/20 dark:border-black/20">
          <span className="hidden md:inline">Scroll to navigate →</span>
          <span className="md:hidden">Swipe to navigate →</span>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex h-full overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hero Section */}
        <section className="min-w-full h-full flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto px-4 md:px-8 relative z-10"
          >
            <motion.div
              className="relative mx-auto w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20 shadow-2xl" />
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHTJ8IG8M0d2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732251483625?e=1755734400&v=beta&t=__D48vtbgcg8i0-uMu8EZ-rqY9ZiW5pE80tinAaEVCI"
                alt="Rohan Singh"
                className="w-full h-full object-cover rounded-full relative z-10"
                style={{ filter: "grayscale(100%)" }} 
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/10 to-transparent dark:from-white/10" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-black dark:text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Rohan Singh
            </motion.h1>

            <motion.div
              className="space-y-3 md:space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Blockchain Developer | MERN & Flutter Developer
              </p>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                Exploring Web, Mobile & Creative Tech | Community Leader | Building Projects with Purpose
              </p>
              <p className="text-xs md:text-base text-gray-500 dark:text-gray-500">
                 Kathmandu, Nepal | Computer Engineering Student |  4+ Hackathons
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 gap-2 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white transition-all duration-300 text-xs md:text-sm shadow-lg"
                onClick={() => window.open("https://github.com/RohanS358", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white transition-all duration-300 text-xs md:text-sm shadow-lg"
                onClick={() => window.open("https://www.linkedin.com/in/RohanSinghcodes", "_blank")}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                size="sm"
                className="backdrop-blur-sm bg-black/20 dark:bg-white/20 text-black dark:text-white hover:bg-black/30 dark:hover:bg-white/30 transition-all duration-300 text-xs md:text-sm shadow-lg border border-black/30 dark:border-white/30"
                onClick={() => window.open("mailto:mail@rohan-singh.com.np", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black dark:text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div
                className="space-y-4 md:space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Computer Engineering student at Khwopa College with expertise in blockchain
                  development, MERN stack, and Flutter. As a Community Service Chair at Rotaract Club of Pashupati
                  Kathmandu, I combine technical skills with leadership to create meaningful impact.
                </p>
                <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey includes participating in 4+ hackathons, being an active member of Khwopa IT Circle, and
                  serving as a Student Ambassador for KU IT Meet. I believe in building projects with purpose that solve
                  real-world problems and bring communities together.
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                  <div className="text-center p-3 md:p-4 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-lg shadow-lg">
                    <div className="text-xl md:text-2xl font-bold text-black dark:text-white">4+</div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Hackathons</div>
                  </div>
                  <div className="text-center p-3 md:p-4 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-lg shadow-lg">
                    <div className="text-xl md:text-2xl font-bold text-black dark:text-white">15+</div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-3 md:space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {skills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="p-4 md:p-6 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <skill.icon className="w-4 h-4 md:w-6 md:h-6 text-black dark:text-white" />
                        <div>
                          <span className="text-sm md:text-base font-semibold text-black dark:text-white">
                            {skill.name}
                          </span>
                          <p className="text-xs text-gray-600 dark:text-gray-400 hidden md:block">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 dark:bg-black/20 rounded-full h-1.5 md:h-2 backdrop-blur-sm">
                      <motion.div
                        className="bg-black/60 dark:bg-white/60 h-1.5 md:h-2 rounded-full backdrop-blur-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black dark:text-white"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Experience & Leadership
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-4 md:p-8 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 shadow-lg hover:shadow-xl hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0 backdrop-blur-sm bg-white/20 dark:bg-black/20 px-2 py-1 rounded border border-white/30 dark:border-black/30">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-w-full h-full flex items-center justify-center p-4 md:p-12">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black dark:text-white"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 shadow-lg overflow-hidden group hover:shadow-xl hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-32 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110 grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Button
                        size="sm"
                        className="absolute top-2 right-2 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-white/20 dark:bg-black/20 text-black dark:text-white hover:bg-white/30 dark:hover:bg-black/30 border border-white/30 dark:border-black/30"
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <span className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 text-xs font-medium backdrop-blur-sm bg-black/20 dark:bg-white/20 text-white dark:text-black rounded border border-black/30 dark:border-white/30">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-black/30 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-w-full h-full flex items-center justify-center p-4 md:p-8">
          <motion.div
            className="text-center space-y-6 md:space-y-8 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Let's Build Something Amazing</h2>

            <p className="text-sm md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-4">
              Ready to collaborate on your next project? Let's create technology solutions that make a difference.
            </p>

            <Card className="p-4 md:p-8 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 shadow-lg">
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 gap-2">
                  <motion.a
                    href="mailto:mail@rohan-singh.com.np"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 backdrop-blur-sm bg-black/20 dark:bg-white/20 text-black dark:text-white rounded-lg font-medium transition-colors hover:bg-black/30 dark:hover:bg-white/30 text-sm md:text-base shadow-lg border border-black/30 dark:border-white/30"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Email Me</span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/RohanSinghcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white rounded-lg font-medium transition-colors hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white text-sm md:text-base shadow-lg"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/RohanS358"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white rounded-lg font-medium transition-colors hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white text-sm md:text-base shadow-lg"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                    <span>GitHub</span>
                  </motion.a>
                </div>

                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-500 space-y-1 md:space-y-2 backdrop-blur-sm bg-white/5 dark:bg-black/5 p-3 rounded border border-white/10 dark:border-black/10">
                  <p> Mail : mail@rohan-singh.com.np</p>
                  <p> - Based in Kathmandu, Nepal | Open to remote work</p>
                  <p> - Available for freelance projects and collaborations</p>
                </div>
              </div>
            </Card>

            <motion.p
              className="text-xs md:text-sm text-gray-400 dark:text-gray-600 backdrop-blur-sm bg-white/5 dark:bg-black/5 px-3 py-2 rounded border border-white/10 dark:border-black/10"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              "Building projects with purpose, one line of code at a time." 
            </motion.p>
          </motion.div>
        </section>
      </div>

      <style jsx global>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
