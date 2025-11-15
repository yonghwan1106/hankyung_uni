'use client'

import { useState, useEffect } from 'react'
import { environmentData } from '@/lib/mockData'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Leaf, Zap, Recycle, TreePine } from 'lucide-react'
import Skeleton from '@/components/Skeleton'
import { useCountUp } from '@/hooks/useCountUp'

export default function EnvironmentDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [liveMetrics, setLiveMetrics] = useState({
    renewableEnergy: environmentData.energy.renewable,
    carbonReduction: Math.abs(environmentData.energy.reduction),
    recyclingRate: environmentData.waste.recyclingRate,
    greenArea: environmentData.green.area,
  })

  // Count up animations for initial load
  const animatedRenewable = useCountUp(liveMetrics.renewableEnergy * 10, 1500) / 10
  const animatedReduction = useCountUp(liveMetrics.carbonReduction * 10, 1500) / 10
  const animatedRecycling = useCountUp(liveMetrics.recyclingRate * 10, 1500) / 10
  const animatedGreen = useCountUp(liveMetrics.greenArea / 1000, 1500)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Real-time environment metrics simulation (increases every 12 seconds)
  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        renewableEnergy: Math.min(prev.renewableEnergy + (Math.random() * 0.1), 100),
        carbonReduction: Math.min(prev.carbonReduction + (Math.random() * 0.05), 100),
        recyclingRate: Math.min(prev.recyclingRate + (Math.random() * 0.1), 100),
        greenArea: prev.greenArea + (Math.random() > 0.9 ? Math.floor(Math.random() * 100) : 0),
      }))
    }, 12000) // Update every 12 seconds

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">환경·ESG 대시보드</h1>
          <p className="text-xl text-stone-600">
            지속가능한 캠퍼스를 위한 환경 경영
          </p>
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-teal-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Zap className="w-12 h-12 text-teal-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">재생에너지</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedRenewable.toFixed(1)}%
            </div>
            <div className="text-sm text-green-600 font-bold">▲ 3.2%p 증가</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-green-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">탄소 감축</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedReduction.toFixed(1)}%
            </div>
            <div className="text-sm text-green-600 font-bold">전년 대비 감축</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-blue-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Recycle className="w-12 h-12 text-blue-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">재활용률</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedRecycling.toFixed(1)}%
            </div>
            <div className="text-sm text-stone-500">전국 대학 평균 초과</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-orange-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <TreePine className="w-12 h-12 text-orange-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">녹지 면적</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedGreen.toFixed(0)}천
            </div>
            <div className="text-sm text-stone-500">m²</div>
          </div>
        </div>

        {/* 월별 에너지 사용량 및 탄소배출 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">월별 에너지 사용량 및 탄소배출</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={environmentData.energy.byMonth}>
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
                dataKey="usage"
                stroke="#2563eb"
                strokeWidth={3}
                name="에너지 사용량 (MWh)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="carbon"
                stroke="#f97316"
                strokeWidth={3}
                name="탄소배출 (tCO₂)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 폐기물 처리 현황 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">폐기물 유형별 비율</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={environmentData.waste.byType}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.type} (${entry.amount}톤)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {environmentData.waste.byType.map((entry, index) => (
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
            <h2 className="text-2xl font-bold text-stone-900 mb-6">폐기물 상세 통계</h2>
            <div className="space-y-4">
              {environmentData.waste.byType.map((item) => (
                <div key={item.type}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-stone-900">{item.type}</span>
                    <span className="text-lg font-bold text-stone-900">{item.amount}톤</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${(item.amount / environmentData.waste.total) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-stone-500 mt-1">
                    전체의 {((item.amount / environmentData.waste.total) * 100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 재활용 현황 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">재활용 현황</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-8 border-l-4 border-blue-600">
              <div className="text-sm font-bold text-blue-900 mb-2">총 폐기물</div>
              <div className="text-5xl font-black text-blue-600 mb-2">
                {environmentData.waste.total}
                <span className="text-2xl">톤</span>
              </div>
              <div className="text-sm text-stone-600">2024년 상반기</div>
            </div>
            <div className="bg-green-50 p-8 border-l-4 border-green-600">
              <div className="text-sm font-bold text-green-900 mb-2">재활용</div>
              <div className="text-5xl font-black text-green-600 mb-2">
                {environmentData.waste.recycling}
                <span className="text-2xl">톤</span>
              </div>
              <div className="text-sm text-stone-600">분리수거 완료</div>
            </div>
            <div className="bg-teal-50 p-8 border-l-4 border-teal-600">
              <div className="text-sm font-bold text-teal-900 mb-2">재활용률</div>
              <div className="text-5xl font-black text-teal-600 mb-2">
                {environmentData.waste.recyclingRate}
                <span className="text-2xl">%</span>
              </div>
              <div className="text-sm text-stone-600">목표 70% 달성 임박</div>
            </div>
          </div>
        </div>

        {/* 녹지 및 생태 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">캠퍼스 녹지 및 생태 다양성</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-8 text-center">
              <TreePine className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <div className="text-sm font-bold text-green-900 mb-2">녹지 면적</div>
              <div className="text-5xl font-black text-green-600 mb-2">
                {(environmentData.green.area / 1000).toFixed(0)}
              </div>
              <div className="text-sm text-stone-600">천 m²</div>
            </div>
            <div className="bg-teal-50 p-8 text-center">
              <TreePine className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <div className="text-sm font-bold text-teal-900 mb-2">식재 수목</div>
              <div className="text-5xl font-black text-teal-600 mb-2">
                {environmentData.green.trees.toLocaleString()}
              </div>
              <div className="text-sm text-stone-600">그루</div>
            </div>
            <div className="bg-blue-50 p-8 text-center">
              <Leaf className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <div className="text-sm font-bold text-blue-900 mb-2">식물 종</div>
              <div className="text-5xl font-black text-blue-600 mb-2">
                {environmentData.green.species}
              </div>
              <div className="text-sm text-stone-600">종</div>
            </div>
          </div>
        </div>

        {/* ESG 종합 */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-12">
          <div className="text-center">
            <Leaf className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-black mb-4">환경 경영 목표</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-sm font-bold mb-2 text-teal-100">2025년 목표</div>
                <div className="text-4xl font-black mb-1">재생에너지 25%</div>
              </div>
              <div>
                <div className="text-sm font-bold mb-2 text-teal-100">2026년 목표</div>
                <div className="text-4xl font-black mb-1">탄소중립 30% 달성</div>
              </div>
              <div>
                <div className="text-sm font-bold mb-2 text-teal-100">2030년 목표</div>
                <div className="text-4xl font-black mb-1">탄소중립 캠퍼스</div>
              </div>
            </div>
          </div>
        </div>

        {/* 안내 */}
        <div className="mt-8 bg-green-50 p-6 border-l-4 border-green-600">
          <h3 className="font-bold text-green-900 mb-2">💡 환경·ESG 안내</h3>
          <p className="text-sm text-stone-700">
            이 대시보드는 한경국립대학교의 환경 경영 데이터를 실시간으로 공개합니다.
            에너지 데이터는 스마트 계량기와 자동 연동되며, 폐기물 데이터는 월간 집계됩니다.
            캠퍼스 환경 개선 아이디어는 <span className="font-bold">아이디어 제안</span> 메뉴를
            이용해주세요.
          </p>
        </div>
        </>
        )}
      </div>
    </div>
  )
}
