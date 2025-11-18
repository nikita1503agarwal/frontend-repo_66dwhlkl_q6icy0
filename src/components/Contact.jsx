import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const backend = import.meta.env.VITE_BACKEND_URL

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${backend}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message }) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Error')
      setStatus('success')
      setName(''); setEmail(''); setMessage('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact us</h2>
            <p className="mt-3 text-zinc-300">We usually reply within 1 business day.</p>
            <div className="mt-8 rounded-xl border border-white/10 p-6 bg-white/5">
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Name</label>
                  <input value={name} onChange={e=>setName(e.target.value)} required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Email</label>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Message</label>
                  <textarea value={message} onChange={e=>setMessage(e.target.value)} required rows="4" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
                </div>
                <button disabled={status==='loading'} className="w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium disabled:opacity-60">
                  {status==='loading' ? 'Sending...' : 'Send message'}
                </button>
                {status==='success' && <p className="text-sm text-green-400">Message sent! We'll be in touch.</p>}
                {status==='error' && <p className="text-sm text-red-400">Something went wrong. Try again.</p>}
              </form>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
            <h3 className="text-xl font-medium">Why choose us?</h3>
            <ul className="mt-4 space-y-2 text-zinc-300 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" />Production-ready foundation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" />Clean, modern UI</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" />Fast iteration loop</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
