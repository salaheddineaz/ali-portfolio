"use client"

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-muted text-center sm:text-left">
          &copy; {new Date().getFullYear()} Ali Salah Eddine Azzouzi. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-muted text-center sm:text-right">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
