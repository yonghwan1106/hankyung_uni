'use client'

import { useState, useEffect } from 'react'
import { budgetData } from '@/lib/mockData'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, DollarSign, Percent } from 'lucide-react'
import Skeleton from '@/components/Skeleton'
import { useCountUp } from '@/hooks/useCountUp'

export default function BudgetDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [liveExecutionRate, setLiveExecutionRate] = useState(budgetData.executionRate)
  const [liveSpent, setLiveSpent] = useState(budgetData.totalSpent)

  // Count up animation for initial load
  const animatedBudget = useCountUp(budgetData.totalBudget / 100000000, 1500)
  const animatedSpent = useCountUp(liveSpent / 100000000, 1500)
  const animatedRate = useCountUp(liveExecutionRate, 1500)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Real-time budget execution simulation (increases every 5 seconds)
  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      // Simulate budget execution increase (0.01-0.05% per update)
      const increase = Math.random() * 0.04 + 0.01
      setLiveExecutionRate(prev => {
        const newRate = Math.min(prev + increase, 100)
        const newSpent = (newRate / 100) * budgetData.totalBudget
        setLiveSpent(newSpent)
        return newRate
      })
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">예산 투명성 대시보드</h1>
          <p className="text-xl text-stone-600">
            한경국립대학교의 예산 집행 현황을 실시간으로 확인하세요
          </p>
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-blue-600">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-12 h-12 text-blue-600" />
            </div>
            <div className="text-sm font-bold text-stone-600 mb-2">총 예산</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedBudget.toFixed(0)}억원
            </div>
            <div className="text-sm text-stone-500">2024년 연간 예산</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-green-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-12 h-12 text-green-600" />
            </div>
            <div className="text-sm font-bold text-stone-600 mb-2">집행 금액</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {(liveSpent / 100000000).toFixed(1)}억원
            </div>
            <div className="text-sm text-stone-500">실시간 업데이트</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-orange-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <Percent className="w-12 h-12 text-orange-600" />
            </div>
            <div className="text-sm font-bold text-stone-600 mb-2">집행률</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {liveExecutionRate.toFixed(2)}%
            </div>
            <div className="text-sm text-stone-500">실시간 업데이트</div>
          </div>
        </div>

        {/* 월별 예산 집행 추이 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">월별 예산 집행 추이</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={budgetData.monthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="month" stroke="#57534e" />
              <YAxis stroke="#57534e" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fafaf9',
                  border: '1px solid #e7e5e4',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="budget" fill="#78716c" name="예산" />
              <Bar dataKey="spent" fill="#2563eb" name="집행" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 분야별 예산 배분 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">분야별 예산 배분</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetData.categories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name} ${entry.rate}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {budgetData.categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fafaf9',
                    border: '1px solid #e7e5e4',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => `${(value / 100000000).toFixed(1)}억원`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">분야별 상세 내역</h2>
            <div className="space-y-4">
              {budgetData.categories.map((category) => (
                <div key={category.name} className="border-b border-stone-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-stone-900">{category.name}</span>
                    <span className="text-lg font-bold text-stone-900">
                      {(category.amount / 100000000).toFixed(1)}억원
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${category.rate}%`,
                        backgroundColor: category.color,
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-stone-500 mt-1">{category.rate}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 주요 집행 내역 */}
        <div className="bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">주요 집행 내역</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {budgetData.highlights.map((item, index) => (
              <div key={index} className="bg-stone-50 p-6 border-l-4 border-blue-600">
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <div className="text-2xl font-black text-blue-600 mb-2">
                  {(item.amount / 100000000).toFixed(1)}억원
                </div>
                <div className="text-sm text-stone-600">
                  {'items' in item && `${item.items}건`}
                  {'students' in item && `${item.students}명`}
                  {'desc' in item && item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 집행률 추이 */}
        <div className="bg-white p-8 shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">월별 집행률 추이</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={budgetData.monthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="month" stroke="#57534e" />
              <YAxis stroke="#57534e" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fafaf9',
                  border: '1px solid #e7e5e4',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#16a34a"
                strokeWidth={3}
                name="집행률 (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 설명 */}
        <div className="mt-8 bg-blue-50 p-6 border-l-4 border-blue-600">
          <h3 className="font-bold text-blue-900 mb-2">💡 예산 투명성 안내</h3>
          <p className="text-sm text-stone-700">
            이 대시보드는 한경국립대학교의 예산 집행 현황을 실시간으로 공개합니다.
            모든 데이터는 재무회계 시스템과 자동 연동되며, 매월 5일 전월 데이터가
            업데이트됩니다. 구체적인 집행 내역에 대한 문의는{' '}
            <span className="font-bold">시민 Q&A</span>를 이용해주세요.
          </p>
        </div>
        </>
        )}
      </div>
    </div>
  )
}
