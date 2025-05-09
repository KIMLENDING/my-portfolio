export const project = {
    id: 'h-helper',
    title: 'H-Helper',
    githubLink: 'https://github.com/KIMLENDING/health-helper-app',
    vercelLink: 'https://health-helper-app.vercel.app/',
    description:
        '운동 계획 생성부터 수행 기록, 분석까지 체계적으로 관리할 수 있는 피트니스 웹 앱입니다.',
    period: {
        v1: '2024/11/06 - 2024/12/19',
        v2: '2025/03/25 - 2025/04/30',
    },
    features: [
        '운동 계획 생성 및 수행 기록',
        '세트별 중량 및 반복 수 데이터 분석',
        '주간 운동 히스토리 차트 제공',
        '서버 컴포넌트 기반 React Query 프리패치',
    ],
    techStack: [
        'Next.js 15 (App Router)',
        'TypeScript',
        'MongoDB',
        'React Query',
        'TailwindCSS 4.0',
        'Shadcn-UI',
        'Vercel',
        'NextAuth.js',
        'Zod',

    ],
    challenges: [
        '동적 라우팅 기반 CRUD 페이지 구조 설계',
        '서버와 클라이언트 간 효율적인 상태 동기화',
        '반응형 모달 및 드로어 통합 처리',
        '운동 세트별 자동 시간 계산 로직 구현',
    ],
};

const Contents = [

    {
        githubLink: 'https://github.com/KIMLENDING/memory-game',
        vercelLink: 'https://memory-game-lyart-phi.vercel.app/',
        title: 'Moment-Memory-Game',
    },
    {
        githubLink: 'https://github.com/KIMLENDING/my-portfolio',
        vercelLink: 'https://my-portfolio-kimlendings-projects.vercel.app/',
        title: 'Portfolio-Website',
    },
]