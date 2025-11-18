export default function Pricing() {
  return (
    <section id="pricing" className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple pricing</h2>
        <p className="mt-3 text-zinc-300">Choose a plan that fits your stage.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{
            name:'Starter', price:'$0', features:['Basic features','Community support','Up to 3 projects']
          },{
            name:'Pro', price:'$19', features:['Everything in Starter','Unlimited projects','Priority support']
          },{
            name:'Business', price:'$79', features:['Everything in Pro','Team roles','Dedicated support']
          }].map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-medium">{p.name}</h3>
                <span className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{p.price}<span className="text-sm text-zinc-400">/mo</span></span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" />{f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
