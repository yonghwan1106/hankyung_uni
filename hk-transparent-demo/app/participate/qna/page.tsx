'use client'

import { useState, useEffect } from 'react'
import { qnaData } from '@/lib/mockData'
import { MessageSquare, ThumbsUp, Eye, CheckCircle, Clock, Inbox } from 'lucide-react'
import Toast from '@/components/Toast'
import { CardSkeleton } from '@/components/Skeleton'
import EmptyState from '@/components/EmptyState'

export default function QnaPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showQuestionForm, setShowQuestionForm] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({
    category: '예산',
    title: '',
    content: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    { id: 'all', name: '전체', color: 'stone' },
    { id: '예산', name: '예산', color: 'blue' },
    { id: '학생', name: '학생', color: 'orange' },
    { id: '지역기여', name: '지역기여', color: 'purple' },
    { id: '환경', name: '환경', color: 'green' },
  ]

  const filteredData = selectedCategory === 'all'
    ? qnaData
    : qnaData.filter(q => q.category === selectedCategory)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.title.trim()) {
      alert('질문 제목을 입력해주세요')
      return
    }
    if (!formData.content.trim()) {
      alert('질문 내용을 입력해주세요')
      return
    }
    if (formData.content.length < 10) {
      alert('질문 내용을 10자 이상 입력해주세요')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Save to localStorage (in real app, would send to server)
    const newQuestion = {
      id: `qna-${Date.now()}`,
      ...formData,
      asker: '익명',
      date: new Date().toLocaleDateString('ko-KR'),
      views: 0,
      likes: 0,
      status: 'pending'
    }

    const savedQuestions = JSON.parse(localStorage.getItem('hk-questions') || '[]')
    savedQuestions.unshift(newQuestion)
    localStorage.setItem('hk-questions', JSON.stringify(savedQuestions))

    // Reset form
    setFormData({
      category: '예산',
      title: '',
      content: ''
    })
    setShowQuestionForm(false)
    setIsSubmitting(false)
    setShowToast(true)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">시민 Q&A</h1>
          <p className="text-xl text-stone-600">
            대학 운영에 대해 궁금한 점을 질문하고 답변을 받아보세요
          </p>
        </div>

        {isLoading ? (
          <CardSkeleton />
        ) : (
          <>
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow-lg border-l-8 border-blue-600">
            <div className="text-sm font-bold text-stone-600 mb-2">전체 질문</div>
            <div className="text-4xl font-black text-blue-600">{qnaData.length}</div>
          </div>
          <div className="bg-white p-6 shadow-lg border-l-8 border-green-600">
            <div className="text-sm font-bold text-stone-600 mb-2">답변 완료</div>
            <div className="text-4xl font-black text-green-600">
              {qnaData.filter(q => q.status === 'answered').length}
            </div>
          </div>
          <div className="bg-white p-6 shadow-lg border-l-8 border-orange-600">
            <div className="text-sm font-bold text-stone-600 mb-2">답변 대기</div>
            <div className="text-4xl font-black text-orange-600">
              {qnaData.filter(q => q.status === 'pending').length}
            </div>
          </div>
        </div>

        {/* Ask Question Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowQuestionForm(!showQuestionForm)}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold text-lg transition-colors"
          >
            <MessageSquare className="inline-block w-5 h-5 mr-2" />
            질문하기
          </button>
        </div>

        {/* Question Form */}
        {showQuestionForm && (
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">새 질문 작성</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="category" className="block text-sm font-bold text-stone-700 mb-2">
                  카테고리
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-3 border-2 border-stone-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                  disabled={isSubmitting}
                >
                  <option>예산</option>
                  <option>학생</option>
                  <option>지역기여</option>
                  <option>환경</option>
                  <option>기타</option>
                </select>
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-bold text-stone-700 mb-2">
                  질문 제목
                </label>
                <input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="질문 제목을 입력하세요"
                  className="w-full p-3 border-2 border-stone-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                  disabled={isSubmitting}
                  maxLength={100}
                />
                <div className="text-xs text-stone-500 mt-1 text-right">{formData.title.length}/100</div>
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-bold text-stone-700 mb-2">
                  질문 내용
                </label>
                <textarea
                  id="content"
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="질문 내용을 상세히 입력하세요 (최소 10자)"
                  className="w-full p-3 border-2 border-stone-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 resize-none transition-all"
                  disabled={isSubmitting}
                  maxLength={1000}
                ></textarea>
                <div className="text-xs text-stone-500 mt-1 text-right">{formData.content.length}/1000</div>
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 py-3 font-bold text-white transition-all ${
                    isSubmitting
                      ? 'bg-blue-400 cursor-wait'
                      : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-100'
                  }`}
                >
                  {isSubmitting ? '제출 중...' : '질문 제출'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowQuestionForm(false)}
                  disabled={isSubmitting}
                  className="px-6 bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold transition-colors disabled:opacity-50"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 font-bold transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Q&A List */}
        {filteredData.length === 0 ? (
          <EmptyState
            icon={Inbox}
            title="질문이 없습니다"
            description={selectedCategory === 'all'
              ? "아직 등록된 질문이 없습니다. 첫 번째 질문을 남겨보세요!"
              : `'${categories.find(c => c.id === selectedCategory)?.name}' 카테고리에 질문이 없습니다.`
            }
            action={{
              label: '질문하기',
              onClick: () => setShowQuestionForm(true)
            }}
          />
        ) : (
        <div className="space-y-6">
          {filteredData.map((qna) => (
            <div key={qna.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                {/* Question */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`px-3 py-1 text-xs font-bold ${
                    qna.category === '예산' ? 'bg-blue-100 text-blue-700' :
                    qna.category === '학생' ? 'bg-orange-100 text-orange-700' :
                    qna.category === '지역기여' ? 'bg-purple-100 text-purple-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {qna.category}
                  </div>
                  {qna.status === 'answered' ? (
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold">
                      <CheckCircle className="w-3 h-3" />
                      답변완료
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold">
                      <Clock className="w-3 h-3" />
                      답변대기
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-3">{qna.question}</h3>

                <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                  <span>{qna.asker}</span>
                  <span>{qna.date}</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {qna.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {qna.likes}
                  </div>
                </div>

                {/* Answer */}
                {qna.status === 'answered' && qna.answer && (
                  <div className="bg-blue-50 p-6 border-l-4 border-blue-600">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold">
                        A
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">{qna.answer.answerer}</div>
                        <div className="text-xs text-stone-500">{qna.answer.answerDate}</div>
                      </div>
                    </div>
                    <p className="text-stone-700 leading-relaxed">{qna.answer.content}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        )}

        {/* Info */}
        <div className="mt-12 bg-blue-50 p-6 border-l-4 border-blue-600">
          <h3 className="font-bold text-blue-900 mb-2">💡 Q&A 이용 안내</h3>
          <ul className="text-sm text-stone-700 space-y-1">
            <li>• 모든 질문은 공개되며, 누구나 열람할 수 있습니다.</li>
            <li>• 답변은 관련 부서 담당자가 7일 이내에 작성합니다.</li>
            <li>• 개인정보가 포함된 질문은 비공개 문의를 이용해주세요.</li>
            <li>• 같은 질문이 있는지 검색 후 중복 질문을 피해주세요.</li>
          </ul>
        </div>
        </>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message="질문이 성공적으로 제출되었습니다! 7일 이내에 답변이 등록됩니다."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}
