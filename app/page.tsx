import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://agiftforyouuu.vercel.app'),
  title: 'Happy Birthday renad! 🎂',
  description: 'A special birthday message for renad 🤍',
  openGraph: {
    title: 'Happy Birthday renad! 🎂',
    description: 'A special birthday message for renad 🤍',
    url: 'https://agiftforyouuu.vercel.app',
    siteName: 'Birthday Gift',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Happy Birthday renad! 🎂',
    description: 'A special birthday message for renad 🤍',
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}