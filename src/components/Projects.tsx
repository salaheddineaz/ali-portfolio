"use client"

import Image from "next/image"
import { Reveal } from "@/components/Reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, GitBranch } from "lucide-react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A premium personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Three.js. Features a dark theme, 3D interactive robotic arm, scroll animations, and fully responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    github: "https://github.com/salaheddineaz/portfolio",
    demo: "#",
    image: "/images/portfolio-pic.png",
  },
  {
    title: "Omnifood",
    description:
      "A modern, fully responsive landing page for a healthy meal delivery service. Features a clean design, mobile-first approach, and smooth animations. Built as part of Jonas Schmedtmann's Udemy course.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/salaheddineaz/01-Omnifood",
    demo: "https://salaheddineaz.github.io/omnifood",
    image: "/images/omnifood-pic.png",
  },
  {
    title: "Prof Anes Portfolio",
    description:
      "A polished academic portfolio website for Professor Anes showcasing publications, research projects, courses, and professional achievements. Features a clean, scholarly design with smooth scrolling, responsive layout, and publication filtering.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid"],
    github: "https://github.com/salaheddineaz/03-cours",
    demo: "https://salaheddineaz.github.io/prof-anes/",
    image: "/images/prof-anes-portfolio.png",
  },
  {
    title: "Guess Number Game",
    description:
      "An interactive number guessing game where players try to guess a secret number between 1 and 20. Features score tracking, high score system, and visual feedback for user guesses.",
    tech: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    github: "https://github.com/salaheddineaz/04-GuessNumber",
    demo: "https://salaheddineaz.github.io/Guess-number/",
    image: "/images/guess-number-pic.png",
  },
  {
    title: "Greed Dice",
    description:
      "A classic dice game implementation (also known as Pig Game) where two players take turns rolling a die. Features hold/roll mechanics, score accumulation, and first-to-100-wins logic with smooth UI transitions.",
    tech: ["HTML5", "CSS3", "JavaScript", "Game Logic", "DOM Events"],
    github: "https://github.com/salaheddineaz/05-DiceGame",
    demo: "https://salaheddineaz.github.io/greed-dice",
    image: "/images/greed-dice-pic.png",
  },
  {
    title: "Cinescope",
    description:
      "A movie discovery and browsing application with a modern dark theme UI. Features movie listings, search functionality, genre filtering, and detailed movie views with ratings.",
    tech: ["HTML5", "CSS3", "JavaScript", "API Integration", "Responsive Design"],
    github: "https://github.com/salaheddineaz/06-cinescope-final",
    demo: "https://salaheddineaz.github.io/cinescope-dz/",
    image: "/images/cinescope-dz-pic.png",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <div className="group relative bg-surface/30 border border-white/5 rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-500">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
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
                        Code
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
