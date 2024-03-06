import { CalendarCheck, Pencil } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { EventDeletionDialog } from '@/components/events/EventDeletionDialog'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/axios'
import { IEvent } from '@/store'

interface EventDetailsProps {
  params: { id: string }
}

export default async function EventDetails({
  params: { id },
}: EventDetailsProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await api.get<IEvent>(`events/${id}`)
  const event = response.data

  const t = await getTranslations('Index')

  const eventDate = new Date(event.date)

  return (
    <section className="mt-4 flex flex-col gap-3 sm:flex-row">
      <Image
        src={event.image}
        alt={event.name}
        width={1000}
        height={1000}
        className="flex-1 rounded-t-lg sm:w-1/2"
      />

      <div className="flex w-1/2 flex-col gap-3 rounded-lg bg-muted p-4">
        <h1 className="text-2xl font-bold md:text-3xl">{event.name}</h1>

        <p className="flex items-center gap-1 text-sm leading-5 text-muted-foreground">
          <CalendarCheck size={16} />
          {t('eventDate', {
            date: eventDate,
          })}
        </p>

        <p className="text-sm text-muted-foreground">{event.description}</p>

        <div className="flex items-center justify-start">
          <Link href={`/events/${event.id}/edit`} className="hover:text-muted">
            <Button
              className="mr-2 gap-2 p-5"
              variant={'outline'}
              aria-label="open edit event page"
            >
              <span className="hidden md:inline-block">{t('edit')}</span>
              <Pencil size={14} />
            </Button>
          </Link>

          <EventDeletionDialog event={event} />
        </div>
      </div>
    </section>
  )
}
