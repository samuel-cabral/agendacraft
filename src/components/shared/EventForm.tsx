'use client'

import { startOfDay } from 'date-fns'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import { FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { DatePicker } from './DatePicker'

export const eventFormSchema = z.object({
  eventName: z.string().min(1, 'Event name is required'),
  date: z.coerce.date().min(startOfDay(new Date()), 'Date is required'),
  description: z
    .string()
    .min(1, 'Description must be a minimum of 1 character'),
})

export type EventFormData = z.infer<typeof eventFormSchema>

export function EventForm() {
  const eventForm = useFormContext<EventFormData>()

  const {
    register,
    formState: { errors },
  } = eventForm

  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <FormLabel className="text-xs md:text-sm" htmlFor="eventName">
          Event Name
        </FormLabel>
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
        <DatePicker
          name="date"
          label="Event date"
          placeholder="Select a date"
          error={errors.date}
          className={cn(
            { 'border-red-500': errors.date },
            'w-full border-collapse border',
          )}
        />
      </div>

      <div className="mt-4 flex-1 space-y-2">
        <FormLabel className="text-xs md:text-sm" htmlFor="description">
          Description
        </FormLabel>
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
    </>
  )
}
