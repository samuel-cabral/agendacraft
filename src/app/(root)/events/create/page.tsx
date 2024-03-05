import { CreateEventForm } from './create-event-form'

export default function CreateEvent() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col justify-center">
      <section className="mb-4 mt-5 flex items-center">
        <h1 className="text-3xl font-bold">Create Event</h1>
      </section>

      <section
        id="event-form-section"
        className="mt-5 flex items-center justify-center"
      >
        <CreateEventForm />
      </section>
    </div>
  )
}
