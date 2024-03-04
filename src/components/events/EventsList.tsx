'use client'

import { useEffect } from 'react'

import { useEventsStore } from '@/store'

import { EventCard } from './EventCard'

export function EventsList() {
  const { events, fetchEvents, loading } = useEventsStore()

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  console.log('🚀 ~ EventsList ~ events:', events)
  return (
    <>
      {loading && <p>Loading...</p>}
      {events &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
    </>
  )
}
