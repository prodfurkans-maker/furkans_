'use client'

import { SendHorizontal } from 'lucide-react'
import { useRef, useEffect } from 'react'

export function ChatInput({
  input,
  onInputChange,
  onSubmit,
  isLoading,
}: {
  input: string
  onInputChange: (value: string) => void
  onSubmit: () => void
  isLoading: boolean
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
  }, [input])

  return (
    <div className="bg-card/40 backdrop-blur-xl border-t border-border/30 px-4 py-3 md:px-5 md:py-4 rounded-b-2xl">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
        className="flex items-end gap-3 max-w-2xl mx-auto"
      >
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                onSubmit()
              }
            }}
            placeholder="Aklindaki soruyu yaz..."
            disabled={isLoading}
            rows={1}
            className="w-full resize-none rounded-2xl border border-border/40 bg-card/80 px-4 py-3.5 pr-12 text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 disabled:opacity-50 shadow-sm transition-all duration-200"
            aria-label="Mesaj yaz"
          />
        </div>
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.04] active:scale-[0.97] transition-all duration-200 disabled:opacity-30 disabled:shadow-none disabled:hover:scale-100"
          aria-label="Gönder"
        >
          <SendHorizontal className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}
