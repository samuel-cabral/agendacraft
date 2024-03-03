export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex-center bg-dotted-pattern min-h-screen w-full bg-primary bg-cover bg-center">
      {children}
    </div>
  )
}
