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
import { ArrowRight, TrendingUp, Users, Building2, Leaf, BarChart3, Vote, MessageSquare, Lightbulb, FileText, Award, Info, ChevronDown } from 'lucide-react'

export default function AlternativeHome() {
  return (
    <div className="min-h-screen">
      {/* Fullscreen Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80)'
          }}
        ></div>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-green-900/80"></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-10" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 102px),
            repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 102px)
          `
        }}></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Contest Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 border-2 border-white/40 animate-fade-in">
            <Award className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold text-xs md:text-sm">2025 한경국립대학교 대학발전 아이디어 공모전 출품작</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 animate-fade-in-up opacity-0 leading-tight">
            HK투명
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl text-white/95 mb-3 md:mb-4 font-bold animate-fade-in-up animation-delay-100 opacity-0">
            국민이 신뢰하는 국립대학
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 animate-fade-in-up animation-delay-200 opacity-0 px-4">
            실시간 투명성 플랫폼으로 함께 만드는 미래
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12 animate-fade-in-up animation-delay-300 opacity-0">
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2">{kpiData.overall.transparency.toFixed(1)}</div>
              <div className="text-xs md:text-sm text-white/90 font-semibold">투명성 지수</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2">{budgetData.executionRate.toFixed(1)}%</div>
              <div className="text-xs md:text-sm text-white/90 font-semibold">예산 집행률</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2">{researchData.papers.total}</div>
              <div className="text-xs md:text-sm text-white/90 font-semibold">연구 논문</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2">{studentData.employment.overall}%</div>
              <div className="text-xs md:text-sm text-white/90 font-semibold">취업률</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in-up animation-delay-400 opacity-0 px-4">
            <Link
              href="/dashboard/overview"
              className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              통합 대시보드 보기
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/participate/vote"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              시민 참여하기
              <Users className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
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
        <section className="mb-24">
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
                다음: 2025년 12월 19일
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
                최신: 2024년 보고서
              </div>
            </Link>
          </div>
        </section>

        {/* 공모전 정보 및 데이터 안내 */}
        <section className="mt-24 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* 공모전 정보 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 border-l-4 border-blue-600 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-stone-900">2025년 대학발전 아이디어 공모전</h3>
              </div>
              <p className="text-stone-700 mb-4 leading-relaxed">
                본 프로젝트는 <strong className="text-blue-700">한경국립대학교 2025년 대학발전 아이디어 공모전</strong>에 제출하는 제안서입니다.
              </p>
              <div className="bg-white/60 p-4 rounded-lg mb-3">
                <p className="text-sm font-bold text-stone-900 mb-2">『열린 대학, 함께 하는 대학, 미래로 가는 대학』</p>
                <ul className="text-sm text-stone-700 space-y-1">
                  <li>• <strong>주제:</strong> 국민으로부터 신뢰받는 국립대학</li>
                  <li>• <strong>목표:</strong> 운영 시스템의 공정성 및 투명성 확대 방안</li>
                  <li>• <strong>접수기간:</strong> 2025. 11. 3.(월) ~ 11. 20.(목)</li>
                </ul>
              </div>
              <p className="text-xs text-stone-600 italic">
                한경국립대학교 기획평가과 주관 (2025.10.29 공고)
              </p>
            </div>

            {/* 데이터 안내 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 border-l-4 border-amber-600 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-stone-900">데이터 안내</h3>
              </div>
              <p className="text-stone-700 mb-4 leading-relaxed">
                본 플랫폼에 표시된 <strong className="text-amber-700">모든 수치와 데이터는 시연용 가상 데이터</strong>입니다.
              </p>
              <div className="bg-white/60 p-4 rounded-lg mb-3">
                <p className="text-sm font-bold text-stone-900 mb-2">📊 가상 데이터 포함 항목</p>
                <ul className="text-sm text-stone-700 space-y-1">
                  <li>• 예산 집행률, 연구 성과, 취업률 등 KPI 지표</li>
                  <li>• 투표 참여 수, Q&A 내용, 아이디어 제안</li>
                  <li>• 월간/분기/연간 리포트 데이터</li>
                  <li>• 타임라인 이벤트 및 활동 내역</li>
                </ul>
              </div>
              <p className="text-xs text-stone-600 italic">
                실제 운영 시 한경국립대학교의 정식 데이터로 대체됩니다.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Back to Original Link */}
      <div className="bg-stone-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold"
          >
            ← 기존 메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
