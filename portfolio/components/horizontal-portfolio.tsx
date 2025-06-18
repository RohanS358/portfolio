"use client"

import { useEffect, useRef, useState, useCallback, useMemo, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Code, Users, Zap, Globe, Smartphone, Database, Sun, Moon } from "lucide-react"

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

// Optimized Theme Toggle Component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    
    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      onClick={toggleTheme}
      className="p-2 sm:p-3 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-black/30 rounded-full shadow-lg hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 touch-manipulation"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
      )}
    </button>
  )
}

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

// Optimized Button Component with proper TypeScript types
interface ButtonProps {
  children: ReactNode
  variant?: "default" | "outline"
  size?: "sm" | "default"
  className?: string
  onClick?: () => void
  [key: string]: any
}

const Button = ({ children, variant = "default", size = "default", className = "", onClick, ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation active:scale-95"
  
  const variants = {
    default: "bg-black/20 dark:bg-white/20 text-black dark:text-white hover:bg-black/30 dark:hover:bg-white/30 border border-black/30 dark:border-white/30",
    outline: "bg-white/10 dark:bg-black/10 border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-xs sm:text-sm",
    default: "px-4 py-2 text-sm sm:text-base"
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} backdrop-blur-sm shadow-lg`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Optimized Card Component with proper TypeScript types
interface CardProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

const Card = ({ children, className = "", ...props }: CardProps) => {
  return (
    <div
      className={`rounded-lg backdrop-blur-sm shadow-lg transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

function OptimizedPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Optimized scroll handling with throttling
  const handleScroll = useCallback(() => {
    if (isScrolling) return
    
    setIsScrolling(true)
    requestAnimationFrame(() => {
      const container = containerRef.current
      if (!container) return

      const scrollLeft = container.scrollLeft
      const sectionWidth = container.clientWidth
      const section = Math.round(scrollLeft / sectionWidth)
      setCurrentSection(Math.max(0, Math.min(4, section)))
      
      setTimeout(() => setIsScrolling(false), 50)
    })
  }, [isScrolling])

  // Enhanced touch/swipe support for mobile
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let startX = 0
    let startY = 0
    let scrollLeft = 0
    let isHorizontalSwipe = false

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      startX = touch.pageX
      startY = touch.pageY
      scrollLeft = container.scrollLeft
      isHorizontalSwipe = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const deltaX = startX - touch.pageX
      const deltaY = startY - touch.pageY
      
      // Determine if this is a horizontal swipe
      if (!isHorizontalSwipe && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        isHorizontalSwipe = true
      }
      
      if (isHorizontalSwipe) {
        e.preventDefault()
        container.scrollLeft = scrollLeft + deltaX
      }
    }

    container.addEventListener("touchstart", handleTouchStart, { passive: true })
    container.addEventListener("touchmove", handleTouchMove, { passive: false })
    container.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  // Memoized motion variants for better performance
  const fadeInVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0 }
  }), [shouldReduceMotion])

  const slideInVariants = useMemo(() => ({
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: { opacity: 1, x: 0 }
  }), [shouldReduceMotion])

  return (
    <div className="h-screen overflow-hidden bg-white dark:bg-black relative">
      {/* Background Pattern */}
      <WaveRhombusPattern />

      {/* Theme Toggle */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Section Indicators - Improved for mobile */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 sm:top-4 md:top-6 z-50 flex space-x-1.5 sm:space-x-2 md:space-x-3">
        {["Hero", "About", "Experience", "Projects", "Contact"].map((section, index) => (
          <button
            key={section}
            onClick={() => {
              const container = containerRef.current
              if (container) {
                container.scrollTo({
                  left: index * container.clientWidth,
                  behavior: 'smooth'
                })
              }
            }}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 backdrop-blur-md touch-manipulation ${
              currentSection === index
                ? "bg-black/30 dark:bg-white/30 border border-black/40 dark:border-white/40 scale-125"
                : "bg-gray-400/40 dark:bg-gray-600/40 border border-gray-400/50 dark:border-gray-600/50 hover:scale-110"
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>

      {/* Section Counter */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono backdrop-blur-md bg-white/10 dark:bg-black/10 px-2 py-1 rounded border border-white/20 dark:border-black/20">
        {String(currentSection + 1).padStart(2, "0")} / 05
      </div>

      {/* Navigation Instructions - More prominent on mobile */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 sm:bottom-4 md:bottom-6 z-50 text-center">
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 backdrop-blur-md bg-white/10 dark:bg-black/10 px-3 py-2 rounded-full border border-white/20 dark:border-black/20">
          <span className="block sm:hidden">Swipe to navigate →</span>
          <span className="hidden sm:block">Scroll or swipe to navigate →</span>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex h-full overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{ 
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory"
        }}
      >
        {/* Hero Section */}
        <section className="min-w-full h-full flex items-center justify-center relative px-4 sm:px-6 md:px-8" style={{ scrollSnapAlign: "start" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: shouldReduceMotion ? 0.3 : 1, ease: "easeOut" }}
            className="text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl mx-auto relative z-10"
          >
            {/* Profile Image - Optimized sizes */}
            <motion.div
              className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4 sm:mb-6 md:mb-8"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-black/20 shadow-2xl" />
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHTJ8IG8M0d2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732251483625?e=1755734400&v=beta&t=__D48vtbgcg8i0-uMu8EZ-rqY9ZiW5pE80tinAaEVCI"
                alt="Rohan Singh"
                className="w-full h-full object-cover rounded-full relative z-10"
                style={{ filter: "grayscale(100%)" }}
                loading="eager"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/10 to-transparent dark:from-white/10" />
            </motion.div>

            {/* Name - Responsive typography */}
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0.3 : 0.8 }}
            >
              Rohan Singh
            </motion.h1>

            {/* Description - Better mobile spacing */}
            <motion.div
              className="space-y-2 sm:space-y-3 md:space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0.3 : 0.8 }}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Blockchain Developer | MERN & Flutter Developer
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Exploring Web, Mobile & Creative Tech | Community Leader | Building Projects with Purpose
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500">
                Kathmandu, Nepal | Computer Engineering Student | 4+ Hackathons
              </p>
            </motion.div>

            {/* Action Buttons - Improved mobile layout */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 gap-1 sm:gap-2"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ delay: shouldReduceMotion ? 0 : 0.9, duration: shouldReduceMotion ? 0.3 : 0.6 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://github.com/RohanS358", "_blank")}
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://www.linkedin.com/in/RohanSinghcodes", "_blank")}
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                size="sm"
                onClick={() => window.open("mailto:mail@rohan-singh.com.np", "_blank")}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section - Improved mobile layout */}
        <section className="min-w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12" style={{ scrollSnapAlign: "start" }}>
          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-black dark:text-white"
              initial="hidden"
              whileInView="visible"
              variants={slideInVariants}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
              {/* About Text */}
              <motion.div
                className="space-y-3 sm:space-y-4 md:space-y-6"
                initial="hidden"
                whileInView="visible"
                variants={slideInVariants}
                transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Computer Engineering student at Khwopa College with expertise in blockchain
                  development, MERN stack, and Flutter. As a Community Service Chair at Rotaract Club of Pashupati
                  Kathmandu, I combine technical skills with leadership to create meaningful impact.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey includes participating in 4+ hackathons, being an active member of Khwopa IT Circle, and
                  serving as a Student Ambassador for KU IT Meet. I believe in building projects with purpose that solve
                  real-world problems and bring communities together.
                </p>
                
                {/* Stats - Mobile optimized */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
                  <div className="text-center p-3 sm:p-4 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-lg shadow-lg">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white">4+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Hackathons</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-lg shadow-lg">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </motion.div>

              {/* Skills - Improved mobile spacing */}
              <motion.div
                className="space-y-2 sm:space-y-3 md:space-y-4"
                initial="hidden"
                whileInView="visible"
                variants={slideInVariants}
                transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="p-3 sm:p-4 md:p-6 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20"
                  >
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                        <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black dark:text-white flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <span className="text-sm sm:text-base font-semibold text-black dark:text-white block truncate">
                            {skill.name}
                          </span>
                          <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 ml-2 flex-shrink-0">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 dark:bg-black/20 rounded-full h-1.5 md:h-2 backdrop-blur-sm">
                      <motion.div
                        className="bg-black/60 dark:bg-white/60 h-1.5 md:h-2 rounded-full backdrop-blur-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: shouldReduceMotion ? 0.3 : 1, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="min-w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12" style={{ scrollSnapAlign: "start" }}>
          <div className="max-w-4xl mx-auto relative z-10 w-full">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-black dark:text-white"
              initial="hidden"
              whileInView="visible"
              variants={slideInVariants}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInVariants}
                  transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: shouldReduceMotion ? 0 : index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 sm:p-6 md:p-8 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20">
                    <div className="flex flex-col space-y-2 sm:space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white truncate">
                            {exp.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 truncate">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 flex-shrink-0 bg-white/10 dark:bg-black/10 px-2 py-1 rounded border border-white/20 dark:border-black/20">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12" style={{ scrollSnapAlign: "start" }}>
          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-black dark:text-white"
              initial="hidden"
              whileInView="visible"
              variants={slideInVariants}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInVariants}
                  transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: shouldReduceMotion ? 0 : index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 overflow-hidden group hover:bg-white/15 dark:hover:bg-black/15 transition-all duration-300">
                    <div className="aspect-video bg-white/20 dark:bg-black/20 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-white/20" />
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-black/30 text-black dark:text-white">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-black/30 text-black dark:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-3 sm:pt-4">
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                          View
                        </Button>
                        <Button size="sm">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12" style={{ scrollSnapAlign: "start" }}>
          <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-black dark:text-white"
              initial="hidden"
              whileInView="visible"
              variants={slideInVariants}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>

            <motion.div
              className="space-y-4 sm:space-y-6 md:space-y-8"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about technology and innovation.
              </p>

              <Card className="p-6 sm:p-8 md:p-10 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 max-w-2xl mx-auto">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                    <a
                      href="mailto:mail@rohan-singh.com.np"
                      className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm sm:text-base">mail@rohan-singh.com.np</span>
                    </a>
                    <a
                      href="tel:+9779865358435"
                      className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <span className="text-sm sm:text-base">+977 9865358435</span>
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                    <Button
                      variant="outline"
                      onClick={() => window.open("https://github.com/RohanS358", "_blank")}
                      className="flex-1 sm:flex-none"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open("https://www.linkedin.com/in/RohanSinghcodes", "_blank")}
                      className="flex-1 sm:flex-none"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      onClick={() => window.open("mailto:mail@rohan-singh.com.np", "_blank")}
                      className="flex-1 sm:flex-none"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </Button>
                  </div>

                  <div className="text-center pt-4 sm:pt-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Based in Kathmandu, Nepal • Available for remote work
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Export both as default and named export for better compatibility
export default OptimizedPortfolio
export { OptimizedPortfolio }