import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from 'next-intl'

import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
})

export const metadata: Metadata = {
  title: 'AgendaCraft',
  description: 'Generated by create next app',
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex h-screen w-screen flex-col">
              <Header />
              <main className="container flex flex-1 flex-col gap-5">
                {children}
              </main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Toaster richColors position="top-right" expand={false} />
      </body>
    </html>
  )
}

export default RootLayout