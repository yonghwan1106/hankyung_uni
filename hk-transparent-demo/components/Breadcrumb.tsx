'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

const pathMapping: Record<string, string> = {
  'dashboard': '투명성 대시보드',
  'budget': '예산',
  'research': '연구성과',
  'students': '학생',
  'community': '지역기여',
  'environment': '환경·ESG',
  'overview': '통합 KPI',
  'participate': '시민 참여',
  'vote': '우선순위 투표',
  'qna': 'Q&A',
  'ideas': '아이디어 제안',
  'reports': '정기 보고',
  'monthly': '월간 리포트',
  'quarterly': '분기별 리포트',
  'annual': '연간 리포트',
  'compare': '대학 비교',
}

export default function Breadcrumb() {
  const pathname = usePathname()

  // Don't show breadcrumb on home page
  if (pathname === '/') return null

  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: '홈', href: '/' }
  ]

  // Build breadcrumb path
  let currentPath = ''
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = pathMapping[segment] || segment
    breadcrumbItems.push({
      label,
      href: currentPath
    })
  })

  return (
    <nav aria-label="Breadcrumb" className="bg-white/80 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1
            const isFirst = index === 0

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                )}
                {isLast ? (
                  <span className="font-bold text-stone-900 flex items-center gap-2">
                    {isFirst && <Home className="w-4 h-4" />}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-stone-600 hover:text-blue-600 transition-colors flex items-center gap-2 hover:underline"
                  >
                    {isFirst && <Home className="w-4 h-4" />}
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
