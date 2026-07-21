"use client";

import { useState } from "react";

const DEMO_OUTPUTS: Record<string, string> = {
  divorce: `SUPERIOR COURT OF FORSYTH COUNTY
STATE OF GEORGIA

IN RE THE MATTER OF:
[Client Name], Petitioner,
v.
[Spouse Name], Respondent.

Civil Action No.: ___________

PETITION FOR DIVORCE

COMES NOW [Client Name], Petitioner in the above-styled matter, and files this Petition for Divorce against [Spouse Name], Respondent, respectfully showing this Court as follows:

1. JURISDICTION & RESIDENCY
Petitioner has been a bona fide resident of the State of Georgia for a period in excess of six (6) months preceding the filing of this Petition, and is a resident of Forsyth County, Georgia.

2. MARRIAGE
The parties were lawfully married on [Date] in [City], Georgia. The marriage is irretrievably broken with no hope of reconciliation.

3. GROUNDS
Petitioner seeks divorce on the grounds that the marriage is irretrievably broken (O.C.G.A. § 19-5-3(13)).

4. MINOR CHILDREN
[To be completed based on client intake...]

WHEREFORE, Petitioner prays that this Court grant a total divorce between the parties...`,

  criminal: `SUPERIOR COURT OF FORSYTH COUNTY
STATE OF GEORGIA

STATE OF GEORGIA,
v.
[Client Name], Defendant.

Indictment No.: ___________

MOTION TO SUPPRESS EVIDENCE

COMES NOW [Client Name], Defendant in the above-styled action, by and through undersigned counsel, and moves this Court pursuant to O.C.G.A. § 17-5-30 to suppress all evidence obtained as a result of the unlawful search and seizure conducted on [Date].

I. STATEMENT OF FACTS

On [Date], law enforcement officers conducted a search of Defendant's [vehicle/residence] located at [Address], Cumming, Georgia.

II. ARGUMENT & CITATION OF AUTHORITY

A. The Search Violated the Fourth Amendment
The warrantless search of Defendant's [vehicle/premises] was conducted without probable cause and without a valid warrant, in violation of the Fourth Amendment to the United States Constitution and Article I, Section I, Paragraph XIII of the Georgia Constitution...`,

  estate: `LAST WILL AND TESTAMENT
OF
[Client Full Name]

I, [Client Full Name], a resident of Forsyth County, Georgia, being of sound and disposing mind and memory, do hereby make, publish, and declare this to be my Last Will and Testament, hereby revoking all former Wills and Codicils made by me.

ARTICLE I — IDENTIFICATION
I am currently married to [Spouse Name]. I have [number] children: [Names].

ARTICLE II — PAYMENT OF DEBTS
I direct my Personal Representative to pay all of my just debts, funeral expenses, and the costs of administration of my estate as soon as practicable after my death.

ARTICLE III — SPECIFIC BEQUESTS
I give, devise, and bequeath the following specific items of property:
[To be completed based on client intake...]

ARTICLE IV — RESIDUARY ESTATE
All the rest, residue, and remainder of my estate, both real and personal...`,
};

const PRACTICE_AREAS = [
  { id: "divorce", label: "Divorce / Family Law", icon: "⚖️", time: "8 min → 45 sec" },
  { id: "criminal", label: "Criminal Defense", icon: "🏛️", time: "12 min → 1 min" },
  { id: "estate", label: "Estate Planning", icon: "📋", time: "15 min → 2 min" },
];

const STATS = [
  { value: "3.2hrs", label: "saved per attorney per day" },
  { value: "$2,400", label: "avg revenue recovered monthly" },
  { value: "40+", label: "solo firms in Forsyth County" },
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleGenerate = (id: string) => {
    setSelected(id);
    setGenerating(true);
    setOutput(null);
    setTimeout(() => {
      setGenerating(false);
      setOutput(DEMO_OUTPUTS[id]);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]" style={{ fontFamily: "var(--font-geist-sans), Georgia, serif" }}>

      {/* Nav */}
      <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-stone-800 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="font-semibold text-stone-900 tracking-tight">CounselLocal</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#demo" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Demo</a>
            <a href="#gap" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Who We Serve</a>
            <button
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm bg-stone-900 text-white px-4 py-1.5 rounded-full hover:bg-stone-700 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
            Built for Forsyth County & North Georgia attorneys
          </div>
          <h1 className="text-5xl font-bold text-stone-900 leading-tight tracking-tight mb-6">
            Your clients need you.<br />
            <span className="text-stone-400">Let AI handle the drafts.</span>
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl">
            CounselLocal is the AI legal assistant built for solo and small firm attorneys in North Georgia. It drafts Georgia-specific documents — divorce petitions, motions to suppress, wills — in seconds, so you spend your time on the work that actually requires a lawyer.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-stone-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-stone-700 transition-colors"
            >
              See it in action →
            </button>
            <a href="#gap" className="text-stone-500 text-sm hover:text-stone-900 transition-colors underline underline-offset-4">
              Who it&apos;s built for
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 divide-x divide-stone-200">
          {STATS.map((s) => (
            <div key={s.label} className="px-8 first:pl-0 last:pr-0">
              <div className="text-3xl font-bold text-stone-900 mb-1">{s.value}</div>
              <div className="text-sm text-stone-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-3">Watch it draft in real time</h2>
          <p className="text-stone-500">Pick a practice area. CounselLocal generates a Georgia-specific document in seconds.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {PRACTICE_AREAS.map((area) => (
            <button
              key={area.id}
              onClick={() => handleGenerate(area.id)}
              className={`text-left p-5 rounded-2xl border-2 transition-all ${
                selected === area.id
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 bg-white hover:border-stone-400 text-stone-700"
              }`}
            >
              <div className="text-2xl mb-3">{area.icon}</div>
              <div className="font-semibold text-sm mb-1">{area.label}</div>
              <div className={`text-xs ${selected === area.id ? "text-stone-300" : "text-stone-400"}`}>
                Draft time: {area.time}
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
          <div className="bg-stone-100 border-b border-stone-200 px-5 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="ml-3 text-xs text-stone-500 font-mono">
              {selected ? `${PRACTICE_AREAS.find((a) => a.id === selected)?.label} — Forsyth County, GA` : "Select a practice area above"}
            </span>
          </div>
          <div className="p-6 min-h-64 font-mono text-sm text-stone-700 leading-relaxed whitespace-pre-wrap">
            {!selected && (
              <div className="flex items-center justify-center h-48 text-stone-300 text-base font-sans">
                ← Choose a practice area to generate a document
              </div>
            )}
            {generating && (
              <div className="flex items-center gap-3 text-stone-400 font-sans">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
                Drafting Georgia-specific document...
              </div>
            )}
            {!generating && output && output}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="gap" className="bg-stone-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Built for the attorneys who keep communities running</h2>
          <p className="text-stone-400 mb-16 max-w-2xl text-lg">
            Solo and small firm attorneys in North Georgia handle the cases that matter most to real families — and do it without the resources of a large firm. CounselLocal is built around that reality.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                icon: "⚖️",
                title: "Solo practitioners",
                desc: "One attorney. A full caseload. CounselLocal handles the drafts so you can handle the clients.",
                detail: "Family law · Criminal defense · Estate planning",
              },
              {
                icon: "🏛️",
                title: "Small firms (2–5 attorneys)",
                desc: "More cases, same hours. Automate the repeatable work across your whole team without adding headcount.",
                detail: "Real estate · Civil litigation · Probate",
              },
              {
                icon: "📍",
                title: "North Georgia focus",
                desc: "Every document is formatted for Georgia courts. Forsyth County. Cherokee. Dawson. Local language, local rules.",
                detail: "Forsyth · Cherokee · Dawson · Hall counties",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border border-stone-700 bg-stone-800">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="font-bold text-lg mb-2">{item.title}</div>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="text-xs text-stone-500 font-mono">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-stone-900 mb-3">How it works</h2>
        <p className="text-stone-500 mb-16">Three steps. No IT department required.</p>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Client fills out intake",
              desc: "A simple form collects the facts. No more yellow legal pads.",
            },
            {
              step: "02",
              title: "AI drafts the document",
              desc: "Georgia-specific language. Forsyth County court formatting. Done in seconds.",
            },
            {
              step: "03",
              title: "You review and file",
              desc: "You're still the attorney. AI handles the repeatable work. You handle strategy.",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="text-5xl font-bold text-stone-100 mb-4">{item.step}</div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="bg-amber-50 border-y border-amber-100 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-3">Join the waitlist</h2>
          <p className="text-stone-600 mb-10 max-w-md mx-auto">
            We&apos;re onboarding the first 20 firms in North Georgia. Priority access for Forsyth, Cherokee, and Dawson County attorneys.
          </p>
          {submitted ? (
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full font-medium">
              ✓ You&apos;re on the list — we&apos;ll be in touch
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="flex gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@firm.com"
                className="flex-1 border border-stone-300 bg-white rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
              <button
                type="submit"
                className="bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
              >
                Get early access
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-stone-800 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="text-sm font-semibold text-stone-900">CounselLocal</span>
          </div>
          <p className="text-xs text-stone-400">Built in Atlanta, GA · For North Georgia attorneys · Not a law firm</p>
        </div>
      </footer>
    </div>
  );
}
