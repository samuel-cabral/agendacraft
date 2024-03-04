import { format } from 'date-fns'
import { CalendarCheck, Pencil } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { api } from '@/lib/axios'
import { IEvent } from '@/store'

export default async function EventDetails({
  params: { id },
}: {
  params: { id: string }
}) {
  async function getEventDetails() {
    const { data } = await api.get<IEvent>(`/events/${id}`)
    return data
  }

  const event = await getEventDetails()

  const eventParsedDate = format(new Date(event.date), 'MMMM dd, yyyy')

  console.log('🚀 ~ event:', event)
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full flex-col items-center justify-center">
          Loading event data...
        </div>
      }
    >
      <section className="mt-4">
        <h1 className="text-2xl font-bold md:text-3xl">{event.name}</h1>

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

              <p className="flex items-center gap-1 text-sm leading-5 text-muted-foreground">
                <CalendarCheck size={16} />
                {eventParsedDate}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  )
}
