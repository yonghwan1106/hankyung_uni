'use client'

import { useState, useEffect } from 'react'
import { voteData as initialVoteData } from '@/lib/mockData'
import { Vote, Users, TrendingUp, CheckCircle } from 'lucide-react'
import Toast from '@/components/Toast'
import { CardSkeleton } from '@/components/Skeleton'

export default function VotePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [totalVotes, setTotalVotes] = useState(initialVoteData.current.totalVotes)
  const [voteOptions, setVoteOptions] = useState(initialVoteData.current.options)

  // Check if user has already voted (from localStorage)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    const voted = localStorage.getItem('hk-voted-2025-11')
    if (voted) {
      setHasVoted(true)
      const savedOption = localStorage.getItem('hk-vote-option')
      if (savedOption) {
        setSelectedOption(parseInt(savedOption))
      }
    }

    return () => clearTimeout(timer)
  }, [])

  // Real-time vote count simulation (increase every 3-5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      // Random increase between 0-2 votes
      const increase = Math.floor(Math.random() * 3)
      if (increase > 0) {
        setTotalVotes(prev => prev + increase)

        // Randomly increase one option's votes
        const randomOptionIndex = Math.floor(Math.random() * voteOptions.length)
        setVoteOptions(prev => {
          const newOptions = [...prev]
          newOptions[randomOptionIndex] = {
            ...newOptions[randomOptionIndex],
            votes: newOptions[randomOptionIndex].votes + increase
          }

          // Recalculate percentages
          const totalVotes = newOptions.reduce((sum, opt) => sum + opt.votes, 0)
          return newOptions.map(opt => ({
            ...opt,
            percentage: (opt.votes / totalVotes) * 100
          }))
        })
      }
    }, 4000) // Update every 4 seconds

    return () => clearInterval(interval)
  }, [voteOptions.length])

  const handleVote = () => {
    if (selectedOption !== null) {
      // Save to localStorage
      localStorage.setItem('hk-voted-2025-11', 'true')
      localStorage.setItem('hk-vote-option', selectedOption.toString())
      localStorage.setItem('hk-vote-timestamp', new Date().toISOString())

      // Update state
      setHasVoted(true)
      setShowToast(true)

      // Update vote counts
      setTotalVotes(prev => prev + 1)
      setVoteOptions(prev => {
        const newOptions = prev.map(opt =>
          opt.id === selectedOption
            ? { ...opt, votes: opt.votes + 1 }
            : opt
        )

        // Recalculate percentages
        const total = newOptions.reduce((sum, opt) => sum + opt.votes, 0)
        return newOptions.map(opt => ({
          ...opt,
          percentage: (opt.votes / total) * 100
        }))
      })
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-stone-900 mb-4">시민 우선순위 투표</h1>
          <p className="text-xl text-stone-600">
            대학 운영의 우선순위를 직접 결정하세요
          </p>
        </div>

        {isLoading ? (
          <CardSkeleton />
        ) : (
          <>
        {/* Current Vote */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-8">
            <div className="flex items-center gap-3 mb-4">
              <Vote className="w-8 h-8" />
              <span className="text-sm font-bold tracking-wider">진행중인 투표</span>
            </div>
            <h2 className="text-3xl font-black mb-2">{initialVoteData.current.title}</h2>
            <p className="text-green-100">{initialVoteData.current.description}</p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="font-bold">{totalVotes.toLocaleString()}명 참여</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">LIVE</span>
              </div>
              <div>마감: {initialVoteData.current.deadline}</div>
            </div>
          </div>

          <div className="p-8">
            {!hasVoted ? (
              <>
                <div className="space-y-4 mb-6">
                  {voteOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOption(option.id)}
                      className={`w-full text-left p-6 border-2 transition-all duration-200 ${
                        selectedOption === option.id
                          ? 'border-green-600 bg-green-50 scale-[1.02]'
                          : 'border-stone-200 hover:border-green-300 hover:bg-stone-50'
                      }`}
                      aria-label={`${option.title} 선택`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 transition-colors ${
                            selectedOption === option.id
                              ? 'border-green-600 bg-green-600'
                              : 'border-stone-300'
                          }`}
                        >
                          {selectedOption === option.id && (
                            <div className="w-3 h-3 rounded-full bg-white"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-stone-900 mb-2">
                            {option.title}
                          </h3>
                          <p className="text-stone-600">{option.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleVote}
                  disabled={selectedOption === null}
                  className={`w-full py-4 text-lg font-bold text-white transition-all duration-200 ${
                    selectedOption === null
                      ? 'bg-stone-300 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 hover:scale-[1.02] active:scale-100'
                  }`}
                  aria-label="투표 제출"
                >
                  투표하기
                </button>
              </>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-stone-900 mb-2">
                  투표가 완료되었습니다!
                </h3>
                <p className="text-stone-600 mb-8">
                  소중한 의견 감사합니다. 투표 결과는 대학 운영위원회에 공식 보고됩니다.
                </p>
                <div className="bg-green-50 p-6 border-l-4 border-green-600">
                  <p className="text-sm text-stone-700">
                    투표 결과는 실시간으로 업데이트되며 아래에서 확인하실 수 있습니다.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Current Results (if voted or after deadline) */}
        {hasVoted && (
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-stone-900">실시간 투표 현황</h3>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
                LIVE
              </span>
            </div>
            <div className="space-y-4">
              {voteOptions.map((option, index) => (
                <div
                  key={option.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-stone-900">{option.title}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-stone-500">
                        {option.votes.toLocaleString()}표
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        {option.percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-4 rounded-full bg-gradient-to-r from-green-600 to-green-500 transition-all duration-500 ease-out"
                      style={{ width: `${option.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Demographics */}
        {hasVoted && (
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <h3 className="text-xl font-bold text-stone-900 mb-6">연령대별 참여</h3>
              <div className="space-y-3">
                {initialVoteData.demographics.byAge.map((item) => (
                  <div key={item.age} className="flex items-center gap-3">
                    <span className="w-20 text-sm font-bold text-stone-700">
                      {item.age}
                    </span>
                    <div className="flex-1 bg-stone-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-blue-600 transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-16 text-sm text-right text-stone-600">
                      {item.percentage.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <h3 className="text-xl font-bold text-stone-900 mb-6">지역별 참여</h3>
              <div className="space-y-3">
                {initialVoteData.demographics.byRegion.map((item) => (
                  <div key={item.region} className="flex items-center gap-3">
                    <span className="w-20 text-sm font-bold text-stone-700">
                      {item.region}
                    </span>
                    <div className="flex-1 bg-stone-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-purple-600 transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-16 text-sm text-right text-stone-600">
                      {item.percentage.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Past Votes */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">지난 투표 결과</h3>
          <div className="space-y-4">
            {initialVoteData.history.map((vote) => (
              <div
                key={vote.id}
                className="border-l-4 border-green-600 bg-stone-50 p-6 hover:bg-stone-100 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-stone-900">{vote.title}</h4>
                  <span className="text-sm text-stone-500">{vote.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-stone-700">
                    채택: <strong className="text-green-700">{vote.winner}</strong>
                  </span>
                  <span className="text-sm text-stone-500">
                    ({vote.votes.toLocaleString()}표)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 bg-blue-50 p-6 border-l-4 border-blue-600">
          <h3 className="font-bold text-blue-900 mb-2">💡 시민 투표 안내</h3>
          <ul className="text-sm text-stone-700 space-y-1">
            <li>• 투표는 월 1회 진행되며, 투표 주제는 대학 운영위원회에서 선정합니다.</li>
            <li>• 모든 투표 결과는 대학 운영위원회에 공식 보고되어 정책 결정에 반영됩니다.</li>
            <li>• 투표 마감 후 결과는 이 페이지에서 즉시 확인할 수 있습니다.</li>
            <li>• 투표는 중복 참여가 불가능하며, 익명으로 진행됩니다.</li>
          </ul>
        </div>
        </>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message="투표가 성공적으로 제출되었습니다!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  )
}
