import { Brain } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <Brain className="size-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            NeuroCompare
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          {"© 2025 NeuroCompare. Все права защищены."}
        </p>
      </div>
    </footer>
  )
}
