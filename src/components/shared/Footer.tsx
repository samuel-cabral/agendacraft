import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-between flex flex-col items-center justify-center gap-4 p-5 text-center sm:flex-row">
        <Logo />

        <p>&copy; 2021 AgendaCraft. All rights reserved.</p>
      </div>
    </footer>
  )
}
