"use client"

import { useState } from "react"
import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, GitBranch, Link2, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Contact Me
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <Reveal direction="left">
            <div>
              <p className="text-muted leading-relaxed mb-8">
                I am always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-muted">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>alisalaheddinea@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+213 793 259 517</span>
                </div>
                <div className="flex items-center gap-4 text-muted">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Salamandre, Mostaganem, Algeria</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/salaheddineaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                >
                  <GitBranch size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                >
                  <Link2 size={18} />
                </a>
                <a
                  href="mailto:alisalaheddinea@gmail.com"
                  title="Email"
                  className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Input placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" required />
              </div>
              <div>
                <Textarea placeholder="Your Message" required />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {sent ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
