import { EventForm } from '@/components/shared/EventForm'

export default function CreateEvent() {
  return (
    <div className="mx-auto flex w-1/2 flex-1 flex-col">
      <section className="mb-4 mt-5 flex items-center">
        <h1 className="text-3xl font-bold">Create Event</h1>
      </section>

      <section
        id="event-form-section"
        className="mt-5 flex items-center justify-center"
      >
        <EventForm />
      </section>
    </div>
  )
}
