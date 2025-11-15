'use client'

import { useState, useEffect } from 'react'
import { communityData } from '@/lib/mockData'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Building2, Users, DollarSign, Heart, Library, Car } from 'lucide-react'
import Skeleton from '@/components/Skeleton'
import { useCountUp } from '@/hooks/useCountUp'

export default function CommunityDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [liveMetrics, setLiveMetrics] = useState({
    programs: communityData.programs.total,
    participants: communityData.programs.participants,
    economicRevenue: communityData.economic.revenue,
    volunteerHours: communityData.volunteer.hours,
  })

  // Count up animations for initial load
  const animatedPrograms = useCountUp(liveMetrics.programs, 1500)
  const animatedParticipants = useCountUp(liveMetrics.participants, 1500)
  const animatedRevenue = useCountUp(liveMetrics.economicRevenue / 100000000, 1500)
  const animatedVolunteer = useCountUp(liveMetrics.volunteerHours, 1500)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Real-time community metrics simulation (increases every 15 seconds)
  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        programs: prev.programs + (Math.random() > 0.9 ? 1 : 0),
        participants: prev.participants + Math.floor(Math.random() * 20 + 10),
        economicRevenue: prev.economicRevenue + (Math.random() > 0.8 ? Math.floor(Math.random() * 100000000) : 0),
        volunteerHours: prev.volunteerHours + Math.floor(Math.random() * 50 + 10),
      }))
    }, 15000) // Update every 15 seconds

    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">지역 기여 대시보드</h1>
          <p className="text-xl text-stone-600">
            지역사회와 함께하는 한경국립대학교
          </p>
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-purple-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Building2 className="w-12 h-12 text-purple-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">협력 프로그램</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedPrograms}
            </div>
            <div className="text-sm text-stone-500">개 운영 중</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-blue-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">참여 주민</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedParticipants.toLocaleString()}
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
            <div className="text-sm font-bold text-stone-600 mb-2">경제 기여</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedRevenue.toFixed(0)}억
            </div>
            <div className="text-sm text-stone-500">2024년 상반기</div>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-8 border-orange-600 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <Heart className="w-12 h-12 text-orange-600 mb-4" />
            <div className="text-sm font-bold text-stone-600 mb-2">봉사 시간</div>
            <div className="text-4xl font-black text-stone-900 mb-2">
              {animatedVolunteer.toLocaleString()}
            </div>
            <div className="text-sm text-stone-500">시간</div>
          </div>
        </div>

        {/* 프로그램 유형별 현황 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">프로그램 유형별 참여 현황</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={communityData.programs.byType}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="type" stroke="#57534e" />
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
              <Bar yAxisId="left" dataKey="count" fill="#9333ea" name="프로그램 수" />
              <Bar yAxisId="right" dataKey="people" fill="#2563eb" name="참여 인원" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 유형별 상세 및 원형 차트 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">프로그램 유형별 비율</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={communityData.programs.byType}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.type} (${entry.count})`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {communityData.programs.byType.map((entry, index) => (
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
            <h2 className="text-2xl font-bold text-stone-900 mb-6">프로그램 상세 통계</h2>
            <div className="space-y-4">
              {communityData.programs.byType.map((program) => (
                <div key={program.type} className="border-b border-stone-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-stone-900">{program.type}</span>
                    <span className="text-lg font-bold text-stone-900">
                      {program.count}개
                    </span>
                  </div>
                  <div className="text-sm text-stone-600 mb-2">
                    참여: {program.people.toLocaleString()}명
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${(program.people / communityData.programs.participants) * 100}%`,
                        backgroundColor: program.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 경제 기여도 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">지역 경제 기여도</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-purple-50 p-6 border-l-4 border-purple-600">
              <div className="text-sm font-bold text-purple-900 mb-2">고용 창출</div>
              <div className="text-4xl font-black text-purple-600 mb-2">
                {communityData.economic.employment.toLocaleString()}
              </div>
              <div className="text-sm text-stone-600">명</div>
            </div>
            <div className="bg-blue-50 p-6 border-l-4 border-blue-600">
              <div className="text-sm font-bold text-blue-900 mb-2">지역 구매</div>
              <div className="text-4xl font-black text-blue-600 mb-2">
                {(communityData.economic.localPurchase / 100000000).toFixed(0)}억
              </div>
              <div className="text-sm text-stone-600">연간</div>
            </div>
            <div className="bg-green-50 p-6 border-l-4 border-green-600">
              <div className="text-sm font-bold text-green-900 mb-2">산학협력</div>
              <div className="text-4xl font-black text-green-600 mb-2">
                {communityData.economic.industryCollaboration}
              </div>
              <div className="text-sm text-stone-600">개 기업</div>
            </div>
            <div className="bg-orange-50 p-6 border-l-4 border-orange-600">
              <div className="text-sm font-bold text-orange-900 mb-2">총 기여액</div>
              <div className="text-4xl font-black text-orange-600 mb-2">
                {(communityData.economic.revenue / 100000000).toFixed(0)}억
              </div>
              <div className="text-sm text-stone-600">추산</div>
            </div>
          </div>
        </div>

        {/* 시설 개방 현황 */}
        <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">대학 시설 지역민 이용 현황</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-8 text-center">
              <Library className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-sm font-bold text-blue-900 mb-2">도서관</div>
              <div className="text-4xl font-black text-blue-600 mb-1">
                {communityData.facilities.library.toLocaleString()}
              </div>
              <div className="text-xs text-stone-600">명 이용</div>
            </div>
            <div className="bg-green-50 p-8 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-sm font-bold text-green-900 mb-2">체육시설</div>
              <div className="text-4xl font-black text-green-600 mb-1">
                {communityData.facilities.sports.toLocaleString()}
              </div>
              <div className="text-xs text-stone-600">명 이용</div>
            </div>
            <div className="bg-orange-50 p-8 text-center">
              <Building2 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-sm font-bold text-orange-900 mb-2">문화시설</div>
              <div className="text-4xl font-black text-orange-600 mb-1">
                {communityData.facilities.cultural.toLocaleString()}
              </div>
              <div className="text-xs text-stone-600">명 이용</div>
            </div>
            <div className="bg-purple-50 p-8 text-center">
              <Car className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-sm font-bold text-purple-900 mb-2">주차장</div>
              <div className="text-4xl font-black text-purple-600 mb-1">
                {communityData.facilities.parking.toLocaleString()}
              </div>
              <div className="text-xs text-stone-600">대 이용</div>
            </div>
          </div>
        </div>

        {/* 봉사활동 현황 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <div className="text-sm font-bold mb-2 text-purple-100">총 봉사 시간</div>
              <div className="text-5xl font-black mb-2">
                {communityData.volunteer.hours.toLocaleString()}
              </div>
              <div className="text-purple-100">시간</div>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-sm font-bold mb-2 text-purple-100">참여 학생</div>
              <div className="text-5xl font-black mb-2">
                {communityData.volunteer.participants.toLocaleString()}
              </div>
              <div className="text-purple-100">명</div>
            </div>
            <div>
              <Building2 className="w-12 h-12 mx-auto mb-4" />
              <div className="text-sm font-bold mb-2 text-purple-100">봉사 프로젝트</div>
              <div className="text-5xl font-black mb-2">
                {communityData.volunteer.projects}
              </div>
              <div className="text-purple-100">개</div>
            </div>
          </div>
        </div>

        {/* 안내 */}
        <div className="mt-8 bg-purple-50 p-6 border-l-4 border-purple-600">
          <h3 className="font-bold text-purple-900 mb-2">💡 지역 기여 안내</h3>
          <p className="text-sm text-stone-700">
            이 대시보드는 한경국립대학교의 지역사회 협력 프로그램과 경제 기여도를
            실시간으로 공개합니다. 평생교육 프로그램 신청은 <span className="font-bold">평생교육원
            (031-000-0000)</span>, 시설 이용 문의는 <span className="font-bold">시설관리팀
            (031-000-0001)</span>으로 연락주세요.
          </p>
        </div>
        </>
        )}
      </div>
    </div>
  )
}
