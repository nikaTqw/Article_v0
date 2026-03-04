"use client"

import { useState } from "react"
import { Star } from "lucide-react"

type Category = "text" | "image" | "av"

interface Model {
  name: string
  description: string
  features: string[]
  rating: number
  badge?: string
  color: string
  icon: string
}

const MODELS: Record<Category, Model[]> = {
  text: [
    {
      name: "GPT-4o",
      description: "Флагманская мультимодальная модель OpenAI",
      features: ["128K контекст", "Мультимодальность", "Быстрый ответ"],
      rating: 4.9,
      badge: "Топ выбор",
      color: "#10a37f",
      icon: "G4",
    },
    {
      name: "Claude 3 Opus",
      description: "Самая умная модель Anthropic для сложных задач",
      features: ["200K контекст", "Длинные тексты", "Анализ данных"],
      rating: 4.8,
      color: "#c084fc",
      icon: "CL",
    },
    {
      name: "Gemini 1.5 Pro",
      description: "Мощная мультимодальная модель Google DeepMind",
      features: ["1M контекст", "Код и видео", "Google Search"],
      rating: 4.7,
      color: "#4285f4",
      icon: "GM",
    },
    {
      name: "YandexGPT Pro",
      description: "Российская языковая модель с отличным знанием русского",
      features: ["32K контекст", "Русский язык", "Яндекс-экосистема"],
      rating: 4.4,
      color: "#e63a2e",
      icon: "YA",
    },
  ],
  image: [
    {
      name: "Midjourney v6",
      description: "Лучший генератор изображений для творческих задач",
      features: ["4K разрешение", "Стилизация", "Быстрый режим"],
      rating: 4.9,
      badge: "Топ выбор",
      color: "#e11d48",
      icon: "MJ",
    },
    {
      name: "DALL·E 3",
      description: "Высокоточная генерация изображений от OpenAI",
      features: ["Точность промптов", "Интеграция с GPT", "HD качество"],
      rating: 4.7,
      color: "#f97316",
      icon: "DE",
    },
    {
      name: "Stable Diffusion 3",
      description: "Открытая модель с гибкой настройкой и LoRA",
      features: ["Open source", "LoRA/ControlNet", "Локальный запуск"],
      rating: 4.5,
      color: "#6366f1",
      icon: "SD",
    },
    {
      name: "Adobe Firefly",
      description: "Профессиональная генерация в экосистеме Adobe",
      features: ["Коммерческая лицензия", "Adobe CC", "Generative Fill"],
      rating: 4.3,
      color: "#ff4a84",
      icon: "AF",
    },
  ],
  av: [
    {
      name: "Sora",
      description: "Революционная генерация видео от OpenAI",
      features: ["До 60 сек", "1080p", "Физическая симуляция"],
      rating: 4.8,
      badge: "Новинка",
      color: "#0ea5e9",
      icon: "SR",
    },
    {
      name: "ElevenLabs",
      description: "Лучший TTS с клонированием голоса",
      features: ["Клонирование голоса", "29 языков", "Эмоции"],
      rating: 4.9,
      badge: "Топ выбор",
      color: "#7c3aed",
      icon: "EL",
    },
    {
      name: "Runway Gen-3",
      description: "Профессиональная платформа для видеогенерации",
      features: ["Video to Video", "Motion Brush", "4K"],
      rating: 4.6,
      color: "#059669",
      icon: "RW",
    },
    {
      name: "Kling AI",
      description: "Быстрая генерация видео с отличными результатами",
      features: ["2 мин видео", "I2V режим", "Китайский рынок"],
      rating: 4.4,
      color: "#d97706",
      icon: "KL",
    },
  ],
}

const TABS: { key: Category; label: string }[] = [
  { key: "text", label: "Текстовые" },
  { key: "image", label: "Графические" },
  { key: "av", label: "Аудио / Видео" },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={
            i <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }
        />
      ))}
      <span className="ml-1 text-xs font-semibold text-foreground">{rating}</span>
    </div>
  )
}

function ModelCard({ model }: { model: Model }) {
  return (
    <div className="relative bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 group">
      {model.badge && (
        <span
          className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full text-primary-foreground"
          style={{ backgroundColor: model.color }}
        >
          {model.badge}
        </span>
      )}
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{ backgroundColor: model.color }}
        >
          {model.icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm leading-tight">
            {model.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
            {model.description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {model.features.map((f) => (
          <span
            key={f}
            className="text-[11px] px-2 py-0.5 rounded-md font-medium"
            style={{ background: model.color + "18", color: model.color }}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1 border-t border-border">
        <StarRating rating={model.rating} />
        <button className="text-xs font-semibold text-primary hover:underline">
          Подробнее →
        </button>
      </div>
    </div>
  )
}

export function Catalog() {
  const [active, setActive] = useState<Category>("text")

  return (
    <section id="catalog" className="py-20 px-6 bg-[color:var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Каталог моделей
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty">
            Более 50 нейросетей, разбитых по категориям. Все актуальные характеристики и рейтинги.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 bg-muted p-1 rounded-xl w-fit mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                active === tab.key
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MODELS[active].map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
      </div>
    </section>
  )
}
