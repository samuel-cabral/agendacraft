'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { useEventsStore } from '@/store'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { DatePicker } from './DatePicker'

const schema = z.object({
  eventName: z.string().min(1, 'Event name is required'),
  date: z
    .date()
    .min(new Date(), 'Date must be in the future')
    .transform((val) => new Date(val))
    .default(() => new Date()),
  description: z
    .string()
    .min(1, 'Description must be a minimum of 1 character'),
})

type EventFormData = z.infer<typeof schema>

export function EventForm() {
  const { toast } = useToast()

  const { addEvent } = useEventsStore()

  const eventForm = useForm<EventFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      eventName: '',
      date: new Date(),
      description: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = eventForm

  async function handleCreateEvent(data: EventFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const { eventName, date, description } = data

    console.log(data)
    addEvent({
      id: Date.now(),
      name: eventName,
      date: date.toISOString(),
      description,
      image: 'https://source.unsplash.com/random/800x600',
    })

    toast({
      title: `Scheduled: ${eventName}`,
      description: format(date, 'MMMM dd, yyyy'),
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateEvent)}
      className="flex w-full flex-col gap-6"
    >
      <div className="flex h-32 items-start justify-center gap-3">
        <div className="flex flex-1 flex-col gap-4">
          <Label htmlFor="eventName">Event Name</Label>
          <Input
            id="eventName"
            {...register('eventName')}
            placeholder="Your event name"
            className={cn(
              { 'border-red-500': errors.eventName },
              'border-collapse border',
            )}
          />
          {errors.eventName && (
            <span className="text-sm text-red-500">
              {errors.eventName.message}
            </span>
          )}
        </div>

        <div>
          <FormProvider {...eventForm}>
            <DatePicker
              name="date"
              label="Pick a date"
              error={errors.date}
              className="w-[284px]"
            />
          </FormProvider>
        </div>
      </div>

      <div className="mt-4 flex-1 space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Tell us about your event..."
          {...register('description', { required: true })}
          className={errors.description ? 'border-red-500' : ''}
        />
        {errors.description && (
          <span className="text-sm text-red-500">
            {errors.description.message}
          </span>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Add Event
      </Button>
    </form>
  )
}
