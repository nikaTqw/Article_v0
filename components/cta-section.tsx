import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-lg lg:px-20 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
              Начните тестировать нейросети прямо сейчас
            </h2>
            <p className="max-w-md text-pretty text-primary-foreground/80">
              Сравнивайте, выбирайте и интегрируйте лучшие модели для своих задач
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-2 gap-2 rounded-xl px-8 text-base font-semibold"
            >
              Начать тестирование
              <ArrowRight className="size-4" />
            </Button>
            <p className="text-xs text-primary-foreground/60">
              Бесплатно, без регистрации, 3 тестовых запроса в день
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
