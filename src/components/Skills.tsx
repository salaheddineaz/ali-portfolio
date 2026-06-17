"use client"

import { Reveal } from "@/components/Reveal"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    title: "Programming",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Docker"],
  },
  {
    title: "Engineering",
    skills: ["MATLAB", "Simulink", "PLC Programming", "Control Systems", "Robotics"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
              Skills & Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              My Toolkit
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.05}>
              <div className="group bg-surface/30 border border-white/5 rounded-xl p-5 sm:p-6 hover:border-primary/20 hover:bg-surface/50 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-semibold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
