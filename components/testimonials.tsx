export function Testimonials() {
  const cases = [
    {
      result: "–60%",
      label: "времени на иллюстрации",
      text: "Сократили время создания иллюстраций на 60% благодаря подбору оптимальной графической модели через NeuroCompare. Теперь мы тратим время на творчество, а не на поиск инструментов.",
      name: "Анна К.",
      role: "Арт-директор, студия «Pixel»",
      models: ["MJ", "SD"],
      colors: ["#e11d48", "#6366f1"],
      avatar: "АК",
    },
    {
      result: "5×",
      label: "быстрее анализ документов",
      text: "Ускорили анализ документов в 5 раз, выбрав GPT‑4 для обработки текста. NeuroCompare помог нам сравнить стоимость и точность перед покупкой.",
      name: "Михаил В.",
      role: "Senior Analyst, FinTech Corp",
      models: ["G4", "CL"],
      colors: ["#10a37f", "#c084fc"],
      avatar: "МВ",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[color:var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Как нейросети меняют рабочие процессы
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Реальные истории профессионалов, нашедших своё решение через NeuroCompare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div
              key={c.name}
              className="bg-card border border-border rounded-2xl p-7 shadow-sm flex flex-col gap-5"
            >
              {/* Big number */}
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold text-primary leading-none">
                  {c.result}
                </span>
                <span className="text-sm text-muted-foreground mb-1 leading-tight max-w-[120px]">
                  {c.label}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary pl-4">
                {c.text}
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    {c.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {c.models.map((m, i) => (
                    <span
                      key={m}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: c.colors[i] }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
