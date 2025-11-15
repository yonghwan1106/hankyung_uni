'use client'

import { useState, useEffect } from 'react'
import { studentData } from '@/lib/mockData'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Users, TrendingUp, Rocket, Award, DollarSign } from 'lucide-react'
import Skeleton from '@/components/Skeleton'
import { useCountUp } from '@/hooks/useCountUp'

export default function StudentsDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [liveMetrics, setLiveMetrics] = useState({
    employmentRate: studentData.employment.overall,
    startups: studentData.startups.total,
    scholarshipRecipients: studentData.scholarships.recipients,
    scholarshipAmount: studentData.scholarships.totalAmount,
    satisfaction: studentData.satisfaction,
  })

  // Count up animations for initial load
  const animatedEmployment = useCountUp(liveMetrics.employmentRate * 10, 1500) / 10
  const animatedStartups = useCountUp(liveMetrics.startups, 1500)
  const animatedRecipients = useCountUp(liveMetrics.scholarshipRecipients, 1500)
  const animatedScholarship = useCountUp(liveMetrics.scholarshipAmount / 100000000, 1500)
  const animatedSatisfaction = useCountUp(liveMetrics.satisfaction * 10, 1500) / 10

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Real-time student metrics simulation (increases every 12 seconds)
  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        employmentRate: Math.min(prev.employmentRate + (Math.random() * 0.05), 100),
        startups: prev.startups + (Math.random() > 0.8 ? 1 : 0),
        scholarshipRecipients: prev.scholarshipRecipients + (Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0),
        scholarshipAmount: prev.scholarshipAmount + (Math.random() > 0.8 ? Math.floor(Math.random() * 10000000) : 0),
        satisfaction: Math.min(prev.satisfaction + (Math.random() * 0.01), 5.0),
      }))
    }, 12000) // Update every 12 seconds

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">학생 성공 대시보드</h1>
          <p className="text-xl text-stone-600">
            학생들의 취업, 창업, 장학금 현황을 확인하세요
          </p>
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-orange-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Users className="w-12 h-12 text-orange-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">전체 취업률</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedEmployment.toFixed(1)}%
            </div>
            <div className="text-sm text-green-600 font-bold">▲ 4.3%p 증가</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-purple-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Rocket className="w-12 h-12 text-purple-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">학생 창업</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedStartups}
            </div>
            <div className="text-sm text-stone-500">생존률 {studentData.startups.survivalRate}%</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-blue-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">장학금 수혜자</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedRecipients.toLocaleString()}
            </div>
            <div className="text-sm text-stone-500">명</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-green-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <DollarSign className="w-12 h-12 text-green-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">총 장학금</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedScholarship.toFixed(0)}억
            </div>
            <div className="text-sm text-stone-500">2024년 상반기</div>
          </div>
        </div>

        {/* 학과별 취업률 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">학과별 취업률</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={studentData.employment.byDepartment}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="dept" stroke="#57534e" angle={-15} textAnchor="end" height={100} />
              <YAxis stroke="#57534e" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fafaf9',
                  border: '1px solid #e7e5e4',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="rate" fill="#f97316" name="취업률 (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 업종별 취업 현황 및 학과별 상세 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">업종별 취업 비율</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={studentData.employment.byIndustry}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.industry} ${entry.rate}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="rate"
                >
                  {studentData.employment.byIndustry.map((entry, index) => (
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
            <h2 className="text-2xl font-bold text-stone-900 mb-6">학과별 취업 상세</h2>
            <div className="space-y-4">
              {studentData.employment.byDepartment.map((dept) => (
                <div key={dept.dept}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-stone-900 text-sm">{dept.dept}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-stone-500">{dept.count}명</span>
                      <span className="text-lg font-bold text-orange-600">{dept.rate}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-orange-600"
                      style={{ width: `${dept.rate}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 창업 현황 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">학생 창업 현황</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-purple-50 p-6 border-l-4 border-purple-600">
              <div className="text-sm font-bold text-purple-900 mb-2">총 창업 기업</div>
              <div className="text-4xl font-black text-purple-600 mb-2">
                {studentData.startups.total}
              </div>
              <div className="text-sm text-stone-600">개</div>
            </div>
            <div className="bg-green-50 p-6 border-l-4 border-green-600">
              <div className="text-sm font-bold text-green-900 mb-2">활성 기업</div>
              <div className="text-4xl font-black text-green-600 mb-2">
                {studentData.startups.active}
              </div>
              <div className="text-sm text-stone-600">개 운영 중</div>
            </div>
            <div className="bg-blue-50 p-6 border-l-4 border-blue-600">
              <div className="text-sm font-bold text-blue-900 mb-2">생존률</div>
              <div className="text-4xl font-black text-blue-600 mb-2">
                {studentData.startups.survivalRate}%
              </div>
              <div className="text-sm text-stone-600">전국 평균 초과</div>
            </div>
            <div className="bg-orange-50 p-6 border-l-4 border-orange-600">
              <div className="text-sm font-bold text-orange-900 mb-2">투자 유치</div>
              <div className="text-4xl font-black text-orange-600 mb-2">
                {(studentData.startups.funding / 100000000).toFixed(0)}억
              </div>
              <div className="text-sm text-stone-600">누적</div>
            </div>
          </div>
        </div>

        {/* 장학금 현황 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">장학금 현황</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-8 border-l-4 border-blue-600">
              <div className="text-sm font-bold text-blue-900 mb-2">총 장학금 지급액</div>
              <div className="text-5xl font-black text-blue-600 mb-2">
                {(studentData.scholarships.totalAmount / 100000000).toFixed(0)}
                <span className="text-2xl">억원</span>
              </div>
              <div className="text-sm text-stone-600">2024년 상반기</div>
            </div>
            <div className="bg-green-50 p-8 border-l-4 border-green-600">
              <div className="text-sm font-bold text-green-900 mb-2">수혜 학생</div>
              <div className="text-5xl font-black text-green-600 mb-2">
                {studentData.scholarships.recipients.toLocaleString()}
                <span className="text-2xl">명</span>
              </div>
              <div className="text-sm text-stone-600">전체 재학생의 65%</div>
            </div>
            <div className="bg-orange-50 p-8 border-l-4 border-orange-600">
              <div className="text-sm font-bold text-orange-900 mb-2">1인당 평균</div>
              <div className="text-5xl font-black text-orange-600 mb-2">
                {(studentData.scholarships.avgAmount / 10000).toFixed(0)}
                <span className="text-2xl">만원</span>
              </div>
              <div className="text-sm text-stone-600">연간 평균</div>
            </div>
          </div>
        </div>

        {/* 학생 만족도 */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-12 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-bold flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              LIVE
            </span>
          </div>
          <div className="text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-black mb-4">학생 만족도</h2>
            <div className="text-7xl font-black mb-4">{animatedSatisfaction.toFixed(1)}</div>
            <div className="text-xl text-orange-100">5점 만점</div>
            <p className="mt-6 text-orange-100">
              전년 대비 0.3점 상승 | 교육서비스, 취업지원, 시설 만족도 종합 평가
            </p>
          </div>
        </div>

        {/* 안내 */}
        <div className="mt-8 bg-orange-50 p-6 border-l-4 border-orange-600">
          <h3 className="font-bold text-orange-900 mb-2">💡 학생 성공 안내</h3>
          <p className="text-sm text-stone-700">
            이 대시보드는 졸업생 취업률, 창업 현황, 장학금 지급 내역을 실시간으로 공개합니다.
            취업률은 건강보험 DB 연계 기준이며, 창업 데이터는 사업자등록증 기준입니다.
            장학금 관련 문의는 <span className="font-bold">학생처(031-000-0000)</span>로
            연락주세요.
          </p>
        </div>
        </>
        )}
      </div>
    </div>
  )
}
