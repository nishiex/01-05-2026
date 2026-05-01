import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import PricingClient from "./pricing-client"

export const metadata: Metadata = {
  title: "Twiching Pricing · Starter $7.99 | Professional $15.99 | Enterprise $25.99",
  description: "Three plans. 14-day free trial. Starter from $7.99/mo billed annually.",
}

export default function PricingPage() {
  return (
    <PageLayout>
      <PricingClient />
    </PageLayout>
  )
}
