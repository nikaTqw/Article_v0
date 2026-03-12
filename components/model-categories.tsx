"use client"

import { Star, MessageSquareText, Image, Video } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface ModelCard {
  name: string
  description: string
  rating: number
  icon: React.ReactNode
}

const textModels: ModelCard[] = [
  {
    name: "GPT-4",
    description: "Мощная модель OpenAI для сложных задач: анализ, генерация, рассуждение",
    rating: 4.8,
    icon: <span className="text-xl font-bold text-primary">G4</span>,
  },
  {
    name: "Claude 3 Opus",
    description: "Anthropic: глубокий контекст, точные ответы, безопасность",
    rating: 4.7,
    icon: <span className="text-xl font-bold text-primary">C3</span>,
  },
  {
    name: "Gemini Pro",
    description: "Google: мультимодальность, быстрый отклик, интеграция",
    rating: 4.5,
    icon: <span className="text-xl font-bold text-primary">Gm</span>,
  },
  {
    name: "YandexGPT",
    description: "Яндекс: отличная работа с русским языком и локальными задачами",
    rating: 4.2,
    icon: <span className="text-xl font-bold text-primary">Ya</span>,
  },
]

const imageModels: ModelCard[] = [
  {
    name: "Midjourney",
    description: "Лидер в художественной генерации: стилизация, детали, креатив",
    rating: 4.9,
    icon: <span className="text-xl font-bold text-primary">Mj</span>,
  },
  {
    name: "DALL-E 3",
    description: "OpenAI: точное следование промпту, интеграция с ChatGPT",
    rating: 4.6,
    icon: <span className="text-xl font-bold text-primary">D3</span>,
  },
  {
    name: "Stable Diffusion",
    description: "Open-source: полный контроль, кастомизация, локальный запуск",
    rating: 4.4,
    icon: <span className="text-xl font-bold text-primary">SD</span>,
  },
  {
    name: "Flux",
    description: "Новое поколение: фотореализм, быстрая генерация, API-доступ",
    rating: 4.5,
    icon: <span className="text-xl font-bold text-primary">Fx</span>,
  },
]

const audioVideoModels: ModelCard[] = [
  {
    name: "Whisper",
    description: "OpenAI: распознавание речи на 50+ языках, высокая точность",
    rating: 4.7,
    icon: <span className="text-xl font-bold text-primary">Wh</span>,
  },
  {
    name: "Sora",
    description: "OpenAI: генерация видео из текста, кинематографическое качество",
    rating: 4.6,
    icon: <span className="text-xl font-bold text-primary">Sr</span>,
  },
  {
    name: "ElevenLabs",
    description: "Клонирование голоса, естественная озвучка, эмоциональность",
    rating: 4.5,
    icon: <span className="text-xl font-bold text-primary">EL</span>,
  },
  {
    name: "Runway Gen-3",
    description: "Видеоредактор с ИИ: анимация, эффекты, генерация по ключевому кадру",
    rating: 4.4,
    icon: <span className="text-xl font-bold text-primary">Rw</span>,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${
            i < Math.round(rating)
              ? "fill-primary text-primary"
              : "fill-muted text-muted"
          }`}
        />
      ))}
      <span className="ml-1 text-xs font-medium text-muted-foreground">
        {rating}
      </span>
    </div>
  )
}

function ModelCardComponent({ model }: { model: ModelCard }) {
  return (
    <Card className="group transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between">
          <div className="flex size-11 items-center justify-center rounded-xl bg-secondary">
            {model.icon}
          </div>
          <StarRating rating={model.rating} />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{model.name}</h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {model.description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function ModelCategories() {
  return (
    <section id="catalog" className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Каталог моделей
          </h2>
          <p className="mt-3 text-muted-foreground">
            Выберите категорию и изучите лучшие модели в каждой из них
          </p>
        </div>

        <Tabs defaultValue="text" className="flex flex-col items-center">
          <TabsList className="mb-8 h-11 rounded-xl px-1">
            <TabsTrigger value="text" className="gap-2 rounded-lg px-4 py-2 text-sm">
              <MessageSquareText className="size-4" />
              Текстовые
            </TabsTrigger>
            <TabsTrigger value="image" className="gap-2 rounded-lg px-4 py-2 text-sm">
              <Image className="size-4" />
              Графические
            </TabsTrigger>
            <TabsTrigger value="av" className="gap-2 rounded-lg px-4 py-2 text-sm">
              <Video className="size-4" />
              {"Аудио/Видео"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="w-full">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {textModels.map((m) => (
                <ModelCardComponent key={m.name} model={m} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="image" className="w-full">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {imageModels.map((m) => (
                <ModelCardComponent key={m.name} model={m} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="av" className="w-full">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {audioVideoModels.map((m) => (
                <ModelCardComponent key={m.name} model={m} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
