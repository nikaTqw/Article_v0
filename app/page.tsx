import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ModelCategories } from "@/components/model-categories"
import { ComparisonTable } from "@/components/comparison-table"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ModelCategories />
        <ComparisonTable />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
