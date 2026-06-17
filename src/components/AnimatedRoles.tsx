"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const roles = [
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "Automation Engineer",
  "Robotics Enthusiast",
]

export function AnimatedRoles() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="inline-block text-secondary font-mono text-sm"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
