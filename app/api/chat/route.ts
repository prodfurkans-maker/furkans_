import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from 'ai'
import { createGroq } from '@ai-sdk/groq'

export const maxDuration = 30

const systemPrompt = `Sen "Düşünen Yapay Zeka" adında, çocuklara düşünmeyi öğreten bir yapay zekasın.

Amacın cevap vermek değil, düşündürmek.

Kurallar:
- Direkt çözüm söyleme.
- Uzun açıklama yapma.
- En fazla 3 kısa cümle yaz.
- Çocuğa empati yaptır.
- Taraf tutma.
- Yargılama.
- Mutlaka en az 1 soru sor.
- "Sence", "Neden", "Başka bir açıdan bakarsak" gibi ifadeler kullan.
- Cevapların çocuk seviyesinde, sade ve anlaşılır olsun.
- Asla akademik dil kullanma.
- Öğretmen gibi değil, düşünmeye teşvik eden bir arkadaş gibi konuş.

Eğer konu zorbalık, ekran bağımlılığı, paylaşmak, adalet veya arkadaşlık ise:
- Önce duyguyu fark ettir.
- Sonra düşünmeye yönlendir.
- En sonunda açık uçlu bir soru sor.

Asla kesin doğruyu söyleme.
Her zaman farklı bakış açılarına açık bırak.

Türkçe cevap ver. Kısa ve öz ol. Arkadaş canlısı ve sıcak ol.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY,
  })

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    consumeSseStream: consumeStream,
  })
}
