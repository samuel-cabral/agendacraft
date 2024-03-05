import { format } from 'date-fns'
import { Eye, Pencil } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'

import { Button } from '@/components/ui/button'
import { IEvent } from '@/store'

import { EventDeletionDialog } from './EventDeletionDialog'

export type EventCardProps = {
  event: IEvent
}

export function EventCard({ event }: EventCardProps) {
  const formattedEventDate = format(new Date(event.date), 'MMMM dd, yyyy')

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-muted shadow-md">
      <Image
        src={event.image}
        alt={event.name}
        width={1000}
        height={1000}
        className="hidden rounded-t-lg object-cover md:block"
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
                className="mr-2 gap-2"
                variant={'outline'}
                aria-label="open edit event page"
              >
                <span className="hidden md:inline-block">Edit</span>
                <Pencil size={14} />
              </Button>
            </NextLink>

            <EventDeletionDialog event={event} />
          </div>
          <NextLink href={`/events/${event.id}`}>
            <Button variant="ghost" aria-label="View event details">
              <p className="inline-flex gap-2 text-sm text-muted-foreground">
                <span className="hidden md:inline-block">View details</span>
                <Eye
                  size={20}
                  className="text-muted-foreground transition duration-150 ease-in-out hover:text-foreground"
                />
              </p>
            </Button>
          </NextLink>
        </div>
      </div>
    </div>
  )
}
