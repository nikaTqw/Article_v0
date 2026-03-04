"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

interface ModelRow {
  id: string
  name: string
  color: string
  context: string
  speed: string
  price: string
  quality: number
  languages: string
  multimodal: boolean
}

const ALL_ROWS: ModelRow[] = [
  {
    id: "gpt4",
    name: "GPT-4o",
    color: "#10a37f",
    context: "128K",
    speed: "55 т/с",
    price: "$5 / 1M",
    quality: 95,
    languages: "100+",
    multimodal: true,
  },
  {
    id: "claude",
    name: "Claude 3 Opus",
    color: "#c084fc",
    context: "200K",
    speed: "40 т/с",
    price: "$15 / 1M",
    quality: 92,
    languages: "50+",
    multimodal: true,
  },
  {
    id: "yandex",
    name: "YandexGPT Pro",
    color: "#e63a2e",
    context: "32K",
    speed: "80 т/с",
    price: "₽0.4 / 1K",
    quality: 78,
    languages: "5",
    multimodal: false,
  },
  {
    id: "midjourney",
    name: "Midjourney v6",
    color: "#e11d48",
    context: "—",
    speed: "~20 сек",
    price: "$10 / мес",
    quality: 91,
    languages: "~10",
    multimodal: false,
  },
  {
    id: "dalle",
    name: "DALL·E 3",
    color: "#f97316",
    context: "4K текст",
    speed: "~15 сек",
    price: "$0.04 / изобр.",
    quality: 85,
    languages: "50+",
    multimodal: true,
  },
]

function QualityBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-muted rounded-full h-1.5 min-w-[60px]">
        <div
          className="h-1.5 rounded-full bg-primary transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-foreground w-7 text-right">
        {value}
      </span>
    </div>
  )
}

export function ComparisonTable() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["gpt4", "claude", "midjourney"])
  )

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        if (next.size > 1) next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const visible = ALL_ROWS.filter((r) => selected.has(r.id))

  return (
    <section id="comparison" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Сравните характеристики
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty">
            Выберите модели для детального сравнения по ключевым параметрам.
          </p>
        </div>

        {/* Filter checkboxes */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {ALL_ROWS.map((row) => (
            <label
              key={row.id}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl border text-sm font-medium transition-all select-none ${
                selected.has(row.id)
                  ? "border-primary bg-[color:var(--brand-light)] text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              <input
                type="checkbox"
                checked={selected.has(row.id)}
                onChange={() => toggle(row.id)}
                className="sr-only"
              />
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: row.color }}
              />
              {row.name}
              {selected.has(row.id) && (
                <Check size={13} className="text-primary" />
              )}
            </label>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[color:var(--surface)] border-b border-border">
                <th className="text-left px-5 py-3.5 font-semibold text-foreground whitespace-nowrap">
                  Модель
                </th>
                <th className="text-left px-5 py-3.5 font-semibold text-foreground whitespace-nowrap">
                  Контекст
                </th>
                <th className="text-left px-5 py-3.5 font-semibold text-foreground whitespace-nowrap">
                  Скорость
                </th>
                <th className="text-left px-5 py-3.5 font-semibold text-foreground whitespace-nowrap">
                  Цена
                </th>
                <th className="text-left px-5 py-3.5 font-semibold text-foreground min-w-[140px]">
                  Качество генерации
                </th>
                <th className="text-left px-5 py-3.5 font-semibold text-foreground whitespace-nowrap">
                  Языки
                </th>
                <th className="text-left px-5 py-3.5 font-semibold text-foreground whitespace-nowrap">
                  Мультимодальность
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-border last:border-b-0 transition-colors hover:bg-[color:var(--brand-light)]/30 ${
                    i % 2 === 0 ? "bg-background" : "bg-[color:var(--surface)]"
                  }`}
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-lg inline-flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ backgroundColor: row.color }}
                      >
                        {row.name.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="font-semibold text-foreground whitespace-nowrap">
                        {row.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground font-mono text-xs">
                    {row.context}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{row.speed}</td>
                  <td className="px-5 py-4">
                    <span className="font-semibold text-foreground">{row.price}</span>
                  </td>
                  <td className="px-5 py-4">
                    <QualityBar value={row.quality} />
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{row.languages}</td>
                  <td className="px-5 py-4">
                    {row.multimodal ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-xs">
                        <Check size={13} />
                        Да
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-muted-foreground text-xs">
                        <X size={13} />
                        Нет
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
