import { cn } from '@/lib/utils'
import { Lightbulb } from 'lucide-react'
import Image from 'next/image'
import type { UIMessage } from 'ai'

function getUIMessageText(msg: UIMessage): string {
  if (!msg.parts || !Array.isArray(msg.parts)) return ''
  return msg.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('')
}

export function MessageBubble({ message }: { message: UIMessage }) {
  const isUser = message.role === 'user'
  const text = getUIMessageText(message)

  return (
    <div
      className={cn(
        'flex gap-3 animate-fade-in',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      {/* AI avatar */}
      {!isUser && (
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
      )}

      {/* Message content */}
      <div
        className={cn(
          'max-w-[80%] md:max-w-[72%] px-4 py-3 text-[15px] leading-relaxed animate-bounce-in shadow-sm',
          isUser
            ? 'bg-user-bubble text-user-bubble-foreground rounded-2xl rounded-br-lg font-medium'
            : 'bg-ai-bubble text-ai-bubble-foreground rounded-2xl rounded-bl-lg border border-accent/20'
        )}
      >
        {text}
      </div>

      {/* User avatar */}
      {isUser && (
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center mt-1">
          <span className="text-sm font-bold text-primary" aria-hidden="true">
            {'Ben'}
          </span>
        </div>
      )}
    </div>
  )
}
