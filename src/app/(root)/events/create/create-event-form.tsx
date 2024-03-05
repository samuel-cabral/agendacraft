'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  EventForm,
  EventFormData,
  eventFormSchema,
} from '@/components/shared/EventForm'
import { Button } from '@/components/ui/button'
import { useEventsStore } from '@/store'

export function CreateEventForm() {
  const { isLoading, addEvent } = useEventsStore()

  const createEventForm = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      eventName: '',
      description: '',
    },
  })

  const { handleSubmit } = createEventForm

  async function handleCreateEvent(data: EventFormData) {
    const { eventName, date, description } = data

    const payload = {
      name: eventName,
      date: date.toISOString(),
      description,
      image: 'https://source.unsplash.com/random/800x600',
    }

    await addEvent(payload)

    toast.success('Event has been created', {
      description: format(date, 'MMMM dd, yyyy'),
      closeButton: true,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateEvent)}
      className="flex w-full flex-col gap-6"
    >
      <FormProvider {...createEventForm}>
        <EventForm />
      </FormProvider>
      <Button type="submit" disabled={isLoading}>
        Add Event
      </Button>
    </form>
  )
}
