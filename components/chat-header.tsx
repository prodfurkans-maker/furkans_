import Image from 'next/image'

export function ChatHeader({ onHomeClick }: { onHomeClick?: () => void }) {
  return (
    <header className="relative flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-card/70 backdrop-blur-xl border-b border-border/50 rounded-t-2xl overflow-hidden">
      {/* Logo and brand */}
      <button
        onClick={onHomeClick}
        className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        aria-label="Ana sayfa"
      >
        <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-primary/20 shadow-sm">
          <Image
            src="/mascot.jpg"
            alt="Düşünen Yapay Zeka maskotu"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-base md:text-lg font-extrabold font-serif text-foreground leading-tight tracking-tight">
          {'Düşünen Yapay Zeka'}
        </h1>
      </button>

      {/* Navigation links */}
      <nav className="hidden md:flex items-center gap-5" aria-label="Ana gezinme">
        <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default">
          {'Hakkında'}
        </span>
        <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default">
          {'Eğitim Programı'}
        </span>
      </nav>
    </header>
  )
}
