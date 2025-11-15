'use client'

import { monthlyReports } from '@/lib/mockData'
import { FileText, Download, Eye, Calendar } from 'lucide-react'

export default function MonthlyReportsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">월간 투명성 리포트</h1>
          <p className="text-xl text-stone-600">
            매월 첫 주, 전월 실적을 종합하여 공개합니다
          </p>
        </div>

        {/* Info */}
        <div className="bg-purple-50 p-6 border-l-4 border-purple-600 mb-8">
          <h3 className="font-bold text-purple-900 mb-2">📅 발행 일정</h3>
          <p className="text-sm text-stone-700">
            매월 <strong>첫 주</strong> 전월 데이터를 종합하여 월간 리포트를 발행합니다.
            PDF 다운로드 및 이메일 구독 서비스를 제공합니다.
          </p>
        </div>

        {/* Latest Report Highlight */}
        {monthlyReports[0] && (
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-12 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8" />
              <span className="text-sm font-bold tracking-wider opacity-80">최신 리포트</span>
            </div>
            <h2 className="text-4xl font-black mb-6">{monthlyReports[0].month} 월간 투명성 리포트</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-bold mb-2 opacity-80">예산 집행</div>
                <div className="text-2xl font-black">{monthlyReports[0].summary.budget}</div>
              </div>
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-bold mb-2 opacity-80">연구 성과</div>
                <div className="text-2xl font-black">{monthlyReports[0].summary.research}</div>
              </div>
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-bold mb-2 opacity-80">취업 지원</div>
                <div className="text-2xl font-black">{monthlyReports[0].summary.employment}</div>
              </div>
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-bold mb-2 opacity-80">지역 협력</div>
                <div className="text-2xl font-black">{monthlyReports[0].summary.community}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 font-bold hover:bg-stone-100 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                PDF 다운로드
              </button>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Eye className="w-4 h-4" />
                {monthlyReports[0].views.toLocaleString()} 조회
              </div>
            </div>
          </div>
        )}

        {/* All Reports List */}
        <div>
          <h2 className="text-3xl font-bold text-stone-900 mb-6">전체 월간 리포트</h2>
          <div className="space-y-4">
            {monthlyReports.map((report) => (
              <div key={report.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-purple-100 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-1">{report.month}</h3>
                        <div className="flex items-center gap-3 text-sm text-stone-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            발행: {report.publishedDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {report.views.toLocaleString()} 조회
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-bold transition-colors flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      다운로드
                    </button>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-stone-50 p-4 border-l-4 border-blue-600">
                      <div className="text-xs font-bold text-stone-600 mb-1">예산</div>
                      <div className="text-sm font-bold text-stone-900">{report.summary.budget}</div>
                    </div>
                    <div className="bg-stone-50 p-4 border-l-4 border-green-600">
                      <div className="text-xs font-bold text-stone-600 mb-1">연구</div>
                      <div className="text-sm font-bold text-stone-900">{report.summary.research}</div>
                    </div>
                    <div className="bg-stone-50 p-4 border-l-4 border-orange-600">
                      <div className="text-xs font-bold text-stone-600 mb-1">취업</div>
                      <div className="text-sm font-bold text-stone-900">{report.summary.employment}</div>
                    </div>
                    <div className="bg-stone-50 p-4 border-l-4 border-purple-600">
                      <div className="text-xs font-bold text-stone-600 mb-1">지역</div>
                      <div className="text-sm font-bold text-stone-900">{report.summary.community}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 bg-white shadow-lg p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">월간 리포트 구독</h3>
          <p className="text-stone-600 mb-6">
            이메일로 월간 리포트를 자동으로 받아보세요
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="이메일 주소 입력"
              className="flex-1 p-3 border-2 border-stone-200 focus:border-purple-600 focus:outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 font-bold transition-colors">
              구독하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
