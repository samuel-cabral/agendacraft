import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'

import { api } from '@/lib/axios'

interface IEvent {
  id: number
  name: string
  date: string
  description: string
  image: string
}

export async function fetchUsersByName() {
  const { data } = await api.get<IEvent[]>('/events')
  const events = data.map((event) => {
    return {
      ...event,
      date: format(new Date(event.date), 'MMMM dd, yyyy'),
    }
  })

  return events
}

export function useFetchUserByName() {
  return useQuery<IEvent[]>({
    queryKey: ['events'],
    queryFn: () => fetchUsersByName(),
    initialData: [],
  })
}
