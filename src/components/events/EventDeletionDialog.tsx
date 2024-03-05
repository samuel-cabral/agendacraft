import { Trash2 } from 'lucide-react'
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
  const { deleteEvent, isLoading } = useEventsStore()

  async function handleDeleteEvent() {
    await deleteEvent(event.id)

    toast.success(`Event "${event.name}" has been deleted!`)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'destructive'}
          className="gap-2"
          aria-label="Delete event"
        >
          <span className="hidden md:inline-block">Delete</span>
          <Trash2 size={14} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Event</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the event &quot;{event.name}&quot;?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDeleteEvent}
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
