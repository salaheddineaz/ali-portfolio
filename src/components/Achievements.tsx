"use client"

import { Reveal } from "@/components/Reveal"
import { Award, Trophy, FileCheck } from "lucide-react"

const achievements = [
  {
    title: "Academic Excellence",
    description:
      "Graduated with honors in Electronics, demonstrating strong academic performance and technical proficiency.",
    icon: Trophy,
  },
  {
    title: "Technical Certifications",
    description:
      "Multiple certifications in web development, automation systems, and programming languages.",
    icon: FileCheck,
  },
  {
    title: "Robotics & Automation Projects",
    description:
      "Successfully designed and implemented multiple automation and robotics projects combining hardware and software.",
    icon: Award,
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
              Recognition
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Achievements
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group bg-surface/30 border border-white/5 rounded-xl p-6 sm:p-8 text-center hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-text mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
