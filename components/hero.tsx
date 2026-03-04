"use client"

import { useEffect, useRef } from "react"

const MODELS = [
  { label: "GPT-4", color: "#10a37f", x: 72, y: 38 },
  { label: "Claude", color: "#c084fc", x: 54, y: 62 },
  { label: "Gemini", color: "#4285f4", x: 88, y: 65 },
  { label: "Midjourney", color: "#e11d48", x: 30, y: 48 },
  { label: "DALL·E", color: "#f97316", x: 62, y: 22 },
  { label: "Stable\nDiff.", color: "#6366f1", x: 18, y: 72 },
  { label: "Llama 3", color: "#0ea5e9", x: 82, y: 82 },
  { label: "YandexGPT", color: "#e63a2e", x: 45, y: 85 },
]

// Price/quality scatter data
const SCATTER = [
  { label: "GPT-4o", price: 5, quality: 95, color: "#10a37f" },
  { label: "Claude 3 Opus", price: 15, quality: 92, color: "#c084fc" },
  { label: "Gemini Ultra", price: 7, quality: 88, color: "#4285f4" },
  { label: "Midjourney", price: 10, quality: 91, color: "#e11d48" },
  { label: "GPT-4 mini", price: 0.6, quality: 80, color: "#f97316" },
  { label: "DALL·E 3", price: 4, quality: 85, color: "#f97316" },
  { label: "Stable Diff.", price: 0.4, quality: 77, color: "#6366f1" },
  { label: "Llama 3 70B", price: 0.9, quality: 82, color: "#0ea5e9" },
  { label: "YandexGPT Pro", price: 1.2, quality: 78, color: "#e63a2e" },
  { label: "Claude Haiku", price: 0.25, quality: 74, color: "#c084fc" },
]

function ScatterChart() {
  const maxPrice = 16
  const W = 480
  const H = 280
  const PAD = { top: 20, right: 20, bottom: 44, left: 44 }

  const toX = (price: number) =>
    PAD.left + ((price / maxPrice) * (W - PAD.left - PAD.right))
  const toY = (quality: number) =>
    PAD.top + ((1 - quality / 100) * (H - PAD.top - PAD.bottom))

  const gridLines = [0, 4, 8, 12, 16]
  const qualityLines = [70, 80, 90, 100]

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-full"
      aria-label="Scatter chart: price vs quality"
    >
      {/* Grid lines */}
      {qualityLines.map((q) => (
        <line
          key={q}
          x1={PAD.left}
          x2={W - PAD.right}
          y1={toY(q)}
          y2={toY(q)}
          stroke="#e5e7f0"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}
      {gridLines.map((p) => (
        <line
          key={p}
          x1={toX(p)}
          x2={toX(p)}
          y1={PAD.top}
          y2={H - PAD.bottom}
          stroke="#e5e7f0"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}

      {/* Axes labels */}
      {gridLines.map((p) => (
        <text
          key={p}
          x={toX(p)}
          y={H - PAD.bottom + 16}
          textAnchor="middle"
          fontSize="10"
          fill="#94a3b8"
        >
          ${p}
        </text>
      ))}
      {qualityLines.map((q) => (
        <text
          key={q}
          x={PAD.left - 6}
          y={toY(q) + 4}
          textAnchor="end"
          fontSize="10"
          fill="#94a3b8"
        >
          {q}
        </text>
      ))}

      {/* Axis titles */}
      <text x={W / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="#64748b">
        Цена за 1M токенов ($)
      </text>
      <text
        x={12}
        y={H / 2}
        textAnchor="middle"
        fontSize="11"
        fill="#64748b"
        transform={`rotate(-90, 12, ${H / 2})`}
      >
        Качество (0–100)
      </text>

      {/* Points */}
      {SCATTER.map((d) => (
        <g key={d.label}>
          <circle
            cx={toX(d.price)}
            cy={toY(d.quality)}
            r="7"
            fill={d.color}
            opacity="0.85"
            className="transition-all hover:opacity-100 cursor-pointer"
          />
          <text
            x={toX(d.price) + 10}
            y={toY(d.quality) + 4}
            fontSize="9.5"
            fill="#334155"
          >
            {d.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

function LogoCloud() {
  return (
    <div className="relative w-full h-full min-h-[240px]">
      {MODELS.map((m) => (
        <div
          key={m.label}
          className="absolute flex items-center justify-center rounded-2xl shadow-sm border border-border bg-background px-3 py-2 text-xs font-semibold text-center leading-tight select-none transition-transform hover:scale-110 cursor-pointer"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            transform: "translate(-50%, -50%)",
            color: m.color,
            borderColor: m.color + "33",
            backgroundColor: m.color + "10",
          }}
        >
          {m.label.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start bg-[color:var(--brand-light)] text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Платформа сравнения нейросетей
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Объективное сравнение нейросетей{" "}
              <span className="text-primary">для любых задач</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Выбирайте идеальную модель по качеству, скорости и стоимости. Все
              популярные нейросети в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                Начать сравнение
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                Каталог моделей →
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              {["50+ моделей", "Обновляется ежедневно", "Бесплатно"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: chart + logo cloud */}
          <div className="flex flex-col gap-4">
            {/* Chart card */}
            <div className="bg-card border border-border rounded-2xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">
                  Соотношение цена / качество
                </span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                  Топ‑10 моделей
                </span>
              </div>
              <div className="h-[220px]">
                <ScatterChart />
              </div>
            </div>

            {/* Logo cloud */}
            <div className="bg-card border border-border rounded-2xl shadow-sm p-5">
              <p className="text-xs text-muted-foreground mb-3">
                Популярные нейросети
              </p>
              <div className="h-[200px] relative">
                <LogoCloud />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
