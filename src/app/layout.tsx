import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ali Salah Eddine Azzouzi | Automation & Robotics Engineer",
  description:
    "Portfolio of Ali Salah Eddine Azzouzi — Automation & Robotics Engineer and Full-Stack Web Developer. Building modern web applications and intelligent automation solutions.",
  keywords: [
    "automation engineer",
    "robotics engineer",
    "full-stack developer",
    "web developer",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  openGraph: {
    title: "Ali Salah Eddine Azzouzi | Portfolio",
    description:
      "Automation & Robotics Engineer and Full-Stack Web Developer.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text font-sans">
        {children}
      </body>
    </html>
  )
}
