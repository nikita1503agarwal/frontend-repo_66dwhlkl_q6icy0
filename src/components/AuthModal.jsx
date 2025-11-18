import { useState } from 'react'

export default function AuthModal({ open, mode, onClose, onAuthed }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  const backend = import.meta.env.VITE_BACKEND_URL

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const url = mode === 'login' ? `${backend}/api/auth/login` : `${backend}/api/auth/register`
      const body = mode === 'login' ? { email, password } : { name, email, password }
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      onAuthed(data)
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold">{mode === 'login' ? 'Log in' : 'Create account'}</h3>
          <button onClick={onClose} className="text-white/70 hover:text-white">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
            </div>
          )}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white" />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button disabled={loading} className="w-full py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium disabled:opacity-60">
            {loading ? 'Please wait...' : (mode === 'login' ? 'Log in' : 'Sign up')}
          </button>
        </form>
      </div>
    </div>
  )
}
