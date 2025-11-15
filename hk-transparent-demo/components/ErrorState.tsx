'use client'

import { AlertCircle, RefreshCw } from 'lucide-react'

interface ErrorStateProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export default function ErrorState({
  title = '문제가 발생했습니다',
  message = '데이터를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  onRetry
}: ErrorStateProps) {
  return (
    <div className="bg-white shadow-lg p-12 text-center border-l-8 border-red-600">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-600 mb-6">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-bold transition-all hover:scale-105 active:scale-95 rounded flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-5 h-5" />
            다시 시도
          </button>
        )}
      </div>
    </div>
  )
}
