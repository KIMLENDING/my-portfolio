export const project = [{
    id: 'H-Helper',
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

},
{
    id: 'Portfolio-Website',
    title: 'Portfolio-Website',
    githubLink: 'https://github.com/KIMLENDING/my-portfolio',
    vercelLink: 'https://my-portfolio-kimlendings-projects.vercel.app/',
    description: '프론트엔드 개발자로서의 역량과 프로젝트를 소개하기 위한 포트폴리오 웹사이트입니다. 사용자 경험을 중시하는 인터랙티브한 웹 경험을 제공합니다.',
    period: {
        v1: '2025/03/25 - 2025/05/10',
    },
    summary: "프론트엔드 개발자 포트폴리오 웹사이트로, GSAP를 활용한 인터랙티브한 애니메이션과 시각적 요소들이 특징입니다. 마우스 인터랙션, 파티클 배경, 스무스 스크롤 등을 통해 몰입도 높은 사용자 경험을 제공합니다.",
    mainFeatures: [
        "인터랙티브한 히어로 섹션: GSAP를 활용한 텍스트 애니메이션과 타이밍 효과",
        "마우스 인터랙션: 마우스 움직임에 반응하는 라이트 이펙트와 요소 반전 효과",
        "파티클 배경: 동적인 배경 효과로 시각적 경험 향상",
        "프로젝트 쇼케이스: 개발한 프로젝트들의 상세 정보를 소개",
        "스킬 섹션: 기술 스택과 개발 역량을 시각적으로 표현"
    ],
    techChallenges: [
        {
            title: "GSAP 애니메이션 최적화",
            description: "텍스트 애니메이션과 스크롤 기반 효과를 효율적으로 구현하여 부드러운 전환 경험 제공",
        },
        {
            title: "마우스 인터랙션 효과 구현",
            description: "커스텀 훅과 이벤트 리스너를 활용하여 마우스 포인터를 따라다니는 라이트 효과와 반전 효과 구현",
        },
        {
            title: "Lenis 스크롤 라이브러리 적용",
            description: "부드러운 스크롤 경험을 위해 Lenis 라이브러리를 활용하여 스크롤 성능 최적화",
        },
        {
            title: "파티클 배경 구현",
            description: "`@tsparticles/react` 라이브러리를 활용하여 동적인 파티클 배경을 구현했습니다. 커스텀 설정을 통해 파티클의 크기, 속도, 색상 등을 조정하여 원하는 시각적 효과를 제공했습니다.",
        },
        {
            title: "반응형 레이아웃 설계",
            description: "TailwindCSS를 활용한 다양한 화면 크기에 최적화된 레이아웃으로 모바일부터 데스크탑까지 일관된 경험 제공",
        },
    ],

    stack: [
        'Next.js (App Router)',
        'TypeScript',
        'TailwindCSS',
        'GSAP',
        'Lenis',
        'Shadcn-UI',
        'Vercel'
    ],
},
{
    id: 'Moment-Memory-Game',
    title: '순간 기억력 테스트 게임',
    summary:
        '숫자가 나타나고, 그 숫자를 순서대로 클릭하여 기억력을 테스트하는 게임입니다. 난이도가 점차 상승하며, 점수를 랭킹에 등록해 다른 사용자와 경쟁할 수 있습니다.',
    period: {
        v1: '2024.02.21 ~ 2024.02.24',
    },
    stack: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Zustand',
        'GSAP',
        'Redis',
        'Vercel',
    ],
    mainFeatures: [
        '숫자를 순서대로 클릭하는 기억력 테스트 게임',
        '레벨 상승에 따라 숫자 개수 증가 및 난이도 상승',
        '점수 기록 및 랭킹 등록 기능',
        '모바일/데스크탑 반응형 UI',
        '랭킹 결과 공유 기능 (URL 복사)',
    ],
    techChallenges: [
        {
            title: '숫자 순서 판단 및 UI 피드백 구현',
            description:
                '사용자가 누른 숫자의 순서와 정답 배열을 비교하여 즉각적인 시각 피드백과 실패 처리 로직을 구현하는 데 집중했습니다.',
        },
        {
            title: 'Zustand로 게임 상태 관리 최적화',
            description:
                '게임 흐름(시작/클리어/실패 상태, 점수, 레벨 등)을 전역 상태로 관리하면서도, 각 컴포넌트의 리렌더링 최소화를 고려했습니다.',
        },
        {
            title: 'GSAP로 부드러운 애니메이션 효과 제공',
            description:
                '숫자 등장 및 사라짐 애니메이션을 GSAP 타임라인 기반으로 구성하여, 난이도 상승 시에도 자연스러운 인터랙션을 유지했습니다.',
        },
        {
            title: 'Redis를 활용한 랭킹 저장 및 조회',
            description:
                '랭킹 등록 및 실시간 랭킹 조회를 Redis로 처리하여 속도와 간결함을 확보했습니다.',
        },
    ],
    schemaOverview: {
        GameSession: '게임 세션 정보 (이름, 점수, 레벨, 시간)',
    },
    githubLink: 'https://github.com/KIMLENDING/memory-game',
    vercelLink: 'https://memory-game-lyart-phi.vercel.app/',
}

]

