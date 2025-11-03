import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Sparkles, Bot, GraduationCap, Workflow, Mail, ArrowRight, Shield, Gauge, Briefcase, BookOpen, Phone, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

/* Minimal shadcn/ui shims (simple passthrough) */
export const ShimButton = ({children, ...props}) => <button className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition" {...props}>{children}</button>;
export const ShimCard = ({className="", children}) => <div className={`rounded-2xl border bg-white shadow-sm ${className}`}>{children}</div>;
export const ShimCardHeader = ({children}) => <div className="p-5 border-b">{children}</div>;
export const ShimCardTitle = ({children, className=""}) => <div className={`text-lg font-semibold ${className}`}>{children}</div>;
export const ShimCardContent = ({children, className=""}) => <div className={`p-5 ${className}`}>{children}</div>;
export const ShimInput = (props) => <input className="w-full rounded-xl border px-3 py-2" {...props} />;
export const ShimTextarea = (props) => <textarea className="w-full rounded-xl border px-3 py-2" {...props} />;

// Map shims to expected names
const ButtonComp = ShimButton;
const CardComp = ShimCard;
const CardHeaderComp = ShimCardHeader;
const CardTitleComp = ShimCardTitle;
const CardContentComp = ShimCardContent;
const InputComp = ShimInput;
const TextareaComp = ShimTextarea;

export default function JustDigitalSolutionsLanding() {
  const features = [
    {
      icon: <Bot className="h-6 w-6" aria-hidden />,
      title: "AI Automations",
      desc: "Implement agents, workflows, and integrations that eliminate repetitive tasks and scale with your ops.",
      bullets: [
        "Agentic workflows & chatbots",
        "CRM, ERP & email automations",
        "RAG search over your data",
      ],
    },
    {
      icon: <Briefcase className="h-6 w-6" aria-hidden />,
      title: "AI Consulting",
      desc: "Strategy, architecture, and vendor selection to cut costs and unlock new revenue with AI.",
      bullets: [
        "AI roadmaps & governance",
        "Build/buy assessments",
        "Data & security reviews",
      ],
    },
    {
      icon: <GraduationCap className="h-6 w-6" aria-hidden />,
      title: "AI Training",
      desc: "Hands-on workshops and enablement tailored to teams—from prompts to production.",
      bullets: [
        "Executive briefings",
        "Team workshops",
        "Custom playbooks",
      ],
    },
  ];

  const benefits = [
    { icon: <Gauge className="h-5 w-5" />, title: "Faster Delivery", desc: "Weeks, not months—rapid pilots that de-risk investment." },
    { icon: <Shield className="h-5 w-5" />, title: "Secure by Design", desc: "Privacy-first patterns and clear data governance." },
    { icon: <BarChart3 className="h-5 w-5" />, title: "Measurable ROI", desc: "KPIs and dashboards that prove impact." },
    { icon: <Users className="h-5 w-5" />, title: "People-Centric", desc: "Change management to ensure adoption." },
  ];

  const steps = [
    { n: 1, title: "Discover", desc: "45–90 min session to map pain points and quick wins." },
    { n: 2, title: "Design", desc: "Solution blueprint, data flows, and success metrics." },
    { n: 3, title: "Deliver", desc: "Build pilots, integrate, and iterate with real users." },
    { n: 4, title: "Scale", desc: "Handover, training, and ongoing optimisation." },
  ];

  const faqs = [
    {
      q: "Which industries do you serve?",
      a: "B2B services, ecommerce, SaaS, and operations-heavy businesses. That said, our frameworks are adaptable across sectors.",
    },
    {
      q: "Do you work with our data securely?",
      a: "Yes. We follow least-privilege access and can deploy in your VPC or use private connectors with audit logs.",
    },
    {
      q: "What does a typical engagement look like?",
      a: "A 2–4 week sprint for an automation or prototype, or a 6–12 week roadmap + enablement program.",
    },
    {
      q: "What tech do you use?",
      a: "Best-of-breed LLMs and vector stores, orchestration tools, and your existing stack. We stay vendor-neutral.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <Sparkles className="h-5 w-5" />
            <span>Just Digital Solutions</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#work" className="hover:text-slate-900">Work</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex"><ButtonComp>Book a discovery call</ButtonComp></a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl"/>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Build, deploy & scale AI—without the guesswork
              </h1>
              <p className="mt-5 text-lg text-slate-600 max-w-xl">
                Just Digital Solutions helps organisations turn AI into outcomes through Automations, Consulting, and Training. Start small, prove value, and scale safely.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact"><ButtonComp>Start a project <ArrowRight className="ml-2 h-4 w-4"/></ButtonComp></a>
                <a href="#services"><ButtonComp>Explore services</ButtonComp></a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2"><Check className="h-4 w-4"/>Vendor‑neutral</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4"/>Security‑first</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4"/>Measurable ROI</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="relative mx-auto max-w-lg">
                <div className="aspect-[4/3] w-full rounded-2xl border bg-white shadow-sm p-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between"><span className="font-medium">Automation</span><Workflow className="h-4 w-4"/></div>
                    <p className="text-sm text-slate-600">Intake → triage → actions</p>
                    <div className="text-xs text-slate-500">Slack · Email · CRM</div>
                  </div>
                  <div className="rounded-xl border p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between"><span className="font-medium">Consulting</span><Bot className="h-4 w-4"/></div>
                    <p className="text-sm text-slate-600">Roadmaps & governance</p>
                    <div className="text-xs text-slate-500">LLMs · RAG · MLOps</div>
                  </div>
                  <div className="rounded-xl border p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between"><span className="font-medium">Training</span><BookOpen className="h-4 w-4"/></div>
                    <p className="text-sm text-slate-600">Workshops & playbooks</p>
                    <div className="text-xs text-slate-500">Leaders · Teams</div>
                  </div>
                  <div className="rounded-xl border p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between"><span className="font-medium">Outcomes</span><BarChart3 className="h-4 w-4"/></div>
                    <p className="text-sm text-slate-600">Cost ↓ • Revenue ↑</p>
                    <div className="text-xs text-slate-500">Dashboards & KPIs</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">What we do</h2>
            <p className="mt-3 text-slate-600">Three ways to create value with AI—choose one or mix and match.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <CardComp key={f.title} className="rounded-2xl">
                <CardHeaderComp className="space-y-1">
                  <CardTitleComp className="flex items-center gap-2 text-xl">
                    <span className="p-2 rounded-lg bg-slate-100">{f.icon}</span>
                    {f.title}
                  </CardTitleComp>
                </CardHeaderComp>
                <CardContentComp className="space-y-4">
                  <p className="text-slate-600">{f.desc}</p>
                  <ul className="space-y-2 text-sm">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{b}</li>
                    ))}
                  </ul>
                </CardContentComp>
              </CardComp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 font-medium"><span className="p-2 rounded-lg bg-slate-100">{b.icon}</span>{b.title}</div>
                <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">Recent wins</h2>
            <p className="mt-3 text-slate-600">A snapshot of measurable outcomes we've delivered.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { kpi: "–42%", label: "Support handling time", desc: "Automated triage + knowledge assistant reduced AHT across 35 agents." },
              { kpi: "+18%", label: "Upsell conversion", desc: "Realtime sales copilot suggested next-best-offers in CRM." },
              { kpi: "5x", label: "Faster reporting", desc: "Self-serve analytics with RAG over data warehouse." },
            ].map((w) => (
              <CardComp key={w.label} className="rounded-2xl">
                <CardHeaderComp>
                  <CardTitleComp className="text-3xl">{w.kpi}</CardTitleComp>
                </CardHeaderComp>
                <CardContentComp>
                  <div className="font-medium">{w.label}</div>
                  <p className="mt-1 text-slate-600 text-sm">{w.desc}</p>
                </CardContentComp>
              </CardComp>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">How we work</h2>
            <p className="mt-3 text-slate-600">Clear steps from idea to impact.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm text-slate-500">Step {s.n}</div>
                <div className="mt-1 font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">Simple, transparent pricing</h2>
            <p className="mt-3 text-slate-600">Start with a sprint, expand as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Discovery Sprint", price: "£3,500", desc: "2-week rapid opportunity assessment.", items: ["Stakeholder interviews", "Automation candidates", "ROI model & roadmap"] },
              { name: "Automation Build", price: "£9,500", featured: true, desc: "4-week pilot: one high‑impact workflow.", items: ["Design + integration", "Testing & roll‑out", "Runbook & KPIs"] },
              { name: "Enablement Pack", price: "£5,500", desc: "Team training & playbooks.", items: ["Live workshops", "Prompt & SOP library", "Change management"] },
            ].map((p) => (
              <CardComp key={p.name} className={`rounded-2xl ${p.featured ? 'ring-2 ring-slate-900' : ''}`}>
                <CardHeaderComp>
                  <CardTitleComp className="flex items-baseline justify-between">
                    <span>{p.name}</span>
                    <span className="text-2xl font-bold">{p.price}</span>
                  </CardTitleComp>
                </CardHeaderComp>
                <CardContentComp className="space-y-3">
                  <p className="text-slate-600">{p.desc}</p>
                  <ul className="space-y-2 text-sm">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{i}</li>
                    ))}
                  </ul>
                  <a href="#contact"><ButtonComp className="w-full mt-4">Get started</ButtonComp></a>
                </CardContentComp>
              </CardComp>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">FAQs</h2>
            <p className="mt-3 text-slate-600">Everything you want to know, answered clearly.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="font-medium">{f.q}</div>
                <p className="mt-2 text-slate-600 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Book your discovery call</h2>
              <p className="mt-3 text-slate-300 max-w-xl">Tell us about your goals. We'll come prepared with ideas and a lightweight plan.</p>
              <div className="mt-6 space-y-4 text-slate-300 text-sm">
                <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> 020 1234 5678</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href="mailto:hello@justdigitalsolutions.com">hello@justdigitalsolutions.com</a></div>
              </div>
            </div>
            <form className="rounded-2xl bg-white p-6 text-slate-900 space-y-4 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-4">
                <InputComp placeholder="Full name" />
                <InputComp type="email" placeholder="Work email" />
              </div>
              <InputComp placeholder="Company" />
              <div className="grid md:grid-cols-2 gap-4">
                <InputComp placeholder="Website" />
                <InputComp placeholder="Phone" />
              </div>
              <TextareaComp placeholder="What would you like to achieve with AI?" className="min-h-[120px]" />
              <ButtonComp className="w-full">Send enquiry</ButtonComp>
              <p className="text-xs text-slate-500">By submitting this form, you agree to our privacy policy.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">© {new Date().getFullYear()} Just Digital Solutions. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-900">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-slate-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
