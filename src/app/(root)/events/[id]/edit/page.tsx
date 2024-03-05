import { api } from '@/lib/axios'
import { IEvent } from '@/store'

import { EditEventForm } from './edit-event-form'

async function getEvent(id: string) {
  const response = await api.get<IEvent>(`events/${id}`)

  if (!response.data) {
    throw new Error('Failed to fetch event')
  }

  return response.data
}

interface EditEventProps {
  params: { id: string }
}

export default async function EditEvent({ params }: EditEventProps) {
  const event = await getEvent(params.id)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col justify-center">
      <section className="mb-4 mt-5 flex items-center">
        <h1 className="text-3xl font-bold">Edit Event</h1>
      </section>

      <section
        id="event-form-section"
        className="mt-5 flex items-center justify-center"
      >
        <EditEventForm event={event} />
      </section>
    </div>
  )
}
