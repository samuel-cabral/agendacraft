import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Logo />

        <p>&copy; 2021 AgendaCraft. All rights reserved.</p>
      </div>
    </footer>
  )
}
