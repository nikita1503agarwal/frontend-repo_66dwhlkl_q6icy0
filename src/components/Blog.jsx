import { useEffect, useState } from 'react'

export default function Blog() {
  const [items, setItems] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${backend}/api/blog`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      }
    }
    run()
  }, [backend])

  return (
    <section id="blog" className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From the blog</h2>
        <p className="mt-3 text-zinc-300">Recent posts to keep you in the loop.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.length === 0 && (
            <div className="col-span-full text-zinc-400">No posts yet. Seed your database to see items here.</div>
          )}
          {items.map((p, i) => (
            <article key={i} className="rounded-xl border border-white/10 p-6 bg-white/5">
              <div className="text-xs text-purple-300">{new Date(p.published_at).toLocaleDateString()}</div>
              <h3 className="mt-2 text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-zinc-300 text-sm">{p.excerpt}</p>
              <div className="mt-4 text-sm text-zinc-400">By {p.author}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
