"use client";

import { useState } from "react";

const DEMO_OUTPUTS: Record<string, string> = {
  divorce: `SUPERIOR COURT OF FORSYTH COUNTY
STATE OF GEORGIA

IN RE THE MATTER OF: [Client Name], Petitioner,
v. [Spouse Name], Respondent.
Civil Action No.: ___________

PETITION FOR DIVORCE

COMES NOW [Client Name], Petitioner, and files this Petition for Divorce against [Spouse Name], Respondent, showing this Court:

1. JURISDICTION & RESIDENCY
Petitioner has been a bona fide resident of Georgia for more than six (6) months preceding filing, and is a resident of Forsyth County, Georgia.

2. GROUNDS
Petitioner seeks divorce on the grounds that the marriage is irretrievably broken (O.C.G.A. 19-5-3(13)).

WHEREFORE, Petitioner prays this Court grant a total divorce between the parties.`,

  criminal: `SUPERIOR COURT OF FORSYTH COUNTY
STATE OF GEORGIA

STATE OF GEORGIA v. [Client Name], Defendant.
Indictment No.: ___________

MOTION TO SUPPRESS EVIDENCE

COMES NOW [Client Name], Defendant, by and through undersigned counsel, and moves this Court pursuant to O.C.G.A. 17-5-30 to suppress all evidence obtained as a result of the unlawful search and seizure conducted on [Date].

I. STATEMENT OF FACTS
On [Date], law enforcement conducted a search of Defendant's [vehicle/residence] at [Address], Cumming, Georgia.

II. ARGUMENT
A. The Search Violated the Fourth Amendment
The warrantless search was conducted without probable cause or valid warrant, in violation of the Fourth Amendment to the U.S. Constitution and Article I, Section I, Paragraph XIII of the Georgia Constitution.`,

  estate: `LAST WILL AND TESTAMENT OF [Client Full Name]

I, [Client Full Name], a resident of Forsyth County, Georgia, being of sound and disposing mind, do hereby make this Last Will and Testament, revoking all former Wills.

ARTICLE I: I am currently married to [Spouse Name]. I have [number] children: [Names].

ARTICLE II - PAYMENT OF DEBTS
I direct my Personal Representative to pay all just debts, funeral expenses, and costs of administration as soon as practicable after my death.

ARTICLE III - RESIDUARY ESTATE
All the rest, residue, and remainder of my estate, both real and personal, I give to [Beneficiary].`,
};

const PRACTICE_AREAS = [
  { id: "divorce", label: "Divorce / Family Law", time: "8 min to 45 sec" },
  { id: "criminal", label: "Criminal Defense", time: "12 min to 1 min" },
  { id: "estate", label: "Estate Planning", time: "15 min to 2 min" },
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
            <a href="#gap" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">The Gap</a>
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
            Harvey is for BigLaw.<br />
            <span className="text-stone-400">You need something built for you.</span>
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl">
            CounselLocal is the AI legal assistant for solo and small firm attorneys — the ones handling divorce, criminal defense, estate planning, and real estate in communities like Cumming, GA. Not VC-backed startups. Not Am Law 200. <strong className="text-stone-800">You.</strong>
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-stone-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-stone-700 transition-colors"
            >
              See it in action
            </button>
            <a href="#gap" className="text-stone-500 text-sm hover:text-stone-900 transition-colors underline underline-offset-4">
              Why this market is ignored
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
                Choose a practice area to generate a document
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

      {/* The Gap */}
      <section id="gap" className="bg-stone-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">The market everyone else is ignoring</h2>
          <p className="text-stone-400 mb-16 max-w-2xl text-lg">
            Harvey costs $1,200/seat/month with a 20-seat minimum. General Legal serves VC-backed startups. Nobody built this for the attorneys who keep communities running.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "Harvey AI", target: "Am Law 200 firms", price: "$1,200/seat/mo", min: "20 seat minimum", verdict: "Not for you", color: "red" },
              { name: "General Legal", target: "VC-backed startups", price: "$250-1,000/contract", min: "Founders only", verdict: "Not for you", color: "red" },
              { name: "CounselLocal", target: "Solo & small firms", price: "$149/mo flat", min: "No minimums", verdict: "Built for you", color: "green" },
            ].map((item) => (
              <div
                key={item.name}
                className={`rounded-2xl p-6 border ${
                  item.color === "green" ? "border-emerald-500 bg-emerald-950" : "border-stone-700 bg-stone-800"
                }`}
              >
                <div className="font-bold text-lg mb-1">{item.name}</div>
                <div className="text-stone-400 text-sm mb-5">{item.target}</div>
                <div className="space-y-2 mb-5">
                  <div className="text-sm"><span className="text-stone-500">Price: </span><span className="text-white font-medium">{item.price}</span></div>
                  <div className="text-sm"><span className="text-stone-500">Min: </span><span className="text-white font-medium">{item.min}</span></div>
                </div>
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                  item.color === "green" ? "bg-emerald-500 text-white" : "bg-red-900/50 text-red-400"
                }`}>
                  {item.color === "green" ? "Built for you" : "Not for you"}
                </div>
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
            { step: "01", title: "Client fills out intake", desc: "A simple form collects the facts. No more yellow legal pads." },
            { step: "02", title: "AI drafts the document", desc: "Georgia-specific language. Forsyth County court formatting. Done in seconds." },
            { step: "03", title: "You review and file", desc: "You are still the attorney. AI handles the repeatable work. You handle strategy." },
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
            We are onboarding the first 20 firms in North Georgia. Priority access for Forsyth, Cherokee, and Dawson County attorneys.
          </p>
          {submitted ? (
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full font-medium">
              You are on the list - we will be in touch
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
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
          <p className="text-xs text-stone-400">Built in Atlanta, GA - For North Georgia attorneys - Not a law firm</p>
        </div>
      </footer>
    </div>
  );
}
