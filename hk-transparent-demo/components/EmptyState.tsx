'use client'

import { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
}

export default function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="bg-white shadow-lg p-12 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon className="w-10 h-10 text-stone-400" />
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-600 mb-6">{description}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-bold transition-colors rounded"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  )
}
