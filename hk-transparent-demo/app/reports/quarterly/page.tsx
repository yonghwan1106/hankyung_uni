'use client'

import { townhallMeetings } from '@/lib/mockData'
import { Video, Calendar, MapPin, Users, CheckCircle, Clock } from 'lucide-react'

export default function QuarterlyReportsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">분기별 타운홀 미팅</h1>
          <p className="text-xl text-stone-600">
            총장 및 주요 보직자와 함께하는 시민 대화의 장
          </p>
        </div>

        {/* Info */}
        <div className="bg-blue-50 p-6 border-l-4 border-blue-600 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">📅 개최 일정</h3>
          <p className="text-sm text-stone-700">
            분기마다 <strong>온·오프라인</strong>으로 시민 타운홀 미팅을 개최합니다.
            참석자는 직접 질의응답하실 수 있으며, 모든 미팅은 <strong>YouTube 생중계</strong> 및 아카이브됩니다.
          </p>
        </div>

        {/* Upcoming Townhall */}
        {townhallMeetings.filter(m => m.status === 'upcoming')[0] && (
          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-12 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8" />
              <span className="text-sm font-bold tracking-wider opacity-80">다가오는 미팅</span>
            </div>

            <h2 className="text-4xl font-black mb-6">
              {townhallMeetings.filter(m => m.status === 'upcoming')[0].quarter} 타운홀 미팅
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-bold opacity-80">일시</span>
                </div>
                <div className="text-2xl font-black">
                  {townhallMeetings.filter(m => m.status === 'upcoming')[0].date}
                </div>
              </div>
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-bold opacity-80">장소</span>
                </div>
                <div className="text-lg font-bold">
                  {townhallMeetings.filter(m => m.status === 'upcoming')[0].location}
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 backdrop-blur mb-6">
              <h3 className="font-bold text-lg mb-3">안건</h3>
              <ul className="space-y-2">
                {townhallMeetings.filter(m => m.status === 'upcoming')[0].agenda.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-white/60">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 font-bold hover:bg-stone-100 transition-colors flex items-center gap-2">
                <Users className="w-5 h-5" />
                참석 신청하기
              </button>
              <div className="text-sm text-white/80">
                현재 {townhallMeetings.filter(m => m.status === 'upcoming')[0].registrations}명 신청
              </div>
            </div>
          </div>
        )}

        {/* Past Townhalls */}
        <div>
          <h2 className="text-3xl font-bold text-stone-900 mb-6">지난 타운홀 미팅</h2>
          <div className="space-y-6">
            {townhallMeetings.filter(m => m.status === 'completed').map((meeting) => (
              <div key={meeting.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-1">{meeting.quarter}</h3>
                        <div className="flex items-center gap-3 text-sm text-stone-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {meeting.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {meeting.participants}명 참석
                          </div>
                          <div className="flex items-center gap-1">
                            <Video className="w-4 h-4" />
                            {meeting.views?.toLocaleString()} 조회
                          </div>
                        </div>
                      </div>
                    </div>
                    {meeting.videoUrl && (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-bold transition-colors flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        다시보기
                      </button>
                    )}
                  </div>

                  <div className="mt-6 bg-stone-50 p-6">
                    <h4 className="font-bold text-stone-900 mb-3">안건</h4>
                    <ul className="space-y-2 text-sm text-stone-700">
                      {meeting.agenda.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-stone-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Participate */}
        <div className="mt-12 bg-blue-50 p-8 border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">참여 방법</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-stone-700">
            <div>
              <h4 className="font-bold text-stone-900 mb-2">오프라인 참석</h4>
              <ul className="space-y-1">
                <li>• 사전 신청 필수 (선착순 100명)</li>
                <li>• 대학본부 대강당에서 진행</li>
                <li>• 직접 질의응답 기회 제공</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 mb-2">온라인 참여</h4>
              <ul className="space-y-1">
                <li>• YouTube 생중계 (사전 신청 불필요)</li>
                <li>• 실시간 채팅으로 질문 제출</li>
                <li>• 아카이브로 언제든 다시보기</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
