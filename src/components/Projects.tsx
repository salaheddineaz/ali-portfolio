"use client"

import { Reveal } from "@/components/Reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, GitBranch } from "lucide-react"

const projects = [
  {
    title: "Automation Control System",
    description:
      "Designed and implemented a PLC-based control system for industrial automation with real-time monitoring and data logging capabilities.",
    tech: ["PLC", "MATLAB", "Python", "SCADA"],
    github: "#",
    demo: "#",
  },
  {
    title: "Full-Stack Web Application",
    description:
      "Built a modern web application with Next.js, TypeScript, and PostgreSQL featuring authentication, real-time updates, and responsive design.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Robotics Simulation",
    description:
      "Developed a robotic arm simulation using Python and ROS, incorporating inverse kinematics and path planning algorithms.",
    tech: ["Python", "ROS", "C++", "Simulink"],
    github: "#",
    demo: "#",
  },
  {
    title: "API Gateway Service",
    description:
      "Created a scalable REST API gateway with Express.js, implementing rate limiting, caching, and microservice orchestration.",
    tech: ["Node.js", "Express.js", "Docker", "MongoDB"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
              My Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Featured Projects
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <div className="group relative bg-surface/30 border border-white/5 rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-500">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GitBranch size={14} className="mr-1" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
