// 목업 데이터: 시스템 A - 실시간 투명성 대시보드

import { TimelineEvent } from '@/components/Timeline'

// 1. 예산 투명성 데이터
export const budgetData = {
  monthly: [
    { month: '1월', budget: 450000000, spent: 420000000, rate: 93.3 },
    { month: '2월', budget: 450000000, spent: 438000000, rate: 97.3 },
    { month: '3월', budget: 450000000, spent: 445000000, rate: 98.9 },
    { month: '4월', budget: 450000000, spent: 441000000, rate: 98.0 },
    { month: '5월', budget: 450000000, spent: 447000000, rate: 99.3 },
    { month: '6월', budget: 450000000, spent: 449000000, rate: 99.8 },
  ],
  categories: [
    { name: '교육연구비', amount: 1500000000, rate: 45, color: '#2563eb' },
    { name: '학생장학금', amount: 800000000, rate: 24, color: '#16a34a' },
    { name: '시설운영비', amount: 600000000, rate: 18, color: '#f97316' },
    { name: '인건비', amount: 300000000, rate: 9, color: '#9333ea' },
    { name: '기타', amount: 133000000, rate: 4, color: '#78716c' },
  ],
  highlights: [
    { title: '첨단 실험장비 구입', amount: 350000000, items: 15 },
    { title: '학생 장학금 지급', amount: 250000000, students: 250 },
    { title: '도서관 리모델링', amount: 180000000, desc: '열람실 확충' },
  ],
  totalBudget: 5400000000,
  totalSpent: 2640000000,
  executionRate: 48.9,
}

// 2. 연구 성과 데이터
export const researchData = {
  papers: {
    total: 342,
    byMonth: [
      { month: '1월', count: 52, citations: 1240 },
      { month: '2월', count: 48, citations: 1180 },
      { month: '3월', count: 61, citations: 1420 },
      { month: '4월', count: 58, citations: 1350 },
      { month: '5월', count: 64, citations: 1510 },
      { month: '6월', count: 59, citations: 1390 },
    ],
    byField: [
      { name: '공학', count: 142, color: '#2563eb' },
      { name: '농생명과학', count: 98, color: '#16a34a' },
      { name: '자연과학', count: 67, color: '#f97316' },
      { name: '인문사회', count: 35, color: '#9333ea' },
    ],
  },
  patents: {
    applied: 45,
    registered: 28,
    transferred: 12,
    revenue: 340000000,
  },
  highlights: [
    {
      title: '친환경 농업 기술 특허',
      researcher: '농생명과학대학 김교수',
      value: 150000000,
      partner: '㈜그린팜',
    },
    {
      title: 'AI 기반 스마트팜 시스템',
      researcher: '컴퓨터공학과 박교수',
      value: 120000000,
      partner: '농협중앙회',
    },
  ],
}

// 3. 학생 성공 데이터
export const studentData = {
  employment: {
    overall: 78.5,
    byDepartment: [
      { dept: '컴퓨터공학과', rate: 92.3, count: 124 },
      { dept: '경영학과', rate: 85.7, count: 98 },
      { dept: '전자공학과', rate: 88.1, count: 87 },
      { dept: '농생명공학과', rate: 75.2, count: 76 },
      { dept: '기계공학과', rate: 81.4, count: 69 },
    ],
    byIndustry: [
      { industry: 'IT/소프트웨어', rate: 28, color: '#2563eb' },
      { industry: '제조업', rate: 22, color: '#16a34a' },
      { industry: '금융/보험', rate: 15, color: '#f97316' },
      { industry: '공공기관', rate: 18, color: '#9333ea' },
      { industry: '기타', rate: 17, color: '#78716c' },
    ],
  },
  startups: {
    total: 47,
    active: 39,
    survivalRate: 83.0,
    funding: 2400000000,
  },
  scholarships: {
    recipients: 1847,
    totalAmount: 4500000000,
    avgAmount: 2437000,
  },
  satisfaction: 4.2,
}

// 4. 지역 기여 데이터
export const communityData = {
  programs: {
    total: 156,
    participants: 8420,
    byType: [
      { type: '평생교육', count: 45, people: 2340, color: '#2563eb' },
      { type: '기술지원', count: 38, people: 1850, color: '#16a34a' },
      { type: '문화행사', count: 42, people: 3200, color: '#f97316' },
      { type: '봉사활동', count: 31, people: 1030, color: '#9333ea' },
    ],
  },
  economic: {
    employment: 1247,
    localPurchase: 18500000000,
    industryCollaboration: 47,
    revenue: 5600000000,
  },
  facilities: {
    library: 12450,
    sports: 8760,
    cultural: 5420,
    parking: 3200,
  },
  volunteer: {
    hours: 24580,
    participants: 1847,
    projects: 89,
  },
}

// 5. 환경 ESG 데이터
export const environmentData = {
  energy: {
    total: 45600,
    byMonth: [
      { month: '1월', usage: 8200, carbon: 4100 },
      { month: '2월', usage: 7800, carbon: 3900 },
      { month: '3월', usage: 7200, carbon: 3600 },
      { month: '4월', usage: 6800, carbon: 3400 },
      { month: '5월', usage: 7400, carbon: 3700 },
      { month: '6월', usage: 8200, carbon: 4100 },
    ],
    renewable: 18.5,
    reduction: -12.3,
  },
  waste: {
    total: 1240,
    recycling: 856,
    recyclingRate: 69.0,
    byType: [
      { type: '종이', amount: 420, color: '#16a34a' },
      { type: '플라스틱', amount: 285, color: '#2563eb' },
      { type: '유리/금속', amount: 151, color: '#f97316' },
      { type: '일반쓰레기', amount: 384, color: '#78716c' },
    ],
  },
  green: {
    area: 187000,
    trees: 5420,
    species: 127,
  },
}

// 6. 통합 KPI
export const kpiData = {
  overall: {
    trust: 4.3,
    transparency: 4.5,
    satisfaction: 4.2,
    contribution: 4.4,
  },
  comparison: {
    lastYear: [
      { metric: '예산 투명성', current: 4.5, last: 3.8, color: '#2563eb' },
      { metric: '연구 성과', current: 4.4, last: 4.1, color: '#16a34a' },
      { metric: '학생 취업률', current: 4.3, last: 4.0, color: '#f97316' },
      { metric: '지역 기여', current: 4.4, last: 3.9, color: '#9333ea' },
      { metric: 'ESG 경영', current: 4.2, last: 3.7, color: '#78716c' },
    ],
  },
  roi: {
    taxpayerInvestment: 54000000000,
    economicValue: 128000000000,
    ratio: 2.37,
  },
}

// 시스템 B - 시민 참여 데이터

// 1. 투표 데이터
export const voteData = {
  current: {
    id: 'vote-2024-01',
    title: '다음 달 대학 운영 우선순위는?',
    description: '2024년 2월 대학 운영의 우선순위를 투표해주세요',
    deadline: '2024-01-25',
    options: [
      {
        id: 1,
        title: '기후변화 대응 연구',
        description: '탄소중립 기술 개발 및 친환경 에너지 연구',
        votes: 1247,
        percentage: 38.2,
      },
      {
        id: 2,
        title: '지역농업 혁신 연구',
        description: '스마트팜 기술 및 로컬푸드 활성화 연구',
        votes: 1089,
        percentage: 33.4,
      },
      {
        id: 3,
        title: '중소기업 기술지원 연구',
        description: '지역 중소기업 기술 애로사항 해결',
        votes: 926,
        percentage: 28.4,
      },
    ],
    totalVotes: 3262,
    status: 'active',
  },
  demographics: {
    byAge: [
      { age: '20대', votes: 847, percentage: 26.0 },
      { age: '30대', votes: 1089, percentage: 33.4 },
      { age: '40대', votes: 782, percentage: 24.0 },
      { age: '50대 이상', votes: 544, percentage: 16.7 },
    ],
    byRegion: [
      { region: '안성시', votes: 1847, percentage: 56.6 },
      { region: '평택시', votes: 982, percentage: 30.1 },
      { region: '기타', votes: 433, percentage: 13.3 },
    ],
  },
  history: [
    {
      id: 'vote-2023-12',
      title: '2024년 우선 개선 시설은?',
      winner: '도서관 리모델링',
      votes: 2847,
      date: '2023-12-20',
    },
    {
      id: 'vote-2023-11',
      title: '신규 평생교육 프로그램 분야는?',
      winner: 'AI/데이터 분석 교육',
      votes: 2456,
      date: '2023-11-20',
    },
  ],
}

// 2. Q&A 데이터
export const qnaData = [
  {
    id: 'qna-145',
    question: '2023년 연구비 중 가장 큰 비중을 차지한 분야는 무엇인가요?',
    asker: '김**',
    date: '2024-01-15',
    category: '예산',
    views: 847,
    likes: 34,
    status: 'answered',
    answer: {
      content:
        '2023년 연구비 중 가장 큰 비중을 차지한 분야는 "친환경 농업 기술 연구"로, 전체 연구비의 28%인 약 15억원이 투자되었습니다. 주요 연구 내용은 스마트팜 자동화 시스템, 유기농 재배 기술, 탄소중립 농업 기술 개발 등입니다.',
      answerer: '연구지원팀장',
      answerDate: '2024-01-17',
    },
  },
  {
    id: 'qna-144',
    question: '졸업생 취업률이 전년 대비 상승했다고 하는데, 구체적인 수치가 궁금합니다.',
    asker: '이**',
    date: '2024-01-14',
    category: '학생',
    views: 1024,
    likes: 56,
    status: 'answered',
    answer: {
      content:
        '2023년 졸업생 취업률은 78.5%로, 전년(74.2%) 대비 4.3%p 상승했습니다. 특히 컴퓨터공학과(92.3%), 전자공학과(88.1%), 경영학과(85.7%) 순으로 높은 취업률을 기록했습니다.',
      answerer: '취업지원센터장',
      answerDate: '2024-01-15',
    },
  },
  {
    id: 'qna-143',
    question: '지역 주민도 도서관을 이용할 수 있나요? 절차가 궁금합니다.',
    asker: '박**',
    date: '2024-01-13',
    category: '지역기여',
    views: 654,
    likes: 28,
    status: 'answered',
    answer: {
      content:
        '네, 가능합니다! 만 18세 이상 지역 주민(안성, 평택)은 신분증 지참 후 중앙도서관 1층 안내데스크에서 회원증을 발급받으실 수 있습니다. 연회비는 무료이며, 도서 대출(1인 5권, 14일)과 열람실 이용이 가능합니다.',
      answerer: '중앙도서관',
      answerDate: '2024-01-14',
    },
  },
  {
    id: 'qna-142',
    question: '재생에너지 사용 비율을 높이기 위한 구체적인 계획이 있나요?',
    asker: '최**',
    date: '2024-01-12',
    category: '환경',
    views: 423,
    likes: 19,
    status: 'pending',
  },
]

// 3. 아이디어 제안 데이터
export const ideasData = [
  {
    id: 'idea-89',
    title: '캠퍼스 내 전기차 충전소 확대',
    description:
      '현재 2곳뿐인 전기차 충전소를 주요 주차장마다 설치하여 친환경 교통 활성화. 교직원, 학생, 지역주민 모두 이용 가능하게.',
    proposer: '조**',
    date: '2024-01-14',
    category: '환경',
    votes: 847,
    comments: 34,
    status: 'under-review',
  },
  {
    id: 'idea-88',
    title: '중소기업 애로기술 해결 플랫폼',
    description:
      '지역 중소기업이 겪는 기술적 어려움을 대학 연구진과 매칭하는 온라인 플랫폼 구축. 무료 컨설팅부터 유료 R&D 협력까지.',
    proposer: '윤**',
    date: '2024-01-12',
    category: '지역기여',
    votes: 1024,
    comments: 56,
    status: 'adopted',
    adoption: {
      date: '2024-01-20',
      budget: 50000000,
      timeline: '2024년 3월 출시 예정',
    },
  },
  {
    id: 'idea-87',
    title: '학생 창업 멘토링 프로그램 확대',
    description:
      '현재 연 2회인 창업 멘토링을 월 1회로 확대하고, 성공한 동문 창업가를 초청하여 실전 노하우 공유.',
    proposer: '장**',
    date: '2024-01-10',
    category: '학생',
    votes: 654,
    comments: 28,
    status: 'in-discussion',
  },
]

// 7. 전국 대학 비교 데이터
export const universityComparison = {
  transparency: [
    { university: '한경국립대', score: 95, color: '#2563eb' },
    { university: '충남대', score: 88, color: '#78716c' },
    { university: '강원대', score: 85, color: '#78716c' },
    { university: '전북대', score: 82, color: '#78716c' },
    { university: '제주대', score: 79, color: '#78716c' },
  ],
  employment: [
    { university: '한경국립대', rate: 78.5, color: '#f97316' },
    { university: '충남대', rate: 76.2, color: '#78716c' },
    { university: '전북대', rate: 74.8, color: '#78716c' },
    { university: '강원대', rate: 73.1, color: '#78716c' },
    { university: '국립대 평균', rate: 74.2, color: '#e7e5e4' },
  ],
  researchPapers: [
    { university: '한경국립대', papers: 342, color: '#16a34a' },
    { university: '충남대', papers: 318, color: '#78716c' },
    { university: '강원대', papers: 295, color: '#78716c' },
    { university: '전북대', papers: 287, color: '#78716c' },
    { university: '제주대', papers: 264, color: '#78716c' },
  ],
  communityEngagement: [
    { university: '한경국립대', programs: 156, participants: 8420 },
    { university: '충남대', programs: 142, participants: 7680 },
    { university: '전북대', programs: 135, participants: 7240 },
    { university: '강원대', programs: 128, participants: 6890 },
    { university: '제주대', programs: 118, participants: 6340 },
  ],
  esgScore: [
    { category: '재생에너지', 한경국립대: 18.5, 평균: 14.2 },
    { category: '탄소감축', 한경국립대: 12.3, 평균: 8.7 },
    { category: '재활용률', 한경국립대: 69.0, 평균: 58.5 },
    { category: '녹지면적', 한경국립대: 187, 평균: 145 },
  ],
}

// 시스템 C - 정기 공개 보고 데이터

// 1. 월간 리포트
export const monthlyReports = [
  {
    id: 'monthly-2025-10',
    month: '2025년 10월',
    publishedDate: '2025-11-05',
    summary: {
      budget: '예산 집행률 96.8%',
      research: '논문 58편, 특허 출원 6건',
      employment: '가을 채용 박람회 참여 156명',
      community: '평생교육 프로그램 12개 운영',
    },
    downloadUrl: '/reports/monthly/2025-10.pdf',
    views: 1247,
  },
  {
    id: 'monthly-2025-09',
    month: '2025년 9월',
    publishedDate: '2025-10-05',
    summary: {
      budget: '예산 집행률 94.5%',
      research: '논문 54편, 특허 등록 5건',
      employment: '학생 창업 지원 23개 기업',
      community: '지역 중소기업 기술지원 18건',
    },
    downloadUrl: '/reports/monthly/2025-09.pdf',
    views: 2134,
  },
  {
    id: 'monthly-2025-08',
    month: '2025년 8월',
    publishedDate: '2025-09-05',
    summary: {
      budget: '예산 집행률 92.1%',
      research: '논문 48편, 기술이전 2건',
      employment: '여름 인턴십 프로그램 89명',
      community: '여름 청소년 과학캠프 320명',
    },
    downloadUrl: '/reports/monthly/2025-08.pdf',
    views: 2456,
  },
  {
    id: 'monthly-2025-07',
    month: '2025년 7월',
    publishedDate: '2025-08-05',
    summary: {
      budget: '예산 집행률 89.7%',
      research: '논문 51편, 특허 출원 4건',
      employment: '취업률 조사 진행 중',
      community: '평생교육 여름학기 8개 운영',
    },
    downloadUrl: '/reports/monthly/2025-07.pdf',
    views: 2789,
  },
  {
    id: 'monthly-2025-06',
    month: '2025년 6월',
    publishedDate: '2025-07-05',
    summary: {
      budget: '예산 집행률 95.3%',
      research: '논문 56편, 특허 등록 3건',
      employment: '졸업생 취업률 81.2% 달성',
      community: '지역사회 봉사활동 245명 참여',
    },
    downloadUrl: '/reports/monthly/2025-06.pdf',
    views: 3024,
  },
  {
    id: 'monthly-2025-05',
    month: '2025년 5월',
    publishedDate: '2025-06-05',
    summary: {
      budget: '예산 집행률 93.8%',
      research: '논문 52편, 기술이전 3건',
      employment: '봄 채용 박람회 참여 142명',
      community: '평생교육 프로그램 10개 운영',
    },
    downloadUrl: '/reports/monthly/2025-05.pdf',
    views: 3247,
  },
]

// 2. 분기별 타운홀
export const townhallMeetings = [
  {
    id: 'townhall-2025-q4',
    quarter: '2025년 4분기',
    date: '2025-12-19',
    location: '대학본부 대강당 + 온라인 생중계',
    agenda: [
      '2025년 연간 성과 발표',
      '2026년 운영 계획',
      '시민 질의응답',
    ],
    status: 'upcoming',
    registrations: 412,
  },
  {
    id: 'townhall-2025-q3',
    quarter: '2025년 3분기',
    date: '2025-09-26',
    location: '대학본부 대강당 + 온라인 생중계',
    agenda: ['2025년 3분기 주요 성과 발표', 'AI 연구센터 확장 계획', '시민 질의응답'],
    status: 'completed',
    participants: 587,
    videoUrl: 'https://youtube.com/watch?v=example',
    views: 5234,
  },
]

// 3. 연간 성과보고서
export const annualReports = [
  {
    id: 'annual-2024',
    year: '2024년',
    publishedDate: '2025-01-15',
    highlights: [
      '연구비 62억원 유치 (전년 대비 14.8% 증가)',
      '취업률 81.2% 달성 (전국 국립대 평균 76.8%)',
      '지역 경제 기여 145억원',
      '탄소배출 15.7% 감축',
    ],
    taxpayerROI: '1원당 2.58원의 가치 창출',
    downloadUrl: '/reports/annual/2024.pdf',
    views: 9247,
  },
  {
    id: 'annual-2023',
    year: '2023년',
    publishedDate: '2024-01-15',
    highlights: [
      '연구비 54억원 유치',
      '취업률 78.5%',
      '지역 경제 기여 98억원',
      '탄소배출 8.5% 감축',
    ],
    taxpayerROI: '1원당 2.14원의 가치 창출',
    downloadUrl: '/reports/annual/2022.pdf',
    views: 7240,
  },
]

// 8. 타임라인 데이터
export const timelineData: TimelineEvent[] = [
  {
    id: 'timeline-2025-10-28',
    date: '2025-10-28',
    category: 'budget',
    type: 'milestone',
    title: '3분기 예산 집행률 96.8% 달성',
    description: '첨단 AI 연구장비 구입(4.2억원), 학생 장학금 지급(3.1억원) 등 주요 사업 정상 집행',
    icon: '💰',
    color: '#2563eb',
    importance: 'high',
  },
  {
    id: 'timeline-2025-10-15',
    date: '2025-10-15',
    category: 'research',
    type: 'achievement',
    title: 'AI 기반 스마트팜 특허 기술이전',
    description: '컴퓨터공학과 박교수 연구팀의 차세대 스마트팜 시스템이 농협중앙회에 1.8억원에 기술이전 성공',
    icon: '🏆',
    color: '#16a34a',
    importance: 'high',
    link: '/dashboard/research',
  },
  {
    id: 'timeline-2025-10-08',
    date: '2025-10-08',
    category: 'community',
    type: 'event',
    title: '지역 중소기업 AI 기술지원 플랫폼 구축 확정',
    description: '시민 아이디어 제안이 채택되어 7,500만원 예산으로 12월 출시 예정',
    icon: '🤝',
    color: '#9333ea',
    importance: 'medium',
    budget: 75000000,
  },
  {
    id: 'timeline-2025-10-01',
    date: '2025-10-01',
    category: 'students',
    type: 'achievement',
    title: '2024년 취업률 81.2% 달성',
    description: '전국 국립대 평균(76.8%) 대비 4.4%p 높은 취업률 기록. 컴퓨터공학과 94.1%로 최고치',
    icon: '🎓',
    color: '#f97316',
    importance: 'high',
    stats: { rate: 81.2, increase: 4.4 },
  },
  {
    id: 'timeline-2025-09-26',
    date: '2025-09-26',
    category: 'transparency',
    type: 'event',
    title: '2025 3분기 타운홀 미팅 개최',
    description: '587명 참여, 2025년 3분기 성과 발표 및 AI 연구센터 확장 계획 공유. 온라인 조회수 5,234회',
    icon: '🎤',
    color: '#0891b2',
    importance: 'medium',
    participants: 587,
    views: 5234,
  },
  {
    id: 'timeline-2025-09-20',
    date: '2025-09-20',
    category: 'community',
    type: 'decision',
    title: 'AI 연구센터 신축 시민투표 확정',
    description: '3,124명 투표 참여로 AI 연구센터 신축(2.5억원)이 우선 사업으로 확정',
    icon: '📚',
    color: '#9333ea',
    importance: 'high',
    votes: 3124,
    budget: 250000000,
  },
  {
    id: 'timeline-2025-09-15',
    date: '2025-09-15',
    category: 'environment',
    type: 'achievement',
    title: '재생에너지 사용률 24.8% 달성',
    description: '태양광 패널 추가 설치로 전년 대비 6.3%p 상승. 2026년 목표 30% 달성 가능',
    icon: '🌱',
    color: '#16a34a',
    importance: 'medium',
    stats: { current: 24.8, increase: 6.3, target: 30 },
  },
  {
    id: 'timeline-2025-09-01',
    date: '2025-09-01',
    category: 'research',
    type: 'achievement',
    title: '친환경 에너지 기술 특허 기술이전',
    description: '공과대학 김교수 연구팀의 친환경 에너지 저장 기술이 ㈜그린테크에 2.2억원에 기술이전',
    icon: '🔬',
    color: '#16a34a',
    importance: 'high',
    amount: 220000000,
  },
  {
    id: 'timeline-2025-08-20',
    date: '2025-08-20',
    category: 'students',
    type: 'decision',
    title: 'AI/빅데이터 평생교육 프로그램 확대',
    description: '시민투표 2,847명 참여로 신규 평생교육 프로그램 분야 확대 결정',
    icon: '💻',
    color: '#f97316',
    importance: 'medium',
    votes: 2847,
  },
  {
    id: 'timeline-2025-08-01',
    date: '2025-08-01',
    category: 'environment',
    type: 'milestone',
    title: '탄소배출 15.7% 감축 목표 달성',
    description: '에너지 효율화 및 재생에너지 확대로 전년 대비 탄소배출 15.7% 감축 성공',
    icon: '♻️',
    color: '#16a34a',
    importance: 'high',
    stats: { reduction: 15.7 },
  },
  {
    id: 'timeline-2025-07-15',
    date: '2025-07-15',
    category: 'budget',
    type: 'milestone',
    title: '연구비 62억원 유치 달성',
    description: '2025년 외부 연구비 유치 목표 62억원 조기 달성. 전년 대비 14.8% 증가',
    icon: '💸',
    color: '#2563eb',
    importance: 'high',
    amount: 6200000000,
    increase: 14.8,
  },
  {
    id: 'timeline-2025-06-01',
    date: '2025-06-01',
    category: 'students',
    type: 'event',
    title: '학생 창업 기업 45개 운영 중',
    description: '학생 창업 기업 생존률 86.7%로 전국 평균 초과. 누적 투자 유치 32억원',
    icon: '🚀',
    color: '#f97316',
    importance: 'medium',
    stats: { total: 52, active: 45, survivalRate: 86.7, funding: 3200000000 },
  },
]
