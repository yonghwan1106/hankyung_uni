'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BarChart3, Users, FileText, Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: '홈', icon: Home },
    { href: '/dashboard/overview', label: '투명성 대시보드', icon: BarChart3 },
    { href: '/participate/vote', label: '시민 참여', icon: Users },
    { href: '/reports/monthly', label: '정기 보고', icon: FileText },
  ]

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-green-600"></div>
            <span className="text-lg font-black text-stone-900">HK투명</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all duration-200 rounded ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-stone-600 hover:text-blue-600 hover:bg-stone-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-stone-100 rounded transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-stone-900" />
            ) : (
              <Menu className="w-6 h-6 text-stone-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 md:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b-2 border-stone-200">
            <span className="text-lg font-black text-stone-900">메뉴</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-stone-100 rounded transition-colors"
              aria-label="메뉴 닫기"
            >
              <X className="w-5 h-5 text-stone-900" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 px-4 py-3 text-base font-bold transition-all duration-200 rounded ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-stone-700 hover:text-blue-600 hover:bg-stone-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t-2 border-stone-200 bg-stone-50">
            <p className="text-xs text-stone-600 text-center">
              © 2024 한경국립대학교
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
