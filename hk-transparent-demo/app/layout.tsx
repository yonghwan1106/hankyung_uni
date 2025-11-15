import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Breadcrumb from '@/components/Breadcrumb'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'HK투명 - 국민이 신뢰하는 국립대학',
  description: '한경국립대학교 실시간 투명성 플랫폼',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-stone-50">
        <a href="#main-content" className="skip-to-content">
          메인 콘텐츠로 건너뛰기
        </a>
        <Navigation />
        <Breadcrumb />
        <main id="main-content">{children}</main>
        <BackToTop />
        <footer className="bg-stone-900 text-white py-12 mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="text-2xl font-black mb-2">HK투명</div>
                <p className="text-stone-400 text-sm">
                  국민이 신뢰하는 국립대학 실시간 투명성 플랫폼
                </p>
              </div>

              {/* Quick Links - Dashboard */}
              <div>
                <h3 className="font-bold mb-3 text-sm">투명성 대시보드</h3>
                <ul className="space-y-2 text-sm text-stone-400">
                  <li><a href="/dashboard/budget" className="hover:text-white transition-colors">예산</a></li>
                  <li><a href="/dashboard/research" className="hover:text-white transition-colors">연구성과</a></li>
                  <li><a href="/dashboard/students" className="hover:text-white transition-colors">학생</a></li>
                  <li><a href="/dashboard/environment" className="hover:text-white transition-colors">환경·ESG</a></li>
                </ul>
              </div>

              {/* Quick Links - Participate */}
              <div>
                <h3 className="font-bold mb-3 text-sm">시민 참여</h3>
                <ul className="space-y-2 text-sm text-stone-400">
                  <li><a href="/participate/vote" className="hover:text-white transition-colors">우선순위 투표</a></li>
                  <li><a href="/participate/qna" className="hover:text-white transition-colors">Q&A</a></li>
                  <li><a href="/participate/ideas" className="hover:text-white transition-colors">아이디어 제안</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold mb-3 text-sm">문의</h3>
                <ul className="space-y-2 text-sm text-stone-400">
                  <li>한경국립대학교</li>
                  <li>transparent@hknu.ac.kr</li>
                  <li>031-000-0000</li>
                </ul>
              </div>
            </div>

            <div className="h-px bg-stone-700 my-6"></div>
            <p className="text-stone-500 text-xs text-center">
              © 2024 한경국립대학교. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
