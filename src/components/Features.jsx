import { Shield, Zap, Layers } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Auth ready',
    desc: 'Email login and registration endpoints ready to plug into your UI.'
  },
  {
    icon: Zap,
    title: 'Fast & modern',
    desc: 'Vite + React frontend with Tailwind on a sleek dark theme.'
  },
  {
    icon: Layers,
    title: 'Blog included',
    desc: 'Pull recent posts from the backend to showcase content.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need to launch</h2>
        <p className="mt-3 text-zinc-300 max-w-2xl">A polished starter that covers the essentials so you can focus on your product.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 p-6 bg-white/5">
              <f.icon className="text-purple-400" />
              <h3 className="mt-4 text-xl font-medium">{f.title}</h3>
              <p className="mt-2 text-zinc-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
