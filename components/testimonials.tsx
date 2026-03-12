import { TrendingUp, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Анна",
    role: "Дизайнер",
    quote:
      "Сократили время создания иллюстраций на 60% благодаря подбору оптимальной графической модели",
    stat: "60%",
    statLabel: "экономия времени",
    models: ["Midjourney", "DALL-E 3"],
  },
  {
    name: "Михаил",
    role: "Аналитик",
    quote:
      "Ускорили анализ документов в 5 раз, выбрав GPT-4 для обработки текста",
    stat: "5x",
    statLabel: "быстрее анализ",
    models: ["GPT-4", "Claude 3"],
  },
]

export function Testimonials() {
  return (
    <section id="about" className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Как нейросети меняют рабочие процессы
          </h2>
          <p className="mt-3 text-muted-foreground">
            Реальные результаты от профессионалов, которые выбрали подходящую модель
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="overflow-hidden">
              <CardContent className="flex flex-col gap-5 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-foreground">
                  {"\u00AB"}
                  {t.quote}
                  {"\u00BB"}
                </p>

                <div className="flex items-center gap-3 rounded-xl bg-primary/5 px-4 py-3">
                  <TrendingUp className="size-5 text-primary" />
                  <div>
                    <span className="text-2xl font-bold text-primary">{t.stat}</span>
                    <span className="ml-2 text-xs text-muted-foreground">{t.statLabel}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {t.models.map((model) => (
                    <span
                      key={model}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
