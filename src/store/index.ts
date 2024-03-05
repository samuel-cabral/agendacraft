import { create } from 'zustand'

import { api } from '@/lib/axios'

export interface IEvent {
  id: string
  name: string
  date: string
  description: string
  image: string
}

type EventsState = {
  events: IEvent[]
  isLoading: boolean
  error: string | null
  fetchEvents: () => Promise<void>
  getEvent: (id: string) => IEvent | undefined
  addEvent: (payload: Omit<IEvent, 'id'>) => Promise<void>
  editEvent: (event: IEvent) => void
  deleteEvent: (id: string) => void
}

export const useEventsStore = create<EventsState>((set, get) => ({
  events: [],
  isLoading: false,
  error: null,
  fetchEvents: async () => {
    set({ isLoading: true })

    try {
      const response = await api.get('events')

      if (!response.data) {
        throw new Error('Failed to fetch events')
      }

      const events = await response.data

      set({ events, isLoading: false })
    } catch (error) {
      console.error('error on fetch events', error)
      if (error instanceof Error)
        set({ error: error.message, isLoading: false })
      else set({ error: 'An error occurred', isLoading: false })
    }
  },
  getEvent: (id) => {
    return get().events.find((event) => event.id === id)
  },

  addEvent: async (payload) => {
    const response = await api.post<IEvent>('events', payload)

    if (!response.data) {
      throw new Error('Failed to add event')
    }

    const event = response.data

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
