'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { ChatHeader } from '@/components/chat-header'
import { MessageBubble } from '@/components/message-bubble'
import { ThinkingIndicator } from '@/components/thinking-indicator'
import { TopicStarters } from '@/components/topic-starters'
import { ChatInput } from '@/components/chat-input'

export function Chat() {
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, status])

  const handleSend = (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText || isLoading) return
    sendMessage({ text: messageText })
    setInput('')
  }

  const handleHomeClick = () => {
    setMessages([])
    setInput('')
  }

  return (
    <div className="flex flex-col h-dvh max-w-2xl mx-auto md:my-4 md:h-[calc(100dvh-2rem)]">
      {/* Glass card container */}
      <div className="flex flex-col flex-1 bg-card/60 backdrop-blur-xl md:rounded-3xl shadow-2xl shadow-muted/40 border border-border/30 overflow-hidden">
        <ChatHeader onHomeClick={handleHomeClick} />

        {/* Chat area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-5 md:px-6 md:py-6 scrollbar-hide"
          role="log"
          aria-label="Sohbet mesajlari"
        >
          {messages.length === 0 ? (
            <TopicStarters onSelect={(prompt) => handleSend(prompt)} />
          ) : (
            <div className="flex flex-col gap-5">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              {isLoading &&
                messages[messages.length - 1]?.role === 'user' && (
                  <ThinkingIndicator />
                )}
            </div>
          )}
        </div>

        <ChatInput
          input={input}
          onInputChange={setInput}
          onSubmit={() => handleSend()}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
