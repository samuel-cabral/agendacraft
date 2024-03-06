'use client'

import { Loader, Trash2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { IEvent, useEventsStore } from '@/store'

interface EventDeletionDialogProps {
  event: IEvent
}

export function EventDeletionDialog({ event }: EventDeletionDialogProps) {
  const t = useTranslations('EventDeletionDialog')
  const { deleteEvent, isLoading } = useEventsStore()

  async function handleDeleteEvent() {
    await deleteEvent(event.id)

    toast.success(t('deletionSuccess', { eventName: event.name }))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'destructive'}
          className="gap-2"
          aria-label="Delete event"
        >
          <span className="hidden md:inline-block">{t('delete')}</span>
          <Trash2 size={14} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>
            {t('message', { eventName: event.name })}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {t('cancel')}
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDeleteEvent}
            disabled={isLoading}
            className="w-full  sm:w-20"
          >
            {isLoading ? (
              <Loader size={14} className="animate-spin" />
            ) : (
              t('delete')
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
