'use client'

import { startOfDecade } from 'date-fns'
import { useTranslations } from 'next-intl'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import { FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { DatePicker } from './DatePicker'

export const eventFormSchema = z.object({
  eventName: z.string().min(1, 'Event name is required'),
  date: z.coerce.date().min(startOfDecade(new Date()), 'Date is required'),
  description: z
    .string()
    .min(1, 'Description must be a minimum of 1 character'),
})

export type EventFormData = z.infer<typeof eventFormSchema>

export function EventForm() {
  const t = useTranslations('CreateEvent')
  const eventForm = useFormContext<EventFormData>()

  const {
    register,
    formState: { errors },
  } = eventForm

  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <FormLabel className="text-xs md:text-sm" htmlFor="eventName">
          {t('name')}
        </FormLabel>
        <Input
          id="eventName"
          {...register('eventName')}
          placeholder={t('namePlaceholder')}
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
          label={t('date')}
          placeholder={t('datePlaceholder')}
          error={errors.date}
          className={cn(
            { 'border-red-500': errors.date },
            'w-full border-collapse border',
          )}
        />
      </div>

      <div className="mt-4 flex-1 space-y-2">
        <FormLabel className="text-xs md:text-sm" htmlFor="description">
          {t('description')}
        </FormLabel>
        <Textarea
          id="description"
          placeholder={t('descriptionPlaceholder')}
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
