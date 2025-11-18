import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [user, setUser] = useState(null)

  const openAuth = (mode) => { setAuthMode(mode); setAuthOpen(true) }

  return (
    <div className="min-h-screen bg-black">
      <Navbar onOpenAuth={openAuth} />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-black text-zinc-400 border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nebula. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
      <AuthModal open={authOpen} mode={authMode} onClose={()=>setAuthOpen(false)} onAuthed={(data)=>setUser(data)} />
    </div>
  )
}

export default App
