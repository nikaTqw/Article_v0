export function Footer() {
  const links = {
    Платформа: ["Каталог моделей", "Сравнение", "Цены", "API"],
    Компания: ["О проекте", "Блог", "Карьера", "Контакты"],
    Поддержка: ["Документация", "FAQ", "Статус", "Отчёт о проблеме"],
  }

  return (
    <footer className="border-t border-border bg-[color:var(--surface)] px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-bold text-lg text-foreground">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-primary-foreground text-xs font-bold">
                N
              </span>
              Neuro<span className="text-primary">Compare</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Объективная платформа для сравнения и выбора нейросетей. Всё самое
              актуальное — в одном месте.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">
                {group}
              </h4>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2025 NeuroCompare. Все права защищены.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
