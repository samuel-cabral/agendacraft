import { CalendarCheck } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex w-36 items-center justify-center gap-2">
      <CalendarCheck className="h-5 w-5" />
      <h1 className="font-semibold">agenda.craft</h1>
    </Link>
  )
}
