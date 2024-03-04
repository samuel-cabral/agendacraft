import { EventForm } from '@/components/shared/EventForm'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function CreateEvent() {
  return (
    <main className="mx-auto max-w-lg">
      <section className="mb-4 mt-5 flex items-center justify-center px-24 py-0">
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/samuel-cabral.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <h2 className="mt-2 text-xl font-bold leading-normal">
            Samuel Cabral
          </h2>
          <p className="text-x-foreground text-sm opacity-50">
            Front-end Developer
          </p>
        </div>
      </section>

      <section
        id="event-form-section"
        className="mt-5 flex items-center justify-center"
      >
        <EventForm />
      </section>
    </main>
  )
}
