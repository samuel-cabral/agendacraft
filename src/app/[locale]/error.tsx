'use client' // Error components must be Client Components

import { ServerCrash } from 'lucide-react'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="mt-8 flex w-full flex-col items-center gap-6 text-center">
      <ServerCrash className="size-1/2 stroke-1 text-muted-foreground" />
      <h2 className="text-2xl">Something went wrong!</h2>

      <div>
        <p className="text-muted-foreground">
          We are very sorry! Failed to load your events.
        </p>

        <p className="text-muted-foreground">
          Please try again later or click the button below to try again.
        </p>
      </div>

      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
