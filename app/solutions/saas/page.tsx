"use client"

import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Headphones, Phone, MessageSquare, BarChart2, Clock, Workflow } from "lucide-react"

const VALUES = [
  { icon: Headphones, title: "Omnichannel Support", body: "Handle calls, SMS, WhatsApp, and chat from one unified dashboard for faster response times." },
  { icon: Phone, title: "Smart Call Routing", body: "Automatically route calls to the right agent using IVR, skills, or priority-based rules." },
  { icon: MessageSquare, title: "Shared Team Inbox", body: "Collaborate on customer conversations with internal notes, tagging, and assignments." },
  { icon: BarChart2, title: "Real-time Analytics", body: "Monitor call volumes, response times, and agent performance with live dashboards." },
  { icon: Clock, title: "24/7 Availability", body: "Never miss a customer with automated responses, voicemail, and call queues." },
  { icon: Workflow, title: "Workflow Automation", body: "Automate repetitive tasks like ticket creation, follow-ups, and notifications." },
]

const FAQS = [
  { q: "Can I manage multiple support channels in one place?", a: "Yes. Twiching brings calls, SMS, WhatsApp, and chat into a single dashboard for seamless support." },
  { q: "Does it support IVR and call routing?", a: "Yes. You can create custom IVR flows and route calls based on agent skills or availability." },
  { q: "Can I track support team performance?", a: "Yes. Real-time analytics and reports help monitor KPIs like response time and resolution rates." },
  { q: "Is it suitable for small teams?", a: "Absolutely. Twiching scales from small support teams to full contact centers." },
]

export default function SupportPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions · Customer Support"
        h1="Cloud contact center for modern support teams"
        sub="Deliver fast, reliable, and scalable customer support with voice, messaging, and automation — all in one UCaaS platform."
        trustItems={["Omnichannel", "IVR routing", "Live analytics", "Automation"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="How support teams use Twiching" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Helpdesk operations", body: "Centralize all customer queries into one platform and resolve issues faster." },
            { title: "E-commerce support", body: "Handle order inquiries, returns, and updates via calls and messaging." },
            { title: "Technical support teams", body: "Provide real-time troubleshooting with call recording and logs." },
            { title: "SaaS customer success", body: "Engage customers proactively with reminders, onboarding calls, and support." },
            { title: "Inbound call centers", body: "Manage high call volumes with IVR, queues, and smart routing." },
            { title: "Global support teams", body: "Support customers worldwide with local numbers and distributed agents." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Customer support FAQ" />

      <RelatedCards
        heading="Explore more solutions"
        cards={[
          { title: "Remote Teams", desc: "Enable distributed teams with cloud communication.", href: "/solutions/remote-teams" },
          { title: "Sales Teams", desc: "Boost outbound performance with smart dialing.", href: "/solutions/sales" },
          { title: "Call Recording", desc: "Record and review conversations for quality.", href: "/features/call-recording" },
        ]}
      />

      <NextStepBand
        heading="Upgrade your customer support with UCaaS"
        sub="Start your 14-day free trial. No hardware required."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </PageLayout>
  )
}