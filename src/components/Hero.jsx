import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/10 to-black pointer-events-none" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-40 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Build faster with a modern SaaS starter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 text-lg text-zinc-300 max-w-xl"
          >
            Clean landing, pricing, auth, blog and a working contact form. Styled in a black and purple, futuristic vibe.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow hover:opacity-90">See pricing</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10">Contact sales</a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[520px] lg:h-[560px] rounded-xl overflow-hidden border border-white/10">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
