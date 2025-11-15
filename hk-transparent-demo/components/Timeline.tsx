'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, TrendingUp, ExternalLink } from 'lucide-react'

interface TimelineEvent {
  id: string
  date: string
  category: string
  type: string
  title: string
  description: string
  icon: string
  color: string
  importance: 'high' | 'medium' | 'low'
  link?: string
  budget?: number
  amount?: number
  votes?: number
  participants?: number
  views?: number
  stats?: Record<string, any>
  increase?: number
}

interface TimelineProps {
  events: TimelineEvent[]
}

const categories = [
  { id: 'all', name: '전체', color: '#57534e' },
  { id: 'budget', name: '예산', color: '#2563eb' },
  { id: 'research', name: '연구', color: '#16a34a' },
  { id: 'students', name: '학생', color: '#f97316' },
  { id: 'community', name: '지역기여', color: '#9333ea' },
  { id: 'environment', name: '환경', color: '#16a34a' },
  { id: 'transparency', name: '투명성', color: '#0891b2' },
]

export default function Timeline({ events }: TimelineProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      year: date.getFullYear(),
      month: String(date.getMonth() + 1).padStart(2, '0'),
      day: String(date.getDate()).padStart(2, '0'),
      display: `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`,
    }
  }

  const formatAmount = (amount: number) => {
    if (amount >= 100000000) {
      return `${(amount / 100000000).toFixed(1)}억원`
    } else if (amount >= 10000) {
      return `${(amount / 10000).toFixed(0)}만원`
    }
    return `${amount.toLocaleString()}원`
  }

  return (
    <div className="space-y-8">
      {/* Category filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 font-bold transition-all ${
              selectedCategory === category.id
                ? 'bg-stone-900 text-white scale-105'
                : 'bg-white text-stone-700 hover:bg-stone-100'
            } shadow-md hover:shadow-lg rounded`}
            style={{
              borderLeft: selectedCategory === category.id ? `4px solid ${category.color}` : undefined,
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-green-600 to-orange-600 opacity-20"></div>

        {/* Events */}
        <div className="space-y-12">
          {filteredEvents.map((event, index) => {
            const dateInfo = formatDate(event.date)
            const isLeft = index % 2 === 0

            return (
              <div
                key={event.id}
                className={`relative flex items-start ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                {/* Date badge (desktop center) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.icon}
                  </div>
                </div>

                {/* Mobile date badge */}
                <div className="md:hidden flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.icon}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">{dateInfo.display}</span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 ${
                    isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  } w-full md:w-5/12`}
                >
                  <div
                    className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${
                      event.importance === 'high' ? 'hover:scale-105' : ''
                    }`}
                    style={{ borderLeftColor: event.color }}
                  >
                    {/* Desktop date */}
                    <div className="hidden md:flex items-center gap-2 text-sm text-stone-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="font-bold">{dateInfo.display}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-stone-900 mb-3 flex items-start gap-2">
                      {event.importance === 'high' && (
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold flex-shrink-0">
                          중요
                        </span>
                      )}
                      <span>{event.title}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-stone-700 mb-4 leading-relaxed">{event.description}</p>

                    {/* Meta information */}
                    <div className="flex flex-wrap gap-3 text-sm">
                      {event.budget && (
                        <div className="bg-blue-50 px-3 py-1 rounded border-l-2 border-blue-600">
                          <span className="text-blue-900 font-bold">예산: {formatAmount(event.budget)}</span>
                        </div>
                      )}
                      {event.amount && (
                        <div className="bg-green-50 px-3 py-1 rounded border-l-2 border-green-600">
                          <span className="text-green-900 font-bold">금액: {formatAmount(event.amount)}</span>
                        </div>
                      )}
                      {event.votes && (
                        <div className="bg-purple-50 px-3 py-1 rounded border-l-2 border-purple-600">
                          <span className="text-purple-900 font-bold">투표: {event.votes.toLocaleString()}명</span>
                        </div>
                      )}
                      {event.participants && (
                        <div className="bg-orange-50 px-3 py-1 rounded border-l-2 border-orange-600">
                          <span className="text-orange-900 font-bold">참여: {event.participants.toLocaleString()}명</span>
                        </div>
                      )}
                      {event.increase !== undefined && (
                        <div className="bg-green-50 px-3 py-1 rounded border-l-2 border-green-600 flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-green-900 font-bold">+{event.increase}%</span>
                        </div>
                      )}
                    </div>

                    {/* Link */}
                    {event.link && (
                      <Link
                        href={event.link}
                        className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm"
                      >
                        자세히 보기 <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}

                    {/* Type badge */}
                    <div className="mt-4 flex gap-2">
                      <span className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded font-bold">
                        {event.type === 'milestone' && '마일스톤'}
                        {event.type === 'achievement' && '성과'}
                        {event.type === 'event' && '이벤트'}
                        {event.type === 'decision' && '결정'}
                      </span>
                      <span className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded font-bold">
                        {categories.find(c => c.id === event.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block flex-1 w-5/12"></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Empty state */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12 bg-stone-50">
          <p className="text-stone-600 text-lg">해당 카테고리의 이벤트가 없습니다.</p>
        </div>
      )}
    </div>
  )
}
