"use client"

import Image from "next/image"
import { Reveal } from "@/components/Reveal"
import { Code2, Building2, GraduationCap } from "lucide-react"

const stats = [
  { label: "Technologies Used", value: "15+", icon: Code2 },
  { label: "Projects Built", value: "10+", icon: Building2 },
  { label: "Engineering", value: "5+", icon: GraduationCap },
  { label: "Web Development", value: "3+", icon: Code2 },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Who I Am
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <Reveal direction="left">
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-primary/10">
                <Image
                  src="/images/aliAzzouzi.jpg"
                  alt="Ali Salah Eddine Azzouzi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="space-y-4">
              <p className="text-muted leading-relaxed">
                I am Ali Salah Eddine Azzouzi, a Full-Stack Developer and Automation
                Engineering student passionate about building modern web applications
                and intelligent systems.
              </p>
              <p className="text-muted leading-relaxed">
                My engineering journey began at the National Polytechnic School of
                Algiers, where I developed strong analytical and problem-solving skills.
                I later earned a Bachelor&apos;s degree in Electronics from the University
                of Mostaganem and am currently completing my Master&apos;s degree in
                Automation and Industrial Informatics.
              </p>
              <p className="text-muted leading-relaxed">
                Alongside my academic studies, I built expertise in web development,
                specializing in HTML, CSS, JavaScript, TypeScript, React, Next.js,
                Node.js, Python, PostgreSQL, and Supabase. As a freelance developer,
                I create responsive, scalable, and user-focused digital solutions.
              </p>
              <p className="text-muted leading-relaxed">
                My goal is to combine software engineering, automation, and intelligent
                systems to build innovative technologies that solve real-world problems.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="group bg-surface/50 border border-white/5 rounded-xl p-6 text-center hover:border-primary/20 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
