import { ModeToggle } from '../ModeToggle'
import { Logo } from './Logo'
import { MobileNav } from './MovileNav'
import { NavItems } from './NavItems'

export function Header() {
  return (
    <header className="flex min-h-20 w-full items-center border-b">
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="md:flex-between hidden w-full max-w-xs md:block">
          <NavItems />
        </nav>

        <div className="flex w-32 items-center justify-end gap-3 md:hidden">
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
