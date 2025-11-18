import { useState } from 'react'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  const navItem = (href, label) => (
    <a href={href} className="text-sm text-zinc-200 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg" />
          <span className="text-white font-semibold">Nebula</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItem('#features', 'Features')}
          {navItem('#pricing', 'Pricing')}
          {navItem('#blog', 'Blog')}
          {navItem('#contact', 'Contact')}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => onOpenAuth('login')} className="px-3 py-2 text-sm text-white/80 hover:text-white inline-flex items-center gap-2">
            <LogIn size={16} /> Log in
          </button>
          <button onClick={() => onOpenAuth('register')} className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md shadow hover:opacity-90 transition">
            <div className="inline-flex items-center gap-2"><UserPlus size={16} /> Get started</div>
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#features" className="text-zinc-200">Features</a>
            <a href="#pricing" className="text-zinc-200">Pricing</a>
            <a href="#blog" className="text-zinc-200">Blog</a>
            <a href="#contact" className="text-zinc-200">Contact</a>
            <div className="pt-2 flex gap-2">
              <button onClick={() => onOpenAuth('login')} className="flex-1 px-3 py-2 text-sm text-white/90 bg-white/10 rounded">Log in</button>
              <button onClick={() => onOpenAuth('register')} className="flex-1 px-3 py-2 text-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
