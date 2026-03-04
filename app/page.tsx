import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"
import { ComparisonTable } from "@/components/comparison-table"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />
      <Hero />
      <Catalog />
      <ComparisonTable />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
