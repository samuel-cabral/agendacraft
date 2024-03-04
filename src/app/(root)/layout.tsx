import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <main className="container flex flex-1 flex-col gap-5">{children}</main>
      <Footer />
    </div>
  )
}
