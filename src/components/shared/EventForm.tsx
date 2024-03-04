'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Textarea } from '@/components/ui/textarea'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { DatePicker } from './DatePicker'

const schema = z.object({
  eventName: z.string().min(1),
  date: z.date(),
  description: z.string().min(1),
})

type EventFormData = z.infer<typeof schema>

export function EventForm() {
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

    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateEvent)}
      className="flex w-full flex-col gap-6"
    >
      <div className="w-full space-y-2">
        <Label htmlFor="eventName">Event Name</Label>
        <Input
          id="eventName"
          {...register('eventName', { required: true })}
          placeholder="Your event name"
          className="w-full"
        />
        {errors.eventName && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="space-y-2">
        <FormProvider {...eventForm}>
          <DatePicker
            name="date"
            label="Pick a date"
            error={errors.date}
            className="w-full"
          />
        </FormProvider>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register('description', { required: true })}
        />
        {errors.description && <span>This field is required</span>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Add Event
      </Button>
    </form>
  )
}
