import { Suspense } from 'react'

async function fetchEvent(id: string) {
  const res = await fetch(
    `https://my-json-server.typicode.com/samuel-cabral/events-db/${id}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch event')
  }

  return res.json()
}

export default async function EventDetails({
  params: { id },
}: {
  params: { id: string }
}) {
  const event = await fetchEvent(id)

  return (
    <>
      <section>
        <Suspense fallback={<p>Loading...</p>}>
          <div className="flex flex-col">
            <h2 className="h3-bold">{event?.name}</h2>
            <p className="p-regular-16">Hosted by Samuel Cabral</p>
          </div>
        </Suspense>
      </section>
    </>
  )
}
