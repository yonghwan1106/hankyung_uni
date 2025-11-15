export default function Skeleton() {
  return (
    <div className="animate-pulse">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 shadow-lg border-l-8 border-stone-300">
            <div className="h-4 bg-stone-200 rounded w-1/2 mb-3"></div>
            <div className="h-10 bg-stone-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>

      {/* Chart Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white p-8 shadow-lg">
            <div className="h-6 bg-stone-200 rounded w-1/3 mb-6"></div>
            <div className="h-64 bg-stone-100 rounded"></div>
          </div>
        ))}
      </div>

      {/* Full Width Chart */}
      <div className="bg-white p-8 shadow-lg">
        <div className="h-6 bg-stone-200 rounded w-1/4 mb-6"></div>
        <div className="h-80 bg-stone-100 rounded"></div>
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-6 bg-stone-200 rounded w-16"></div>
            <div className="h-6 bg-stone-200 rounded w-20"></div>
          </div>
          <div className="h-7 bg-stone-200 rounded w-3/4 mb-3"></div>
          <div className="h-4 bg-stone-100 rounded w-full mb-2"></div>
          <div className="h-4 bg-stone-100 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  )
}

export function StatsSkeleton() {
  return (
    <div className="animate-pulse grid md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white p-6 shadow-lg border-l-8 border-stone-300">
          <div className="h-4 bg-stone-200 rounded w-1/2 mb-3"></div>
          <div className="h-10 bg-stone-200 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  )
}
