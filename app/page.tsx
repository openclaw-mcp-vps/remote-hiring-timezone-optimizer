export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Remote Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Schedule Interviews Across{" "}
          <span className="text-[#58a6ff]">Any Timezone</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically find optimal interview slots for your global candidates — respecting work hours, local holidays, and personal availability.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "🌍", title: "Global Timezone Engine", desc: "Supports 400+ timezones with DST awareness." },
          { icon: "📅", title: "Holiday Calendars", desc: "Skips local public holidays automatically." },
          { icon: "⚡", title: "Instant Suggestions", desc: "Get ranked slots in seconds, not hours." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-2 mb-8">
            {[
              "Unlimited interview scheduling",
              "Up to 50 active candidates",
              "Holiday calendars for 60+ countries",
              "Calendar integrations (Google, Outlook)",
              "Email & Slack notifications",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "How does the timezone optimizer work?",
              a: "You input your team's location and the candidate's availability. Our engine cross-references work hours, DST offsets, and local holidays to surface the best overlapping slots."
            },
            {
              q: "Which calendar integrations are supported?",
              a: "We support Google Calendar and Microsoft Outlook. More integrations are on the roadmap based on user demand."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} TimeZone Hire. All rights reserved.
      </footer>
    </main>
  );
}
