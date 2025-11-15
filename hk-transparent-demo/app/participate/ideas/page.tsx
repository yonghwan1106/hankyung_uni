'use client'

import { useState, useEffect } from 'react'
import { ideasData } from '@/lib/mockData'
import { Lightbulb, ThumbsUp, MessageSquare, CheckCircle, Clock, Eye, Inbox } from 'lucide-react'
import Toast from '@/components/Toast'
import { CardSkeleton } from '@/components/Skeleton'
import EmptyState from '@/components/EmptyState'

export default function IdeasPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [showIdeaForm, setShowIdeaForm] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({
    category: '환경',
    title: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const statuses = [
    { id: 'all', name: '전체', color: 'stone' },
    { id: 'adopted', name: '채택됨', color: 'green' },
    { id: 'under-review', name: '검토중', color: 'blue' },
    { id: 'in-discussion', name: '논의중', color: 'orange' },
  ]

  const filteredData = selectedStatus === 'all'
    ? ideasData
    : ideasData.filter(idea => idea.status === selectedStatus)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.title.trim()) {
      alert('아이디어 제목을 입력해주세요')
      return
    }
    if (!formData.description.trim()) {
      alert('아이디어 설명을 입력해주세요')
      return
    }
    if (formData.description.length < 20) {
      alert('아이디어 설명을 20자 이상 입력해주세요')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Save to localStorage
    const newIdea = {
      id: `idea-${Date.now()}`,
      ...formData,
      proposer: '익명',
      date: new Date().toLocaleDateString('ko-KR'),
      votes: 0,
      comments: 0,
      status: 'in-discussion'
    }

    const savedIdeas = JSON.parse(localStorage.getItem('hk-ideas') || '[]')
    savedIdeas.unshift(newIdea)
    localStorage.setItem('hk-ideas', JSON.stringify(savedIdeas))

    // Reset form
    setFormData({
      category: '환경',
      title: '',
      description: ''
    })
    setShowIdeaForm(false)
    setIsSubmitting(false)
    setShowToast(true)
  }

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'adopted':
        return { label: '채택됨', color: 'bg-green-100 text-green-700', icon: CheckCircle }
      case 'under-review':
        return { label: '검토중', color: 'bg-blue-100 text-blue-700', icon: Eye }
      case 'in-discussion':
        return { label: '논의중', color: 'bg-orange-100 text-orange-700', icon: Clock }
      default:
        return { label: '제출됨', color: 'bg-stone-100 text-stone-700', icon: Clock }
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '환경': return 'bg-green-100 text-green-700'
      case '지역기여': return 'bg-purple-100 text-purple-700'
      case '학생': return 'bg-orange-100 text-orange-700'
      default: return 'bg-blue-100 text-blue-700'
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">아이디어 제안</h1>
          <p className="text-xl text-stone-600">
            대학을 더 나은 곳으로 만들 아이디어를 제안하세요
          </p>
        </div>

        {isLoading ? (
          <CardSkeleton />
        ) : (
          <>
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow-lg border-l-8 border-purple-600">
            <div className="text-sm font-bold text-stone-600 mb-2">전체 제안</div>
            <div className="text-4xl font-black text-purple-600">{ideasData.length}</div>
          </div>
          <div className="bg-white p-6 shadow-lg border-l-8 border-green-600">
            <div className="text-sm font-bold text-stone-600 mb-2">채택된 아이디어</div>
            <div className="text-4xl font-black text-green-600">
              {ideasData.filter(i => i.status === 'adopted').length}
            </div>
          </div>
          <div className="bg-white p-6 shadow-lg border-l-8 border-blue-600">
            <div className="text-sm font-bold text-stone-600 mb-2">검토중</div>
            <div className="text-4xl font-black text-blue-600">
              {ideasData.filter(i => i.status === 'under-review').length}
            </div>
          </div>
        </div>

        {/* Submit Idea Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowIdeaForm(!showIdeaForm)}
            className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 font-bold text-lg transition-colors"
          >
            <Lightbulb className="inline-block w-5 h-5 mr-2" />
            아이디어 제안하기
          </button>
        </div>

        {/* Idea Form */}
        {showIdeaForm && (
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">새 아이디어 제안</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="category" className="block text-sm font-bold text-stone-700 mb-2">
                  카테고리
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-3 border-2 border-stone-200 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all"
                  disabled={isSubmitting}
                >
                  <option>환경</option>
                  <option>학생</option>
                  <option>지역기여</option>
                  <option>교육</option>
                  <option>시설</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-bold text-stone-700 mb-2">
                  제안 제목
                </label>
                <input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="간결하고 명확한 제목을 입력하세요"
                  className="w-full p-3 border-2 border-stone-200 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all"
                  disabled={isSubmitting}
                  maxLength={100}
                />
                <div className="text-xs text-stone-500 mt-1 text-right">{formData.title.length}/100</div>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-bold text-stone-700 mb-2">
                  상세 설명
                </label>
                <textarea
                  id="description"
                  rows={8}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="아이디어를 구체적으로 설명해주세요. 기대 효과, 실행 방법 등을 포함하면 좋습니다. (최소 20자)"
                  className="w-full p-3 border-2 border-stone-200 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 resize-none transition-all"
                  disabled={isSubmitting}
                  maxLength={2000}
                ></textarea>
                <div className="text-xs text-stone-500 mt-1 text-right">{formData.description.length}/2000</div>
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 py-3 font-bold text-white transition-all ${
                    isSubmitting
                      ? 'bg-purple-400 cursor-wait'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-[1.02] active:scale-100'
                  }`}
                >
                  {isSubmitting ? '제출 중...' : '제안 제출'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowIdeaForm(false)}
                  disabled={isSubmitting}
                  className="px-6 bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold transition-colors disabled:opacity-50"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Status Filter */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {statuses.map((status) => (
            <button
              key={status.id}
              onClick={() => setSelectedStatus(status.id)}
              className={`px-6 py-2 font-bold transition-colors ${
                selectedStatus === status.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              {status.name}
            </button>
          ))}
        </div>

        {/* Ideas List */}
        {filteredData.length === 0 ? (
          <EmptyState
            icon={Inbox}
            title="아이디어가 없습니다"
            description={selectedStatus === 'all'
              ? "아직 제안된 아이디어가 없습니다. 첫 번째 아이디어를 제안해보세요!"
              : `'${statuses.find(s => s.id === selectedStatus)?.name}' 상태의 아이디어가 없습니다.`
            }
            action={{
              label: '아이디어 제안하기',
              onClick: () => setShowIdeaForm(true)
            }}
          />
        ) : (
        <div className="space-y-6">
          {filteredData.map((idea) => {
            const statusDisplay = getStatusDisplay(idea.status)
            const StatusIcon = statusDisplay.icon

            return (
              <div key={idea.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`px-3 py-1 text-xs font-bold ${getCategoryColor(idea.category)}`}>
                      {idea.category}
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 text-xs font-bold ${statusDisplay.color}`}>
                      <StatusIcon className="w-3 h-3" />
                      {statusDisplay.label}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">{idea.title}</h3>

                  {/* Description */}
                  <p className="text-stone-700 leading-relaxed mb-4">{idea.description}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                    <span>{idea.proposer}</span>
                    <span>{idea.date}</span>
                    <button className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="font-bold">{idea.votes.toLocaleString()}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {idea.comments}
                    </div>
                  </div>

                  {/* Adoption Info */}
                  {idea.status === 'adopted' && idea.adoption && (
                    <div className="bg-green-50 p-6 border-l-4 border-green-600">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-bold text-green-900">채택된 아이디어</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-bold text-stone-700">채택일:</span>{' '}
                          <span className="text-stone-600">{idea.adoption.date}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-700">예산:</span>{' '}
                          <span className="text-green-600 font-bold">
                            {(idea.adoption.budget / 10000).toLocaleString()}만원
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-700">일정:</span>{' '}
                          <span className="text-stone-600">{idea.adoption.timeline}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Vote Button */}
                  {idea.status !== 'adopted' && (
                    <div className="mt-4">
                      <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 px-6 py-2 font-bold transition-colors flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        이 아이디어 추천하기
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        )}

        {/* Info */}
        <div className="mt-12 bg-purple-50 p-6 border-l-4 border-purple-600">
          <h3 className="font-bold text-purple-900 mb-2">💡 아이디어 제안 안내</h3>
          <ul className="text-sm text-stone-700 space-y-1">
            <li>• 제안된 아이디어는 커뮤니티 투표로 인기도를 평가합니다.</li>
            <li>• 인기 아이디어는 대학 운영위원회에서 검토하여 채택 여부를 결정합니다.</li>
            <li>• 채택된 아이디어는 실제 정책에 반영되며, 진행 상황을 공개합니다.</li>
            <li>• 제안자에게는 채택 과정 및 결과에 대한 피드백이 제공됩니다.</li>
          </ul>
        </div>
        </>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message="아이디어가 성공적으로 제출되었습니다! 커뮤니티 투표와 운영위원회 검토를 거칩니다."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}
