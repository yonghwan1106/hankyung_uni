import Link from 'next/link'
import {
  budgetData,
  researchData,
  studentData,
  communityData,
  environmentData,
  kpiData,
  voteData,
  qnaData,
  ideasData,
  monthlyReports,
} from '@/lib/mockData'
import { ArrowRight, TrendingUp, Users, Building2, Leaf, BarChart3, Vote, MessageSquare, Lightbulb, FileText } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-black mb-6">HK투명</h1>
            <p className="text-2xl text-white/90 mb-8">
              국민이 신뢰하는 국립대학 실시간 투명성 플랫폼
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="text-4xl font-black mb-2">{kpiData.overall.transparency.toFixed(1)}</div>
                <div className="text-sm text-white/80">투명성 지수</div>
              </div>
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="text-4xl font-black mb-2">{budgetData.executionRate.toFixed(1)}%</div>
                <div className="text-sm text-white/80">예산 집행률</div>
              </div>
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="text-4xl font-black mb-2">{researchData.papers.total}</div>
                <div className="text-sm text-white/80">연구 논문</div>
              </div>
              <div className="bg-white/10 p-6 backdrop-blur">
                <div className="text-4xl font-black mb-2">{studentData.employment.overall}%</div>
                <div className="text-sm text-white/80">취업률</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 시스템 A: 실시간 투명성 대시보드 */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-stone-900 mb-4">
              시스템 A: 실시간 투명성 대시보드
            </h2>
            <p className="text-xl text-stone-600">
              대학의 모든 주요 운영 데이터를 실시간으로 확인하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/dashboard/budget"
              className="bg-white p-8 border-l-8 border-blue-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-12 h-12 text-blue-600" />
                <ArrowRight className="w-6 h-6 text-stone-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">예산 투명성</h3>
              <p className="text-stone-600 mb-4">월별 예산 집행 현황 실시간 공개</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-blue-600">{budgetData.executionRate.toFixed(1)}%</span>
                <span className="text-sm text-stone-500">집행률</span>
              </div>
            </Link>

            <Link
              href="/dashboard/research"
              className="bg-white p-8 border-l-8 border-green-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-12 h-12 text-green-600" />
                <ArrowRight className="w-6 h-6 text-stone-400 group-hover:text-green-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">연구 성과</h3>
              <p className="text-stone-600 mb-4">논문, 특허, 기술이전 현황</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-green-600">{researchData.papers.total}</span>
                <span className="text-sm text-stone-500">논문</span>
              </div>
            </Link>

            <Link
              href="/dashboard/students"
              className="bg-white p-8 border-l-8 border-orange-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-12 h-12 text-orange-600" />
                <ArrowRight className="w-6 h-6 text-stone-400 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">학생 성공</h3>
              <p className="text-stone-600 mb-4">취업률, 창업, 장학금 현황</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-orange-600">{studentData.employment.overall}%</span>
                <span className="text-sm text-stone-500">취업률</span>
              </div>
            </Link>

            <Link
              href="/dashboard/community"
              className="bg-white p-8 border-l-8 border-purple-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Building2 className="w-12 h-12 text-purple-600" />
                <ArrowRight className="w-6 h-6 text-stone-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">지역 기여</h3>
              <p className="text-stone-600 mb-4">협력 프로그램, 경제 기여도</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-purple-600">{communityData.programs.total}</span>
                <span className="text-sm text-stone-500">프로그램</span>
              </div>
            </Link>

            <Link
              href="/dashboard/environment"
              className="bg-white p-8 border-l-8 border-teal-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Leaf className="w-12 h-12 text-teal-600" />
                <ArrowRight className="w-6 h-6 text-stone-400 group-hover:text-teal-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">환경·ESG</h3>
              <p className="text-stone-600 mb-4">에너지, 탄소배출, 재활용</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-teal-600">{environmentData.energy.renewable.toFixed(1)}%</span>
                <span className="text-sm text-stone-500">재생에너지</span>
              </div>
            </Link>

            <Link
              href="/dashboard/overview"
              className="bg-gradient-to-br from-blue-600 to-green-600 p-8 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-12 h-12" />
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-2">통합 KPI</h3>
              <p className="text-white/80 mb-4">모든 지표 통합 대시보드</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black">{kpiData.roi.ratio.toFixed(2)}배</span>
                <span className="text-sm text-white/70">투자 대비 가치</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 시스템 B: 시민 참여 */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-stone-900 mb-4">
              시스템 B: 시민 참여 시스템
            </h2>
            <p className="text-xl text-stone-600">
              대학 운영에 직접 참여하고 의견을 제시하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/participate/vote"
              className="bg-white p-8 border-l-8 border-green-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Vote className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-stone-900 mb-2">시민 우선순위 투표</h3>
              <p className="text-stone-600 mb-4">월 1회 대학 운영 우선순위 투표</p>
              <div className="bg-green-50 p-4 border-l-4 border-green-600">
                <p className="text-sm font-bold text-green-900 mb-1">진행중인 투표</p>
                <p className="text-sm text-stone-700">{voteData.current.title}</p>
                <p className="text-xs text-stone-500 mt-2">{voteData.current.totalVotes.toLocaleString()}명 참여</p>
              </div>
            </Link>

            <Link
              href="/participate/qna"
              className="bg-white p-8 border-l-8 border-blue-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-stone-900 mb-2">시민 Q&A</h3>
              <p className="text-stone-600 mb-4">대학 운영 관련 질문과 답변</p>
              <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
                <p className="text-sm font-bold text-blue-900 mb-1">최근 질문</p>
                <p className="text-sm text-stone-700 line-clamp-2">{qnaData[0].question}</p>
                <p className="text-xs text-stone-500 mt-2">7일 이내 답변</p>
              </div>
            </Link>

            <Link
              href="/participate/ideas"
              className="bg-white p-8 border-l-8 border-orange-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Lightbulb className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-stone-900 mb-2">아이디어 제안</h3>
              <p className="text-stone-600 mb-4">대학 개선 아이디어 제안</p>
              <div className="bg-orange-50 p-4 border-l-4 border-orange-600">
                <p className="text-sm font-bold text-orange-900 mb-1">인기 아이디어</p>
                <p className="text-sm text-stone-700 line-clamp-2">{ideasData[1].title}</p>
                <p className="text-xs text-stone-500 mt-2">{ideasData[1].votes.toLocaleString()} 투표</p>
              </div>
            </Link>
          </div>
        </section>

        {/* 시스템 C: 정기 공개 보고 */}
        <section>
          <div className="mb-12">
            <h2 className="text-4xl font-black text-stone-900 mb-4">
              시스템 C: 정기 공개 보고
            </h2>
            <p className="text-xl text-stone-600">
              월간, 분기, 연간 정기 보고서를 확인하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/reports/monthly"
              className="bg-white p-8 border-l-8 border-purple-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <FileText className="w-12 h-12 text-purple-600 mb-4" />
              <div className="text-3xl font-black text-purple-600 mb-2">월간</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">월간 투명성 리포트</h3>
              <p className="text-stone-600 mb-4">매월 첫 주 전월 실적 종합</p>
              <div className="text-sm text-stone-500">
                최신: {monthlyReports[0].month}
              </div>
            </Link>

            <Link
              href="/reports/quarterly"
              className="bg-white p-8 border-l-8 border-blue-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <FileText className="w-12 h-12 text-blue-600 mb-4" />
              <div className="text-3xl font-black text-blue-600 mb-2">분기</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">분기별 타운홀</h3>
              <p className="text-stone-600 mb-4">온·오프라인 시민 타운홀</p>
              <div className="text-sm text-stone-500">
                다음: 2024년 3월 28일
              </div>
            </Link>

            <Link
              href="/reports/annual"
              className="bg-white p-8 border-l-8 border-green-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <FileText className="w-12 h-12 text-green-600 mb-4" />
              <div className="text-3xl font-black text-green-600 mb-2">연간</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">연간 성과보고서</h3>
              <p className="text-stone-600 mb-4">국민에게 드리는 보고서</p>
              <div className="text-sm text-stone-500">
                최신: 2023년 보고서
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
