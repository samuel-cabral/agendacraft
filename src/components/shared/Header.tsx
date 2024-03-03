import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

import { Button } from '../ui/button'
import { Logo } from './Logo'
import { MobileNav } from './MovileNav'
import { NavItems } from './NavItems'

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Logo />

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 items-center justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="sign-in">Sign In</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
