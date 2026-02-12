import {
  Heart,
  Users,
  ShieldAlert,
  Smartphone,
  Scale,
  Lightbulb,
} from 'lucide-react'
import Image from 'next/image'

const topics = [
  {
    icon: Users,
    label: 'Arkadaşlık',
    prompt: 'Arkadaşım benimle konuşmuyor, ne yapmalıyım?',
    color: 'bg-secondary text-secondary-foreground',
    iconColor: 'text-secondary-foreground',
  },
  {
    icon: ShieldAlert,
    label: 'Zorbalık',
    prompt: 'Okulda biri bana kötü davranıyor.',
    color: 'bg-primary/10 text-foreground',
    iconColor: 'text-primary',
  },
  {
    icon: Heart,
    label: 'Paylaşmak',
    prompt: 'Oyuncağımı paylaşmak istemiyorum.',
    color: 'bg-teal-soft text-foreground',
    iconColor: 'text-accent-foreground',
  },
  {
    icon: Smartphone,
    label: 'Ekran Süresi',
    prompt: 'Tablet oynamayı çok seviyorum, anneme kızıyorum.',
    color: 'bg-warm-glow text-foreground',
    iconColor: 'text-primary',
  },
  {
    icon: Scale,
    label: 'Adalet',
    prompt: 'Bu hiç adil değil, kardeşime daha çok izin veriliyor.',
    color: 'bg-secondary text-secondary-foreground',
    iconColor: 'text-secondary-foreground',
  },
]

export function TopicStarters({
  onSelect,
}: {
  onSelect: (prompt: string) => void
}) {
  return (
    <div className="flex flex-col items-center gap-8 px-4 py-6 md:py-10">
      {/* Mascot illustration */}
      <div className="relative animate-float">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden shadow-lg border-2 border-primary/10">
          <Image
            src="/mascot.jpg"
            alt="Düşünen Yapay Zeka maskotu"
            width={144}
            height={144}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
          <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
        </div>
      </div>

      {/* Welcome text */}
      <div className="text-center max-w-sm">
        <h2 className="text-xl md:text-2xl font-extrabold font-serif text-foreground text-balance leading-snug">
          {'Merhaba! Ben senin düşünme arkadaşın.'}
        </h2>
        <p className="mt-2 text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
          {'Bir konu seç veya aklındakini yaz, birlikte düşünelim!'}
        </p>
      </div>

      {/* Topic cards */}
      <div className="flex flex-wrap justify-center gap-3 max-w-md">
        {topics.map((topic) => (
          <button
            key={topic.label}
            onClick={() => onSelect(topic.prompt)}
            className={`group flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold
              ${topic.color}
              border border-transparent
              shadow-sm hover:shadow-md
              hover:scale-[1.04] active:scale-[0.98]
              transition-all duration-200 ease-out`}
          >
            <topic.icon
              className={`w-4 h-4 ${topic.iconColor} transition-transform group-hover:scale-110`}
            />
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  )
}
