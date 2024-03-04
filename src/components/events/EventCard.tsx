import Image from 'next/image'
import NextLink from 'next/link'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/axios'
import { IEvent } from '@/store'

export type EventCardProps = {
  event: IEvent
}

export function EventCard({ event }: EventCardProps) {
  async function handleDelete(id: number) {
    try {
      await api.delete(`events/${id}`)
      alert('Event deleted successfully')
    } catch (error) {
      console.error(error)
      alert('An error occurred while deleting the event')
    }
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-muted p-4 shadow-md">
      <Image
        src={event.image}
        alt={event.name}
        width={1000}
        height={1000}
        className="rounded-lg"
      />

      <h2 className="mb-2 text-xl font-bold text-foreground">{event.name}</h2>
      <p className="mb-2 text-muted-foreground">{event.date}</p>
      <p className="mb-4 font-light leading-tight text-foreground">
        {event.description}
      </p>
      <div className="flex items-center justify-between">
        <div>
          <Button className="mr-2">
            <NextLink href={`/events/${event.id}/edit`}>Edit</NextLink>
          </Button>
          <Button onClick={() => handleDelete(event.id)}>Delete</Button>
        </div>
        <NextLink href={`/events/${event.id}`}>View details</NextLink>
      </div>
    </div>
  )
}
