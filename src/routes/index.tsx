import { createFileRoute } from "@tanstack/react-router";
import heroRoof from "@/assets/hero-roof.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import sprayAction from "@/assets/spray-action.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M4 18 L16 6 L28 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 16 V26 H24 V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="21" r="2" fill="var(--ember)" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">Detroit Roof Renewal</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#how" className="hover:text-[var(--ember)] transition">How it works</a>
          <a href="#proof" className="hover:text-[var(--ember)] transition">Results</a>
          <a href="#pricing" className="hover:text-[var(--ember)] transition">Pricing</a>
          <a href="#faq" className="hover:text-[var(--ember)] transition">FAQ</a>
        </nav>
        <a
          href="#quote"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--ember)] px-5 py-2.5 text-sm font-medium text-[var(--ember-foreground)] shadow-warm hover:brightness-110 transition"
        >
          Free satellite roof scan →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-primary text-primary-foreground">
      <img
        src={heroRoof}
        alt="Rejuvenated asphalt shingle roof at golden hour"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/95" />

      <Nav />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-6 pt-40 pb-20 md:pb-28 min-h-[92vh]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--ember)]" />
            Bio-based shingle treatment · Environmentally safe
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] text-balance">
            Don't replace it.
            <br />
            <span className="italic text-[var(--ember)]">Rejuvenate</span> it.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
            One spray restores the flexibility and waterproofing of aging asphalt shingles — adding up to 15 years of life for a fraction of the cost of tear-off.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#quote" className="rounded-full bg-[var(--ember)] px-7 py-4 text-sm font-semibold text-[var(--ember-foreground)] shadow-warm hover:brightness-110 transition">
              Get my free satellite scan
            </a>
            <a href="#how" className="rounded-full border border-white/25 px-7 py-4 text-sm font-medium hover:bg-white/10 transition">
              See how it works
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-8 max-w-2xl border-t border-white/15 pt-8">
            {[
              { k: "15 yrs", v: "Extra roof life" },
              { k: "85%", v: "Cheaper than replace" },
              { k: "1 day", v: "Application time" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl md:text-4xl text-[var(--ember)]">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { t: "Dried-out shingles", d: "Sun bakes essential oils out of asphalt within 8–10 years, leaving shingles brittle." },
    { t: "Granule loss", d: "Once granules wash into your gutters, UV starts destroying the mat underneath." },
    { t: "Cracks & curling", d: "Brittle shingles curl at the edges, letting wind and water start the leak clock." },
  ];
  return (
    <section className="border-y border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-medium">The problem</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
              Your roof isn't broken. It's <em className="italic">thirsty</em>.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Asphalt shingles fail because they lose the volatile oils that keep them flexible and waterproof — not because they've physically worn out. Replace those oils and the shingle behaves like new.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8">
              <div className="font-display text-6xl text-[var(--ember)]/25 leading-none">0{i + 1}</div>
              <h3 className="mt-4 font-display text-2xl">{it.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section id="proof" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-14">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-medium">Real results</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight text-balance">
              The same roof.<br />One afternoon apart.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 text-white/70 leading-relaxed">
            Independent lab testing shows a 60% recovery of shingle flexibility and 100% restoration of granule adhesion after a single application.
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-slate ring-1 ring-white/10">
          <img
            src={beforeAfter}
            alt="Before and after roof shingle rejuvenation"
            width={1600}
            height={912}
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Free satellite roof scan", d: "We pull high-resolution Google Maps satellite imagery of your home and grade every slope remotely — no ladder, no one on your property, no sales pressure. In-person inspections are available as a paid add-on." },
    { n: "02", t: "Precision spray application", d: "A certified tech applies our bio-based formula in a fine, even mist. Done in 2–3 hours." },
    { n: "03", t: "Cure & protect", d: "The treatment absorbs into the asphalt in under 90 minutes, restoring flexibility for 5+ years." },
    { n: "04", t: "Reapply every 5 years", d: "Three treatments over 15 years cost less than half of one replacement." },
  ];
  return (
    <section id="how" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-medium">How it works</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
              Four steps. One roof. Fifteen more years.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our applicators are trained and insured. Every scan uses up-to-date Google Maps satellite imagery — paid in-person ladder inspections are available on request. Every job is documented with before/after imagery you keep for your records.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <img
                src={sprayAction}
                alt="Technician spraying rejuvenation treatment on shingles"
                width={1408}
                height={1008}
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          </div>
          <ol className="lg:col-span-7 space-y-2">
            {steps.map((s) => (
              <li key={s.n} className="group grid grid-cols-[auto_1fr] gap-8 rounded-2xl border border-transparent hover:border-border hover:bg-card p-6 md:p-8 transition">
                <span className="font-display text-4xl md:text-5xl text-[var(--ember)]">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed max-w-xl">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    ["Cost for 2,500 sq ft home", "$2,500 avg", "$18,000+"],
    ["Time on site", "2–3 hours", "3–5 days"],
    ["Tear-off waste to landfill", "Zero", "~5 tons"],
    
    ["Homeowner disruption", "Minimal", "High"],
  ];
  return (
    <section id="pricing" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-medium">Rejuvenate vs. Replace</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
            The math isn't close.
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid grid-cols-3 border-b border-border bg-primary text-primary-foreground">
            <div className="p-6 text-xs uppercase tracking-widest text-white/60">Metric</div>
            <div className="p-6 font-display text-xl text-[var(--ember)]">Rejuvenate</div>
            <div className="p-6 font-display text-xl text-white/70">Replace</div>
          </div>
          {rows.map(([m, a, b], i) => (
            <div key={m} className={`grid grid-cols-3 items-center ${i % 2 ? "bg-muted/40" : ""}`}>
              <div className="p-6 text-sm font-medium">{m}</div>
              <div className="p-6 font-display text-lg md:text-xl">{a}</div>
              <div className="p-6 font-display text-lg md:text-xl text-muted-foreground line-through decoration-[var(--ember)]/60">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-medium">Homeowners</p>
        <blockquote className="mt-8 font-display text-3xl md:text-5xl leading-tight text-balance">
          <span className="text-[var(--ember)]">“</span>My roof shingles went from cracking and dried out to brand new in a matter of hours, and it cost a fraction of what a completely new roof would cost.<span className="text-[var(--ember)]">”</span>
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-sunset" />
          <div className="text-left">
            <div className="font-semibold">Chris</div>
            <div className="text-sm text-muted-foreground">Homeowner · Chesterfield, MI</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Does the spray actually work, or is it a coating?", a: "It's not a coating — coatings sit on top and eventually peel. Our treatment is a bio-based penetrating agent that soaks into the asphalt and replaces the maltenes (oils) that UV has cooked out over the years." },
    { q: "Is it safe for my kids, pets, and landscaping?", a: "Yes. The formula is soy-based, biodegradable, and carries an Environmentally Safer Choice designation. There's no toxic runoff, so your plants, pets, and family stay safe." },
    { q: "What if my roof is too far gone?", a: "During the free satellite scan we grade every slope using Google Maps imagery. If your shingles are cracked-through or missing granules to the mat, we'll tell you honestly — no treatment, no charge. Prefer eyes-on-the-roof? A paid in-person inspection is available." },
    { q: "How long does a treatment last?", a: "5 years, guaranteed in writing. Most homeowners re-treat every 5 years and get 15+ extra years out of the original roof." },
  ];
  return (
    <section id="faq" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-medium">FAQ</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">Straight answers.</h2>
          </div>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-xl md:text-2xl">{f.q}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 text-[var(--ember)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="quote" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-slate p-10 md:p-16 shadow-slate text-primary-foreground">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-sunset opacity-40 blur-3xl" aria-hidden />
          <div className="relative grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--ember)] font-medium">Free satellite scan</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1] text-balance">
                See if your roof qualifies.
              </h2>
              <p className="mt-6 max-w-md text-white/75 leading-relaxed">
                We pull satellite imagery of your address, grade every slope, and send a straight answer — no one steps on your property. In-person inspections available as a paid add-on.
              </p>
            </div>
            <form className="md:col-span-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--ember)]"
              />
              <input
                type="text"
                required
                placeholder="Property address"
                className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--ember)]"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--ember)]"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-[var(--ember)] px-6 py-4 text-sm font-semibold text-[var(--ember-foreground)] shadow-warm hover:brightness-110 transition"
              >
                Book my free satellite scan →
              </button>
              <p className="text-xs text-white/50 text-center">No obligation. Report in 48 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="text-primary-foreground"><Logo /></div>
          <p className="mt-4 max-w-sm text-sm text-white/60 leading-relaxed">
            Extending the life of America's asphalt roofs — one shingle at a time. Licensed & insured in Michigan.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>(810) 294-4909</li>
            <li>hello@detroitroofrenewal.com</li>
            <li>Mon–Sat · 7am–7pm</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50">Certifications</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Environmentally Safer Choice</li>
            <li>Licensed & Insured in Michigan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} Detroit Roof Renewal</span>
          <span>Built to outlast the weather.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Problem />
      <BeforeAfter />
      <HowItWorks />
      <Compare />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
