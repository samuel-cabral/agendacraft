export default function Loading() {
  // return a loading hero skeleton
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-4 h-20 w-20 animate-pulse rounded-full bg-gray-300" />
      <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
      <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
      <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
      <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />

      {/* a grid skeleton with 6 cards below */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div className="flex flex-col gap-2 rounded-lg bg-gray-300 shadow-md">
          <div className="h-40 rounded-t-lg bg-gray-300" />
          <div className="p-4">
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-gray-300 shadow-md">
          <div className="h-40 rounded-t-lg bg-gray-300" />
          <div className="p-4">
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-gray-300 shadow-md">
          <div className="h-40 rounded-t-lg bg-gray-300" />
          <div className="p-4">
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-gray-300 shadow-md">
          <div className="h-40 rounded-t-lg bg-gray-300" />
          <div className="p-4">
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
            <div
              className="/2 h-4
            w-1 animate-pulse rounded-full bg-gray-300"
            />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
}
