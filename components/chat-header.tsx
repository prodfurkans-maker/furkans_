import { Lightbulb } from 'lucide-react'
import Image from 'next/image'

export function ChatHeader() {
  return (
    <header className="relative flex items-center gap-3 px-5 py-4 md:px-6 md:py-5 bg-card border-b border-border overflow-hidden">
      {/* Subtle decorative dots */}
      <div
        className="absolute top-2 right-8 w-2 h-2 rounded-full bg-primary/20 animate-pulse-soft"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-3 right-16 w-1.5 h-1.5 rounded-full bg-accent/30 animate-pulse-soft"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      {/* Mascot avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-sm">
          <Image
            src="/mascot.jpg"
            alt="Düşünen Yapay Zeka maskotu"
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center shadow-sm border border-accent/30">
          <Lightbulb className="w-3 h-3 text-secondary-foreground" />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-lg font-extrabold font-serif text-foreground leading-tight tracking-tight">
          {'Düşünen Yapay Zeka'}
        </h1>
        <p className="text-sm text-muted-foreground leading-tight font-medium">
          {'Birlikte düşünelim mi?'}
        </p>
      </div>
    </header>
  )
}
