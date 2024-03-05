'use client'

import { Suspense, useEffect } from 'react'

import { useEventsStore } from '@/store'

import { EventCard } from './EventCard'

export function EventsList() {
  const { events, fetchEvents } = useEventsStore()

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  return (
    <Suspense fallback={<div>Loading events...</div>}>
      {events &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
    </Suspense>
  )
}
