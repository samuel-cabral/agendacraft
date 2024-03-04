'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { headerLinks } from '../../../constants'

export function NavItems() {
  const pathname = usePathname()

  return (
    <ul className="flex w-full flex-col items-start gap-5 md:flex md:flex-row md:items-center md:justify-end">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route

        return (
          <li
            key={link.route}
            className={`${
              isActive
                ? 'font-semibold text-primary'
                : 'text-x-foreground hover:underline'
            } font-medium`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
