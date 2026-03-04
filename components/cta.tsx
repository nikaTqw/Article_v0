export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Decorative top badge */}
        <div className="inline-flex items-center gap-2 bg-[color:var(--brand-light)] text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Бесплатно · Без регистрации
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
          Начните тестировать нейросети{" "}
          <span className="text-primary">прямо сейчас</span>
        </h2>

        <p className="text-lg text-muted-foreground text-pretty max-w-xl">
          Сравнивайте, выбирайте и интегрируйте лучшие модели для своих задач.
          Все популярные нейросети в одном месте.
        </p>

        <div className="flex flex-col items-center gap-3 pt-2 w-full sm:w-auto">
          <a
            href="#comparison"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-opacity shadow-md"
          >
            Начать тестирование
          </a>
          <p className="text-xs text-muted-foreground">
            Бесплатно, без регистрации, 3 тестовых запроса в день
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mt-4 pt-8 border-t border-border w-full">
          {[
            { value: "50+", label: "Нейросетей" },
            { value: "12", label: "Категорий" },
            { value: "1M+", label: "Сравнений" },
            { value: "99%", label: "Актуальность данных" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-primary">{s.value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
