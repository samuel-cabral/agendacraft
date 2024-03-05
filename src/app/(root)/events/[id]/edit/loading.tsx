import { Skeleton } from '@/components/ui/skeleton'

export default function EditEventPageSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col justify-center">
      <section className="mb-4 mt-5 flex items-center">
        <Skeleton className="h-8 w-[250px]" />
      </section>

      <section
        id="event-form-section"
        className="mt-5 flex items-center justify-center"
      >
        <Skeleton className="h-96 w-full" />
      </section>
    </div>
  )
}
