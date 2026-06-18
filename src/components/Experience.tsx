"use client"

import { Reveal } from "@/components/Reveal"
import { GraduationCap, Code2, BookOpen, Award, Briefcase, Cpu, Rocket } from "lucide-react"

const timeline = [
  {
    title: "The Beginning",
    subtitle: "National Polytechnic School of Algiers",
    period: "2022 – 2024",
    description:
      "Started my engineering journey at the National Polytechnic School of Algiers, where I developed a strong foundation in mathematics, physics, engineering fundamentals, and analytical problem-solving.",
    icon: Rocket,
  },
  {
    title: "First Steps into Web Development",
    subtitle: "Self-Learning",
    period: "2023",
    description:
      "Earned certifications in Responsive Web Design and JavaScript while building my first interactive web projects and discovering a passion for software development.",
    icon: BookOpen,
  },
  {
    title: "Expanding My Programming Skills",
    subtitle: "Advanced Training",
    period: "2024",
    description:
      "Completed Advanced Python training and deepened my understanding of software engineering, automation, and problem-solving through code.",
    icon: Code2,
  },
  {
    title: "Bachelor's Degree in Electronics",
    subtitle: "University of Mostaganem",
    period: "2024 – 2025",
    description:
      "Graduated from the University of Mostaganem with a Bachelor's Degree in Electronics, strengthening my expertise in electronic systems, automation, and industrial technologies.",
    icon: Award,
  },
  {
    title: "Master's Degree in Automation & Industrial Informatics",
    subtitle: "University of Mostaganem",
    period: "2025 – Present",
    description:
      "Currently completing my Master's degree, focusing on automation systems, intelligent systems, industrial informatics, robotics, and control engineering.",
    icon: GraduationCap,
  },
  {
    title: "Modern Full-Stack Development",
    subtitle: "Professional Growth",
    period: "2025 – 2026",
    description:
      "Specialized in React, Next.js, Node.js, PostgreSQL, Supabase, and modern web technologies while developing professional-grade applications and real-world projects.",
    icon: Cpu,
  },
  {
    title: "Freelance Developer & Lifelong Learner",
    subtitle: "Independent Work",
    period: "Today",
    description:
      "Building modern digital solutions for clients and personal projects while continuously expanding my expertise in software engineering, automation, and intelligent systems.",
    icon: Briefcase,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
              Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Experience & Education
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="relative sm:pl-20">
                  <div className="hidden sm:flex absolute left-5 top-1 w-7 h-7 rounded-full bg-surface border border-primary/30 items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </div>

                  <div className="bg-surface/30 border border-white/5 rounded-xl p-5 sm:p-6 hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-3 sm:hidden mb-3">
                      <div className="w-8 h-8 rounded-full bg-surface border border-primary/30 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <span className="hidden sm:inline-block text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-text mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary mb-2">{item.subtitle}</p>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
