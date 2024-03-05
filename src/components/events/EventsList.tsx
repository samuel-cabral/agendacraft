'use client'

import { useEffect } from 'react'

import { useEventsStore } from '@/store'

import { EventCard } from './EventCard'
import { EventsListSkeleton } from './EventsListSkeleton'

export function EventsList() {
  const { events, fetchEvents, isLoading } = useEventsStore()

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  return (
    <>
      {isLoading && (
        <>
          <EventsListSkeleton />
          <EventsListSkeleton />
          <EventsListSkeleton />
        </>
      )}
      {events &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
    </>
  )
}
