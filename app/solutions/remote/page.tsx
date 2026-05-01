"use client"

import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Globe, Users, Phone, MessageSquare, BarChart2, Zap } from "lucide-react"

const VALUES = [
  { icon: Globe, title: "Work From Anywhere", body: "Enable your team to call, message, and collaborate from any device, anywhere in the world with a unified cloud platform." },
  { icon: Users, title: "Team Collaboration Tools", body: "Shared inboxes, internal chat, call transfers, and conferencing keep distributed teams connected in real time." },
  { icon: Phone, title: "Cloud Calling System", body: "Make and receive calls using business numbers on desktop or mobile. No hardware required." },
  { icon: MessageSquare, title: "Unified Messaging", body: "Manage SMS, WhatsApp, and internal communication in one dashboard. Never miss a conversation." },
  { icon: BarChart2, title: "Performance Insights", body: "Track team activity, call metrics, and response times with real-time dashboards and analytics." },
  { icon: Zap, title: "Quick Setup & Scaling", body: "Add new team members, assign numbers, and scale operations instantly without infrastructure hassles." },
]

const FAQS = [
  { q: "Can remote teams use Twiching from anywhere?", a: "Yes. Twiching is fully cloud-based, allowing teams to work from any location using desktop or mobile apps." },
  { q: "Does it support team collaboration features?", a: "Yes. Features like call transfer, shared inbox, team chat, and conferencing make collaboration seamless." },
  { q: "Do I need hardware or VoIP phones?", a: "No. Twiching works directly on your browser or mobile device without requiring physical hardware." },
  { q: "Can I track team performance?", a: "Yes. Supervisors can access dashboards, analytics, and call reports to monitor productivity and performance." },
]

export default function RemoteTeamsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions · Remote Teams"
        h1="UCaaS platform built for remote teams"
        sub="Empower distributed teams with cloud calling, messaging, and collaboration tools — all in one unified platform designed for productivity and scale."
        trustItems={["Cloud-based", "Global numbers", "Team collaboration", "Real-time analytics"]}
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
        <SectionHeading eyebrow="Use cases" h2="How remote teams use Twiching" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Distributed support teams", body: "Support agents work from anywhere while handling calls and messages through a unified dashboard." },
            { title: "Remote sales teams", body: "Sales reps use local numbers and click-to-call to reach prospects globally with higher answer rates." },
            { title: "Virtual call centers", body: "Build a cloud call center with IVR, routing, and analytics without physical infrastructure." },
            { title: "Startup remote teams", body: "Set up a complete communication system instantly without expensive hardware or office setup." },
            { title: "Freelancer collaboration", body: "Freelancers and agencies manage client communication professionally using business numbers." },
            { title: "Global team coordination", body: "Keep international teams aligned with shared inboxes, messaging, and real-time updates." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Remote teams FAQ" />

      <RelatedCards
        heading="Explore more solutions"
        cards={[
          { title: "Sales Teams", desc: "Boost outbound calling and CRM workflows.", href: "/solutions/sales" },
          { title: "Customer Support", desc: "Deliver fast and efficient support with cloud communication.", href: "/solutions/support" },
          { title: "Call Analytics", desc: "Track performance and optimize team productivity.", href: "/features/analytics" },
        ]}
      />

      <NextStepBand
        heading="Power your remote team with UCaaS"
        sub="Start your 14-day free trial. No hardware required."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </PageLayout>
  )
}