'use client'

import { useState, useEffect } from 'react'
import { researchData } from '@/lib/mockData'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, FileText, Award, DollarSign } from 'lucide-react'
import Skeleton from '@/components/Skeleton'
import { useCountUp } from '@/hooks/useCountUp'

export default function ResearchDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [liveMetrics, setLiveMetrics] = useState({
    totalPapers: researchData.papers.total,
    patentsApplied: researchData.patents.applied,
    patentsTransferred: researchData.patents.transferred,
    techRevenue: researchData.patents.revenue,
  })

  // Count up animations for initial load
  const animatedPapers = useCountUp(liveMetrics.totalPapers, 1500)
  const animatedPatents = useCountUp(liveMetrics.patentsApplied, 1500)
  const animatedTransfers = useCountUp(liveMetrics.patentsTransferred, 1500)
  const animatedRevenue = useCountUp(liveMetrics.techRevenue / 100000000, 1500)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Real-time research metrics simulation (increases every 15 seconds)
  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        totalPapers: prev.totalPapers + (Math.random() > 0.5 ? 1 : 0),
        patentsApplied: prev.patentsApplied + (Math.random() > 0.7 ? 1 : 0),
        patentsTransferred: prev.patentsTransferred + (Math.random() > 0.9 ? 1 : 0),
        techRevenue: prev.techRevenue + (Math.random() > 0.8 ? Math.floor(Math.random() * 50000000) : 0),
      }))
    }, 15000) // Update every 15 seconds

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">연구 성과 대시보드</h1>
          <p className="text-xl text-stone-600">
            한경국립대학교의 연구 성과를 실시간으로 확인하세요
          </p>
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-green-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <FileText className="w-12 h-12 text-green-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">총 논문</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedPapers}
            </div>
            <div className="text-sm text-stone-500">2024년 상반기</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-blue-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">특허 출원</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedPatents}
            </div>
            <div className="text-sm text-stone-500">특허 등록 {researchData.patents.registered}건</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-orange-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">기술이전</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedTransfers}
            </div>
            <div className="text-sm text-stone-500">건</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-purple-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <DollarSign className="w-12 h-12 text-purple-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">기술이전 수익</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedRevenue.toFixed(1)}억
            </div>
            <div className="text-sm text-stone-500">2024년 상반기</div>
          </div>
        </div>

        {/* 월별 논문 발표 추이 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">월별 논문 발표 및 피인용 추이</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={researchData.papers.byMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="month" stroke="#57534e" />
              <YAxis yAxisId="left" stroke="#57534e" />
              <YAxis yAxisId="right" orientation="right" stroke="#57534e" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fafaf9',
                  border: '1px solid #e7e5e4',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="count"
                stroke="#2563eb"
                strokeWidth={3}
                name="논문 편수"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="citations"
                stroke="#16a34a"
                strokeWidth={3}
                name="피인용 횟수"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 분야별 논문 및 특허 현황 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">분야별 논문 현황</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={researchData.papers.byField}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name} (${entry.count})`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {researchData.papers.byField.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fafaf9',
                    border: '1px solid #e7e5e4',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">분야별 상세 통계</h2>
            <div className="space-y-4">
              {researchData.papers.byField.map((field) => (
                <div key={field.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-stone-900">{field.name}</span>
                    <span className="text-lg font-bold text-stone-900">{field.count}편</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${(field.count / researchData.papers.total) * 100}%`,
                        backgroundColor: field.color,
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-stone-500 mt-1">
                    전체의 {((field.count / researchData.papers.total) * 100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 특허 현황 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">특허 현황</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 border-l-4 border-blue-600">
              <div className="text-sm font-bold text-blue-900 mb-2">특허 출원</div>
              <div className="text-4xl font-black text-blue-600 mb-2">
                {researchData.patents.applied}
              </div>
              <div className="text-sm text-stone-600">건</div>
            </div>
            <div className="bg-green-50 p-6 border-l-4 border-green-600">
              <div className="text-sm font-bold text-green-900 mb-2">특허 등록</div>
              <div className="text-4xl font-black text-green-600 mb-2">
                {researchData.patents.registered}
              </div>
              <div className="text-sm text-stone-600">건</div>
            </div>
            <div className="bg-orange-50 p-6 border-l-4 border-orange-600">
              <div className="text-sm font-bold text-orange-900 mb-2">기술이전</div>
              <div className="text-4xl font-black text-orange-600 mb-2">
                {researchData.patents.transferred}
              </div>
              <div className="text-sm text-stone-600">건</div>
            </div>
          </div>
        </div>

        {/* 주요 연구 성과 하이라이트 */}
        <div className="bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">주요 기술이전 성과</h2>
          <div className="space-y-6">
            {researchData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-6 border-l-8 border-green-600"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900">{highlight.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-black text-green-600">
                      {(highlight.value / 100000000).toFixed(1)}억원
                    </div>
                    <div className="text-xs text-stone-500">기술이전료</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-bold text-stone-700">연구책임자:</span>{' '}
                    <span className="text-stone-600">{highlight.researcher}</span>
                  </div>
                  <div>
                    <span className="font-bold text-stone-700">협력기관:</span>{' '}
                    <span className="text-stone-600">{highlight.partner}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 안내 */}
        <div className="mt-8 bg-green-50 p-6 border-l-4 border-green-600">
          <h3 className="font-bold text-green-900 mb-2">💡 연구 성과 안내</h3>
          <p className="text-sm text-stone-700">
            이 대시보드는 한경국립대학교의 연구 성과를 실시간으로 공개합니다.
            논문 데이터는 SCOPUS, KCI 등 학술 데이터베이스와 연동되며, 특허 정보는
            특허청 시스템과 자동 연계됩니다. 주요 연구 성과에 대한 문의는{' '}
            <span className="font-bold">시민 Q&A</span>를 이용해주세요.
          </p>
        </div>
        </>
        )}
      </div>
    </div>
  )
}
