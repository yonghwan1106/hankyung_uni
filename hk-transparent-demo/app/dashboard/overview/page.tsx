'use client'

import { useState, useEffect } from 'react'
import { kpiData, budgetData, researchData, studentData, communityData, environmentData, universityComparison, timelineData } from '@/lib/mockData'
import { BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Award, DollarSign, Target } from 'lucide-react'
import Skeleton from '@/components/Skeleton'
import Timeline from '@/components/Timeline'
import { useCountUp } from '@/hooks/useCountUp'

export default function OverviewDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [liveKPI, setLiveKPI] = useState({
    transparency: kpiData.overall.transparency,
    trust: kpiData.overall.trust,
    satisfaction: kpiData.overall.satisfaction,
    contribution: kpiData.overall.contribution,
  })

  // Count up animations for initial load
  const animatedTransparency = useCountUp(liveKPI.transparency * 10, 1500) / 10
  const animatedTrust = useCountUp(liveKPI.trust * 10, 1500) / 10
  const animatedSatisfaction = useCountUp(liveKPI.satisfaction * 10, 1500) / 10
  const animatedContribution = useCountUp(liveKPI.contribution * 10, 1500) / 10
  const animatedROI = useCountUp(kpiData.roi.ratio * 100, 1500) / 100

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Real-time KPI simulation (increases every 10 seconds)
  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      setLiveKPI(prev => ({
        transparency: Math.min(prev.transparency + (Math.random() * 0.02 + 0.01), 5.0),
        trust: Math.min(prev.trust + (Math.random() * 0.02 + 0.01), 5.0),
        satisfaction: Math.min(prev.satisfaction + (Math.random() * 0.02 + 0.01), 5.0),
        contribution: Math.min(prev.contribution + (Math.random() * 0.02 + 0.01), 5.0),
      }))
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [isLoading])

  // 레이더 차트용 데이터
  const radarData = [
    {
      subject: '투명성',
      score: kpiData.overall.transparency * 20,
      fullMark: 100,
    },
    {
      subject: '신뢰도',
      score: kpiData.overall.trust * 20,
      fullMark: 100,
    },
    {
      subject: '만족도',
      score: kpiData.overall.satisfaction * 20,
      fullMark: 100,
    },
    {
      subject: '기여도',
      score: kpiData.overall.contribution * 20,
      fullMark: 100,
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">통합 KPI 대시보드</h1>
          <p className="text-xl text-stone-600">
            한경국립대학교의 모든 지표를 한눈에
          </p>
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <>

        {/* Overall KPI */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-blue-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">투명성 지수</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedTransparency.toFixed(1)}
            </div>
            <div className="text-sm text-stone-500">5점 만점</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-green-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Award className="w-12 h-12 text-green-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">시민 신뢰도</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedTrust.toFixed(1)}
            </div>
            <div className="text-sm text-stone-500">5점 만점</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-orange-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">학생 만족도</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedSatisfaction.toFixed(1)}
            </div>
            <div className="text-sm text-stone-500">5점 만점</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-purple-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <DollarSign className="w-12 h-12 text-purple-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">지역 기여도</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedContribution.toFixed(1)}
            </div>
            <div className="text-sm text-stone-500">5점 만점</div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">종합 평가 레이더 차트</h2>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e7e5e4" />
              <PolarAngleAxis dataKey="subject" stroke="#57534e" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#57534e" />
              <Radar
                name="현재 점수"
                dataKey="score"
                stroke="#2563eb"
                fill="#2563eb"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fafaf9',
                  border: '1px solid #e7e5e4',
                  borderRadius: '8px',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 전년 대비 개선 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">전년 대비 개선 현황</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={kpiData.comparison.lastYear}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="metric" stroke="#57534e" />
              <YAxis domain={[0, 5]} stroke="#57534e" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fafaf9',
                  border: '1px solid #e7e5e4',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="last" fill="#78716c" name="2023년" />
              <Bar dataKey="current" fill="#16a34a" name="2024년" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 개선율 상세 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">개선율 상세</h2>
          <div className="space-y-4">
            {kpiData.comparison.lastYear.map((item) => {
              const improvement = ((item.current - item.last) / item.last * 100).toFixed(1)
              return (
                <div key={item.metric} className="border-b border-stone-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-stone-900">{item.metric}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-stone-500">
                        {item.last.toFixed(1)} → {item.current.toFixed(1)}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        +{improvement}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${(item.current / 5) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 주요 성과 요약 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-8 border-l-8 border-blue-600">
            <h3 className="text-xl font-bold text-blue-900 mb-4">예산 투명성</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-700">총 예산</span>
                <span className="font-bold text-stone-900">
                  {(budgetData.totalBudget / 100000000).toFixed(0)}억원
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700">집행률</span>
                <span className="font-bold text-blue-600">{budgetData.executionRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 border-l-8 border-green-600">
            <h3 className="text-xl font-bold text-green-900 mb-4">연구 성과</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-700">논문</span>
                <span className="font-bold text-stone-900">{researchData.papers.total}편</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700">특허</span>
                <span className="font-bold text-green-600">{researchData.patents.applied}건</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-8 border-l-8 border-orange-600">
            <h3 className="text-xl font-bold text-orange-900 mb-4">학생 성공</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-700">취업률</span>
                <span className="font-bold text-stone-900">{studentData.employment.overall}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700">창업</span>
                <span className="font-bold text-orange-600">{studentData.startups.total}개</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-8 border-l-8 border-purple-600">
            <h3 className="text-xl font-bold text-purple-900 mb-4">지역 기여</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-700">프로그램</span>
                <span className="font-bold text-stone-900">{communityData.programs.total}개</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700">경제 기여</span>
                <span className="font-bold text-purple-600">
                  {(communityData.economic.revenue / 100000000).toFixed(0)}억원
                </span>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 p-8 border-l-8 border-teal-600">
            <h3 className="text-xl font-bold text-teal-900 mb-4">환경 ESG</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-700">재생에너지</span>
                <span className="font-bold text-stone-900">{environmentData.energy.renewable}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700">재활용률</span>
                <span className="font-bold text-teal-600">{environmentData.waste.recyclingRate}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">투자 대비 가치</h3>
            <div className="text-center">
              <div className="text-6xl font-black mb-2">{animatedROI.toFixed(2)}배</div>
              <div className="text-sm text-white/80">납세자 1원당 창출 가치</div>
            </div>
          </div>
        </div>

        {/* ROI 상세 */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white p-12">
          <h2 className="text-3xl font-black mb-8 text-center">국민 투자 대비 경제적 가치</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-sm font-bold mb-2 text-stone-300">국민 투자 (세금)</div>
              <div className="text-4xl font-black mb-1">
                {(kpiData.roi.taxpayerInvestment / 100000000).toFixed(0)}억원
              </div>
              <div className="text-xs text-stone-400">연간 국가 지원금</div>
            </div>
            <div>
              <div className="text-sm font-bold mb-2 text-stone-300">창출된 경제 가치</div>
              <div className="text-4xl font-black mb-1 text-green-400">
                {(kpiData.roi.economicValue / 100000000).toFixed(0)}억원
              </div>
              <div className="text-xs text-stone-400">연구, 취업, 지역기여 포함</div>
            </div>
            <div>
              <div className="text-sm font-bold mb-2 text-stone-300">투자 대비 수익률</div>
              <div className="text-5xl font-black mb-1 text-blue-400">
                {kpiData.roi.ratio.toFixed(2)}배
              </div>
              <div className="text-xs text-stone-400">1원 투자 시 {kpiData.roi.ratio.toFixed(2)}원 창출</div>
            </div>
          </div>
        </div>

        {/* 전국 대학 비교 */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-12 mt-8">
          <h2 className="text-4xl font-black mb-4 text-center">🏆 전국 국립대학 비교</h2>
          <p className="text-center text-blue-100 mb-12 text-lg">
            한경국립대학교는 주요 지표에서 전국 국립대 중 상위권을 유지하고 있습니다
          </p>

          {/* 비교 차트들 */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* 예산 투명성 순위 */}
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">예산 투명성 지수</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={universityComparison.transparency} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis type="number" domain={[0, 100]} stroke="#e0e7ff" />
                  <YAxis type="category" dataKey="university" stroke="#e0e7ff" width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e3a8a',
                      border: '1px solid #3b82f6',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="score" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* 취업률 비교 */}
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">졸업생 취업률 (%)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={universityComparison.employment} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis type="number" domain={[70, 80]} stroke="#e0e7ff" />
                  <YAxis type="category" dataKey="university" stroke="#e0e7ff" width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e3a8a',
                      border: '1px solid #3b82f6',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="rate" fill="#f97316" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* 연구 성과 비교 */}
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">연간 논문 발표 수</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={universityComparison.researchPapers}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis dataKey="university" stroke="#e0e7ff" angle={-15} textAnchor="end" height={80} />
                  <YAxis stroke="#e0e7ff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e3a8a',
                      border: '1px solid #3b82f6',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="papers" fill="#16a34a" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* ESG 비교 */}
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">ESG 지표 비교</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={universityComparison.esgScore}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                  <XAxis dataKey="category" stroke="#e0e7ff" />
                  <YAxis stroke="#e0e7ff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e3a8a',
                      border: '1px solid #3b82f6',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="한경국립대" fill="#10b981" name="한경국립대" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="평균" fill="#6b7280" name="국립대 평균" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 하이라이트 */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <div className="text-5xl font-black mb-2 text-yellow-300">1위</div>
              <div className="text-lg">예산 투명성</div>
              <div className="text-blue-200 text-sm mt-1">전국 국립대 중</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <div className="text-5xl font-black mb-2 text-green-300">+4.3%p</div>
              <div className="text-lg">취업률 증가</div>
              <div className="text-blue-200 text-sm mt-1">국립대 평균 초과</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <div className="text-5xl font-black mb-2 text-teal-300">342편</div>
              <div className="text-lg">연간 논문</div>
              <div className="text-blue-200 text-sm mt-1">국립대 상위권</div>
            </div>
          </div>
        </div>

        {/* 타임라인 */}
        <div className="mt-16 bg-gradient-to-br from-stone-50 to-white p-12 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-stone-900 mb-4">📅 주요 활동 타임라인</h2>
            <p className="text-xl text-stone-600">
              한경국립대학교의 최근 성과와 이벤트를 시간 순으로 확인하세요
            </p>
          </div>
          <Timeline events={timelineData} />
        </div>

        {/* 안내 */}
        <div className="mt-8 bg-blue-50 p-6 border-l-4 border-blue-600">
          <h3 className="font-bold text-blue-900 mb-2">💡 통합 KPI 안내</h3>
          <p className="text-sm text-stone-700">
            이 대시보드는 한경국립대학교의 모든 주요 지표를 통합하여 보여줍니다.
            각 지표는 월별로 업데이트되며, 전년 대비 개선율을 실시간으로 확인할 수 있습니다.
            상세 데이터는 각 카테고리별 대시보드에서 확인하실 수 있습니다.
          </p>
        </div>
        </>
        )}
      </div>
    </div>
  )
}
