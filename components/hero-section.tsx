"use client"

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const priceQualityData = [
  { name: "GPT-4", quality: 95, price: 30, color: "#4A6CF7" },
  { name: "Claude 3", quality: 93, price: 25, color: "#6C8AFF" },
  { name: "Gemini", quality: 90, price: 12, color: "#3B82F6" },
  { name: "Midjourney", quality: 96, price: 20, color: "#8B5CF6" },
  { name: "DALL-E 3", quality: 88, price: 15, color: "#A78BFA" },
  { name: "Stable Diff.", quality: 82, price: 5, color: "#7C3AED" },
  { name: "YandexGPT", quality: 78, price: 8, color: "#4338CA" },
  { name: "LLaMA 3", quality: 85, price: 3, color: "#5B21B6" },
  { name: "Mistral", quality: 87, price: 7, color: "#6D28D9" },
  { name: "Whisper", quality: 91, price: 6, color: "#4F46E5" },
]

const modelLogos = [
  "GPT-4",
  "Claude",
  "Midjourney",
  "Stable Diffusion",
  "DALL-E",
  "Gemini",
]

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ payload: (typeof priceQualityData)[0] }>
}) {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="rounded-lg border border-border bg-background px-3 py-2 shadow-lg">
        <p className="text-sm font-semibold text-foreground">{data.name}</p>
        <p className="text-xs text-muted-foreground">
          {"Качество: "}
          {data.quality}
          {"/100"}
        </p>
        <p className="text-xs text-muted-foreground">
          {"Цена: $"}
          {data.price}
          {"/1M токенов"}
        </p>
      </div>
    )
  }
  return null
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.05,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              Объективное сравнение нейросетей для любых задач
            </h1>
            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Выбирайте идеальную модель по качеству, скорости и стоимости. Все
              популярные нейросети в одном месте.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              {modelLogos.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-1 text-sm font-semibold text-foreground">
              Соотношение цена/качество
            </h3>
            <p className="mb-4 text-xs text-muted-foreground">
              Топ-10 моделей: ось X — цена ($/1M токенов), ось Y — качество
            </p>
            <ChartContainer
              config={{
                quality: { label: "Качество", color: "#4A6CF7" },
                price: { label: "Цена", color: "#4A6CF7" },
              }}
              className="h-[320px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis
                    type="number"
                    dataKey="price"
                    name="Цена"
                    unit="$"
                    tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                    axisLine={{ stroke: "var(--color-border)" }}
                  />
                  <YAxis
                    type="number"
                    dataKey="quality"
                    name="Качество"
                    domain={[70, 100]}
                    tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                    axisLine={{ stroke: "var(--color-border)" }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Scatter data={priceQualityData} fill="#4A6CF7">
                    {priceQualityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} r={7} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
