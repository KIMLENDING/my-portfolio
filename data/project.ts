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
    summary: "운동 루틴 생성부터 기록, 분석까지 지원하는 피트니스 웹앱입니다. 사용자 맞춤형 루틴과 수행 기록 기반 통계를 제공하며, SSR과 동적 import를 통한 퍼포먼스 최적화, 반응형 UI가 특징입니다.",
    mainFeatures: [
        "운동 루틴 생성 및 편집 (세트 수, 반복, 중량 설정)",
        "운동 세션 기록 및 세트별 수행 정보 저장",
        "주간 대시보드: 세션 진행률 및 완료율 시각화",
        "운동 데이터 분석: 부위별 수행 빈도, 중량 변화 추이 등",
    ],
    techChallenges: [
        {
            title: "React Query Hydration + SSR 최적화",
            description: "서버에서 dehydrate 후 HydrationBoundary로 클라이언트 재사용 → 초기 로딩 개선 및 일관성 유지",
        },
        {
            title: "동적 임포트를 통한 번들 최적화",
            description: "Sidebar, Drawer 등을 `next/dynamic`으로 지연 로딩 → 모바일 UX 최적화",
        },
        {
            title: "반응형 Drawer/Dialog 통합 구조",
            description: "Shadcn-UI 컴포넌트를 기반으로 모바일/데스크탑에 맞는 UI 자동 전환",
        },
        {
            title: "MongoDB 트랜잭션 처리",
            description: "회원 탈퇴 시 관련 도큐먼트 일괄 삭제를 트랜잭션으로 처리 → 데이터 정합성 확보",
        },
    ],
    schemaOverview: {
        User: "이메일, 닉네임, 소셜 로그인 정보 포함. provider 조합으로 복합 인덱스 구성.",
        Exercise: "운동 이름, 부위, 설명, 영상 URL, 태그 포함.",
        ExercisePlan: "사용자 루틴 정의 (운동 항목 + 세트 구성).",
        ExerciseSession: "실제 수행 기록. 세트별 reps, weight, endTime 저장. 상태 추적 필드 포함.",
    },
    stack: [
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