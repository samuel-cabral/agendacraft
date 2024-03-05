import { format } from 'date-fns'
import { CalendarCheck, Pencil } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/lib/axios'
import { IEvent } from '@/store'

interface EventDetailsProps {
  params: { id: string }
}

export default async function EventDetails({
  params: { id },
}: EventDetailsProps) {
  const response = await api.get<IEvent>(`events/1`)
  const event = response.data

  const eventParsedDate = format(new Date(event.date), 'MMMM dd, yyyy')

  return (
    <section className="mt-4 flex flex-col gap-3">
      <h1 className="text-2xl font-bold md:text-3xl">{event.name}</h1>

      <p className="flex items-center gap-1 text-sm leading-5 text-muted-foreground">
        <CalendarCheck size={16} />
        {eventParsedDate}
      </p>

      <div className="bg flex h-full w-full flex-col items-start rounded-lg bg-muted md:w-1/2">
        <Image
          src={event.image}
          alt={event.name}
          width={1000}
          height={1000}
          className="rounded-t-lg md:w-1/2"
        />

        <div className="grid flex-1 grid-cols-1 gap-2 p-4">
          <p className="text-sm text-muted-foreground">{event.description}</p>

          <div className="flex items-center justify-between">
            <Link href={`/events/${id}/edit`}>
              <Pencil className="text-sm leading-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
