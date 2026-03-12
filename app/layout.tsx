import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'NeuroCompare — Объективное сравнение нейросетей',
  description:
    'Платформа для объективного сравнения и выбора нейросетей (текстовых, графических, аудио/видео) в едином интерфейсе.',
}

export const viewport: Viewport = {
  themeColor: '#4A6CF7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
