import { format } from 'date-fns'
import { Eye, Pencil, Trash2 } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'

import { Button } from '@/components/ui/button'
import { IEvent, useEventsStore } from '@/store'

export type EventCardProps = {
  event: IEvent
}

export function EventCard({ event }: EventCardProps) {
  const { deleteEvent } = useEventsStore()

  const formattedEventDate = format(new Date(event.date), 'MMMM dd, yyyy')

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-muted shadow-md">
      <Image
        src={event.image}
        alt={event.name}
        width={1000}
        height={1000}
        className="rounded-t-lg object-cover"
      />

      <div id="card-content" className="p-4">
        <h2 className="mb-2 text-xl font-bold text-foreground">{event.name}</h2>
        <p className="mb-2 text-muted-foreground">{formattedEventDate}</p>
        <p className="mb-4 font-light leading-tight text-foreground">
          {event.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <NextLink
              href={`/events/${event.id}/edit`}
              className="hover:text-muted"
            >
              <Button
                className="mr-2 gap-2 text-foreground hover:text-muted-foreground"
                variant={'outline'}
              >
                Edit
                <Pencil size={14} />
              </Button>
            </NextLink>

            <Button
              onClick={() => deleteEvent(event.id)}
              variant={'destructive'}
              className="gap-2"
            >
              Delete
              <Trash2 size={14} />
            </Button>
          </div>
          <NextLink href={`/events/${event.id}`}>
            <span className="inline-flex gap-2 text-sm text-muted-foreground">
              <Eye size={20} />
              View details
            </span>
          </NextLink>
        </div>
      </div>
    </div>
  )
}
