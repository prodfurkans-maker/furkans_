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
    icon: Heart,
    label: 'Arkadaşlık',
    prompt: 'Arkadaşım benimle konuşmuyor, ne yapmalıyım?',
    bgColor: 'bg-secondary/60',
    iconColor: 'text-primary',
  },
  {
    icon: ShieldAlert,
    label: 'Zorbalık',
    prompt: 'Okulda biri bana kötü davranıyor.',
    bgColor: 'bg-warm-glow/70',
    iconColor: 'text-orange-400',
  },
  {
    icon: Users,
    label: 'Paylaşmak',
    prompt: 'Oyuncağımı paylaşmak istemiyorum.',
    bgColor: 'bg-lavender-soft/70',
    iconColor: 'text-purple-400',
  },
  {
    icon: Smartphone,
    label: 'Ekran Süresi',
    prompt: 'Tablet oynamayı çok seviyorum, anneme kızıyorum.',
    bgColor: 'bg-peach-soft/70',
    iconColor: 'text-orange-400',
  },
  {
    icon: Scale,
    label: 'Adalet',
    prompt: 'Bu hiç adil değil, kardeşime daha çok izin veriliyor.',
    bgColor: 'bg-teal-soft/70',
    iconColor: 'text-primary',
  },
]

export function TopicStarters({
  onSelect,
}: {
  onSelect: (prompt: string) => void
}) {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-6 md:py-10">
      {/* Mascot illustration with lightbulb badge */}
      <div className="relative animate-float">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-lg border-2 border-primary/10">
          <Image
            src="/mascot.jpg"
            alt="Düşünen Yapay Zeka maskotu"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="absolute -top-3 -right-3 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-orange-400 flex items-center justify-center shadow-md">
          <Lightbulb className="w-5 h-5 text-card" />
        </div>
      </div>

      {/* Welcome text */}
      <div className="text-center max-w-sm">
        <h2 className="text-xl md:text-2xl font-extrabold font-serif text-foreground text-balance leading-snug">
          {'Merhaba! Ben senin düşünme arkadaşınım.'}
        </h2>
        <p className="mt-2 text-muted-foreground text-sm md:text-base leading-relaxed text-pretty">
          {'Bir konu seç veya aklındakini yaz, birlikte düşünelim.'}
        </p>
      </div>

      {/* Topic cards - 2 column grid matching the design */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {topics.map((topic, i) => (
          <button
            key={topic.label}
            onClick={() => onSelect(topic.prompt)}
            className={`group flex items-center gap-2.5 px-4 py-3.5 rounded-2xl text-sm font-semibold
              ${topic.bgColor} text-foreground
              border border-border/30
              shadow-sm hover:shadow-md
              hover:scale-[1.03] active:scale-[0.98]
              transition-all duration-200 ease-out
              ${i === topics.length - 1 && topics.length % 2 !== 0 ? 'col-span-1' : ''}`}
          >
            <topic.icon
              className={`w-4 h-4 ${topic.iconColor} transition-transform group-hover:scale-110 flex-shrink-0`}
            />
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  )
}
