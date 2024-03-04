import { create } from 'zustand'

import { api } from '@/lib/axios'

export interface IEvent {
  id: number
  name: string
  date: string
  description: string
  image: string
}

type EventsState = {
  events: IEvent[]
  loading: boolean
  error: string | null
  fetchEvents: () => void
  addEvent: (event: IEvent) => void
  editEvent: (event: IEvent) => void
  deleteEvent: (id: number) => void
}

export const useEventsStore = create<EventsState>((set) => ({
  events: [],
  loading: false,
  error: null,
  fetchEvents: async () => {
    set({ loading: true })

    try {
      const response = await api.get('events')

      console.log(response.data)

      if (!response.data) {
        throw new Error('Failed to fetch events')
      }

      const events = await response.data

      set({ events, loading: false })
    } catch (error) {
      console.error('error on fetch events', error)
      if (error instanceof Error) set({ error: error.message, loading: false })
      else set({ error: 'An error occurred', loading: false })
    }
  },
  addEvent: (event) => {
    set((state) => ({ events: [...state.events, event] }))
  },
  editEvent: (event) => {
    set((state) => ({
      events: state.events.map((e) => (e.id === event.id ? event : e)),
    }))
  },
  deleteEvent: (id) => {
    set((state) => ({
      events: state.events.filter((e) => e.id !== id),
    }))
  },
}))
