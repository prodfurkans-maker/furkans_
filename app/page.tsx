import { Chat } from '@/components/chat'

export default function Page() {
  return (
    <main className="h-dvh relative overflow-hidden">
      {/* Pastel gradient background matching the design */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, hsl(200 60% 92%) 0%, hsl(260 40% 90%) 30%, hsl(290 35% 88%) 60%, hsl(260 35% 90%) 80%, hsl(200 50% 92%) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle sparkle dots */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />
      <Chat />
    </main>
  )
}
