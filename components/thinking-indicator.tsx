import Image from 'next/image'
import { Lightbulb } from 'lucide-react'

export function ThinkingIndicator() {
  return (
    <div className="flex gap-3 justify-start animate-fade-in">
      {/* AI avatar */}
      <div className="relative flex-shrink-0 mt-1">
        <div className="w-9 h-9 rounded-xl overflow-hidden border border-primary/15 shadow-sm">
          <Image
            src="/mascot.jpg"
            alt=""
            width={36}
            height={36}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-secondary flex items-center justify-center border border-card">
          <Lightbulb className="w-2.5 h-2.5 text-secondary-foreground" />
        </div>
      </div>

      {/* Dots */}
      <div className="bg-ai-bubble border border-accent/20 px-5 py-3.5 rounded-2xl rounded-bl-lg shadow-sm">
        <div className="flex items-center gap-1.5" aria-label="Düşünüyor...">
          <span
            className="w-2.5 h-2.5 rounded-full bg-accent-foreground/40 animate-thinking-dot"
            style={{ animationDelay: '0s' }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full bg-accent-foreground/40 animate-thinking-dot"
            style={{ animationDelay: '0.16s' }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full bg-accent-foreground/40 animate-thinking-dot"
            style={{ animationDelay: '0.32s' }}
          />
        </div>
      </div>
    </div>
  )
}
