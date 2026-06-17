"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedRoles } from "@/components/AnimatedRoles"
import { RoboticArm } from "@/components/RoboticArm"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-28 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider uppercase"
          >
            Hello, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-text mb-4"
          >
            ALI SALAH EDDINE
            <br />
            <span className="text-primary">AZZOUZI</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-base sm:text-lg text-muted mb-2">
              Automation & Robotics Engineer
              <span className="text-primary mx-2">|</span>
              Full-Stack Web Developer
            </p>
            <AnimatedRoles />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm sm:text-base text-muted leading-relaxed max-w-lg mb-8"
          >
            I build modern web applications, intelligent systems, and automation
            solutions that combine software and engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#projects">
                View Projects
                <ArrowDown size={16} className="ml-2" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
              <a href="/resume.pdf" download>
                <Download size={16} className="mr-2" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">
                <Mail size={16} className="mr-2" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:block h-[500px] xl:h-[600px] relative"
        >
          <RoboticArm />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted hover:text-primary transition-colors"
        >
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}
