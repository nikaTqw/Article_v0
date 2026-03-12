"use client"

import { useState } from "react"
import { Check, X as XIcon } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface ModelData {
  id: string
  name: string
  context: string
  speed: string
  price: string
  quality: number
  languages: string
  multimodal: boolean
}

const models: ModelData[] = [
  {
    id: "gpt4",
    name: "GPT-4",
    context: "128 000",
    speed: "~80",
    price: "$30",
    quality: 95,
    languages: "95+",
    multimodal: true,
  },
  {
    id: "claude3",
    name: "Claude 3 Opus",
    context: "200 000",
    speed: "~60",
    price: "$25",
    quality: 93,
    languages: "80+",
    multimodal: true,
  },
  {
    id: "yandex",
    name: "YandexGPT",
    context: "32 000",
    speed: "~100",
    price: "$8",
    quality: 78,
    languages: "2",
    multimodal: false,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    context: "—",
    speed: "~15 сек/изобр.",
    price: "$20/мес",
    quality: 96,
    languages: "50+",
    multimodal: false,
  },
  {
    id: "dalle3",
    name: "DALL-E 3",
    context: "—",
    speed: "~10 сек/изобр.",
    price: "$15",
    quality: 88,
    languages: "95+",
    multimodal: false,
  },
]

function QualityBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs font-medium text-foreground">{score}</span>
    </div>
  )
}

export function ComparisonTable() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(models.map((m) => m.id))
  )

  const toggleModel = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const visibleModels = models.filter((m) => selected.has(m.id))

  return (
    <section id="compare" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Сравните характеристики
          </h2>
          <p className="mt-3 text-muted-foreground">
            Выберите модели для сравнения и оцените их ключевые параметры
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          {models.map((m) => (
            <label
              key={m.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 transition-colors hover:bg-secondary"
            >
              <Checkbox
                checked={selected.has(m.id)}
                onCheckedChange={() => toggleModel(m.id)}
              />
              <span className="text-sm font-medium text-foreground">
                {m.name}
              </span>
            </label>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary hover:bg-secondary">
                <TableHead className="text-foreground">Модель</TableHead>
                <TableHead className="text-foreground">Контекст (токенов)</TableHead>
                <TableHead className="text-foreground">{"Скорость (ток./сек)"}</TableHead>
                <TableHead className="text-foreground">Цена за 1M токенов</TableHead>
                <TableHead className="text-foreground">Качество</TableHead>
                <TableHead className="text-foreground">Языки</TableHead>
                <TableHead className="text-foreground">Мультимодальность</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleModels.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="py-10 text-center text-muted-foreground">
                    Выберите хотя бы одну модель для сравнения
                  </TableCell>
                </TableRow>
              ) : (
                visibleModels.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="font-semibold text-foreground">
                      {m.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{m.context}</TableCell>
                    <TableCell className="text-muted-foreground">{m.speed}</TableCell>
                    <TableCell className="text-muted-foreground">{m.price}</TableCell>
                    <TableCell>
                      <QualityBar score={m.quality} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">{m.languages}</TableCell>
                    <TableCell>
                      {m.multimodal ? (
                        <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3.5" />
                        </span>
                      ) : (
                        <span className="inline-flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                          <XIcon className="size-3.5" />
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
