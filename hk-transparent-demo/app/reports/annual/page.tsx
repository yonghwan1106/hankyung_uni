'use client'

import { annualReports } from '@/lib/mockData'
import { FileText, Download, Eye, Calendar, TrendingUp, Award } from 'lucide-react'

export default function AnnualReportsPage() {
  const latestReport = annualReports[0]
  const previousReport = annualReports[1]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">연간 종합 보고서</h1>
          <p className="text-xl text-stone-600">
            매년 1월, 전년도 성과를 종합하여 발표합니다
          </p>
        </div>

        {/* Info */}
        <div className="bg-blue-50 p-6 border-l-4 border-blue-600 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">📅 발행 일정</h3>
          <p className="text-sm text-stone-700">
            매년 <strong>1월 중순</strong> 전년도 실적을 종합하여 연간 보고서를 발행합니다.
            예산 집행, 연구 성과, 학생 지원, 지역 기여, 환경 활동 등 모든 영역을 포함합니다.
          </p>
        </div>

        {/* Latest Report Highlight */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white p-12 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8" />
            <span className="text-sm font-bold tracking-wider opacity-80">최신 연간 보고서</span>
          </div>
          <h2 className="text-4xl font-black mb-6">{latestReport.year} 한경국립대학교 연간 보고서</h2>

          {/* Key Highlights */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 opacity-90">주요 성과</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {latestReport.highlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 p-4 backdrop-blur flex items-start gap-3">
                  <Award className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-bold">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Taxpayer ROI */}
          <div className="bg-white/20 p-8 backdrop-blur mb-6">
            <div className="text-center">
              <div className="text-sm font-bold mb-2 opacity-80">국민 세금 투자 대비 경제적 가치</div>
              <div className="text-5xl font-black mb-2">{latestReport.taxpayerROI}</div>
              <div className="text-sm opacity-80">
                납세자가 투자한 1원이 2.37원의 경제적·사회적 가치로 환원됩니다
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 font-bold hover:bg-stone-100 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              전체 보고서 다운로드
            </button>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Eye className="w-4 h-4" />
              {latestReport.views.toLocaleString()} 조회
            </div>
          </div>
        </div>

        {/* Year-over-Year Comparison */}
        {previousReport && (
          <div className="bg-white shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">전년 대비 개선 현황</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-stone-700 mb-4">{previousReport.year}</h3>
                <ul className="space-y-3">
                  {previousReport.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="text-stone-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-stone-50 border-l-4 border-stone-400">
                  <div className="text-xs font-bold text-stone-600 mb-1">투자 대비 가치</div>
                  <div className="text-lg font-bold text-stone-700">{previousReport.taxpayerROI}</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-700 mb-4">{latestReport.year}</h3>
                <ul className="space-y-3">
                  {latestReport.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-stone-900">
                      <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="font-bold">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-600">
                  <div className="text-xs font-bold text-green-700 mb-1">투자 대비 가치</div>
                  <div className="text-lg font-bold text-green-600">{latestReport.taxpayerROI}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-stone-900">개선 요약</h4>
              </div>
              <ul className="text-sm text-stone-700 space-y-2">
                <li>• 연구비 유치 <strong className="text-green-600">18% 증가</strong> (45.8억 → 54억)</li>
                <li>• 취업률 <strong className="text-green-600">4.3%p 상승</strong> (74.2% → 78.5%)</li>
                <li>• 지역 경제 기여 <strong className="text-green-600">30.6% 증가</strong> (98억 → 128억)</li>
                <li>• 탄소배출 감축 <strong className="text-green-600">3.8%p 개선</strong> (8.5% → 12.3%)</li>
                <li>• 투자 대비 가치 <strong className="text-green-600">10.7% 향상</strong> (2.14배 → 2.37배)</li>
              </ul>
            </div>
          </div>
        )}

        {/* All Annual Reports List */}
        <div>
          <h2 className="text-3xl font-bold text-stone-900 mb-6">전체 연간 보고서</h2>
          <div className="space-y-4">
            {annualReports.map((report) => (
              <div key={report.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-1">{report.year} 연간 보고서</h3>
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
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-bold transition-colors flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      다운로드
                    </button>
                  </div>

                  <div className="mt-6 bg-stone-50 p-6">
                    <h4 className="font-bold text-stone-900 mb-3">주요 성과</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {report.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-stone-700">
                          <Award className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-stone-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-stone-700">투자 대비 경제적 가치</span>
                        <span className="text-lg font-black text-blue-600">{report.taxpayerROI}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Report Structure Info */}
        <div className="mt-12 bg-white shadow-lg p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">연간 보고서 구성</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-stone-900 mb-3">포함 내용</h4>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">▪</span>
                  <span>총장 인사말 및 경영 철학</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">▪</span>
                  <span>예산 집행 내역 (세부 항목별)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">▪</span>
                  <span>연구 성과 (논문, 특허, 기술이전)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">▪</span>
                  <span>학생 지원 현황 (장학금, 취업, 창업)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">▪</span>
                  <span>지역 사회 기여 활동</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">▪</span>
                  <span>환경·ESG 성과</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">▪</span>
                  <span>국민 투자 대비 경제적 가치 (ROI)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 mb-3">발행 프로세스</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
                  <div className="text-xs font-bold text-blue-900 mb-1">1단계 (12월)</div>
                  <div className="text-sm text-stone-700">데이터 수집 및 검증</div>
                </div>
                <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
                  <div className="text-xs font-bold text-blue-900 mb-1">2단계 (1월 초)</div>
                  <div className="text-sm text-stone-700">보고서 작성 및 내부 검토</div>
                </div>
                <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
                  <div className="text-xs font-bold text-blue-900 mb-1">3단계 (1월 중순)</div>
                  <div className="text-sm text-stone-700">외부 감사 및 최종 발행</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <h3 className="text-2xl font-bold mb-4">연간 보고서 알림 받기</h3>
          <p className="text-white/90 mb-6">
            매년 새로운 연간 보고서 발행 시 이메일로 알림을 받아보세요
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="이메일 주소 입력"
              className="flex-1 p-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 font-bold hover:bg-stone-100 transition-colors">
              구독하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
