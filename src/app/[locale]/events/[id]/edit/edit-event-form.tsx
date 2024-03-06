'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format, startOfDay } from 'date-fns'
import { Loader } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  EventForm,
  EventFormData,
  eventFormSchema,
} from '@/components/shared/EventForm'
import { Button } from '@/components/ui/button'
import { IEvent, useEventsStore } from '@/store'

interface EditEventFormProps {
  event: IEvent
}

export function EditEventForm({ event }: EditEventFormProps) {
  const t = useTranslations('CreateEvent')

  const { updateEvent, isLoading } = useEventsStore()

  const editEventForm = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      eventName: event.name,
      date: startOfDay(new Date(event.date)),
      description: event?.description,
    },
  })

  const { handleSubmit } = editEventForm

  async function handleUpdateEvent(data: EventFormData) {
    const { eventName, date, description } = data

    if (!event) {
      throw new Error('Event not found')
    }

    const payload: IEvent = {
      id: event.id,
      name: eventName,
      date: date.toISOString(),
      description,
      image: event.image,
    }

    await updateEvent(payload)

    toast.success(t('updatedSuccess'), {
      closeButton: true,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdateEvent)}
      className="flex w-full flex-col gap-4"
    >
      <FormProvider {...editEventForm}>
        <EventForm />
      </FormProvider>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader size={14} className="animate-spin" /> : t('save')}
      </Button>
    </form>
  )
}
