import { AlignRight } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Separator } from '../ui/separator'
import { Logo } from './Logo'
import { NavItems } from './NavItems'

export function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="cursor-pointer align-middle">
          <AlignRight className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 md:hidden">
          <Logo />
          <Separator className="border-b border-x-foreground" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
