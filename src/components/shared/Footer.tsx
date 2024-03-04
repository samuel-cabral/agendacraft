import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 p-5 text-center sm:flex-row md:justify-between">
        <Logo />

        <p className="text-sm font-light leading-4 text-muted-foreground">
          &copy; 2021 AgendaCraft. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
