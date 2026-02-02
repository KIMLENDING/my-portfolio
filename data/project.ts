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
    vercelLink: 'https://memory-game-ashy-six.vercel.app/',
}

]

export const workExperiences = [
    {
        id: 'quantus',
        company: '퀀터스테크놀로지스',
        role: 'Frontend Engineer',
        period: '2025.08.26 - 2026.01.31',
        environment: [
            'WebView 기반 모바일 앱(iOS, Android)',
            'React Native(iOS, Android)',
        ],
        summary:
            'WebView 기반 서비스와 React Native 앱에서 프론트엔드 개발을 담당하며, 플랫폼별 렌더링/성능 이슈를 분석하고 해결했습니다.',
        responsibilities: [
            'WebView 환경 프론트엔드 개발 및 유지보수',
            '애니메이션, 인터랙션 UI 구현',
            'iOS / Android 플랫폼 간 UI 및 동작 차이 대응',
        ],
        techStack: [
            'React',
            'Next.js',
            'TypeScript',
            'TailwindCSS',
            'React Native',
        ],
        relatedCaseStudies: [
            'webview-marquee-speed-issue',
            'html2canvas-ios-text-blur',
        ],
    },
];



export const caseStudies = [
    {
        id: 'html2canvas-ios-text-blur',
        title: 'iOS WebView에서 html2canvas 텍스트 화질 저하 이슈 해결',
        context: {
            company: '퀀터스테크놀로지스',
            role: 'Frontend Developer',
            platform: ['iOS WebView', 'Android WebView'],
        },
        situation:
            '웹뷰 기반 앱에서 html2canvas를 이용해 특정 HTML 영역을 이미지로 캡쳐하여 저장 및 공유하는 기능을 개발했습니다.',
        problem: [
            'Android에서는 정상 동작',
            'iOS 실제 기기(TestFlight)에서 캡쳐 이미지의 텍스트만 깨짐',
            'iOS 시뮬레이터 및 로컬 개발 환경에서는 재현되지 않음',
        ],
        hypothesis: [
            'iOS WebView 렌더링 방식 차이',
            '해상도(scale) 문제',
            '폰트 로딩 또는 렌더링 타이밍 문제',
        ],
        investigation: [
            '시뮬레이터 vs TestFlight 결과 이미지 비교',
            '아이콘은 선명하고 텍스트만 깨지는 현상 확인',
            '렌더링 결과물 자체의 문제로 판단',
            'iOS / Android WebView 차이 조사',
        ],
        rootCause:
            '폰트 로딩 방식(display: swap)으로 인해 캡쳐 시점에 fallback 폰트가 렌더링된 상태에서 이미지가 생성됨',
        solution: [
            '웹폰트 설정에서 font-display를 swap → block으로 변경',
            '폰트가 완전히 로드된 이후에만 캡쳐되도록 보장',
        ],
        result: [
            'iOS 실제 기기 환경에서 텍스트 화질 문제 해결',
            'Android / iOS 결과 이미지 일관성 확보',
        ],
        takeaways: [
            '시뮬레이터와 실제 배포 환경은 다를 수 있다',
            '렌더링 타이밍은 캡쳐 로직에서 매우 중요하다',
            '폰트 로딩 전략이 UX뿐 아니라 기능 품질에도 영향을 준다',
        ],
        techStack: [
            'html2canvas',
            'iOS WKWebView',
            'Android WebView',
            'Web Font',
        ],
    },
    {
        id: 'webview-marquee-speed-issue',
        title: 'WebView 환경에서 마퀴 애니메이션 속도가 달랐던 문제 해결',
        context: {
            company: '퀀터스테크놀로지스',
            role: 'Frontend Developer',
            platform: ['iOS WebView', 'Android WebView'],
        },

        situation:
            '웹뷰 기반 앱에서 동일한 마퀴(무한 스크롤) 애니메이션을 iOS와 Android에서 공통으로 제공해야 했습니다.',

        problem: [
            '동일한 코드임에도 iOS와 Android WebView에서 마퀴 애니메이션 속도가 다르게 보임',
            'CSS 기반 애니메이션 사용 중',
            '디자인 요구사항상 두 플랫폼의 시각적 속도 차이는 허용되지 않음',
        ],

        hypothesis: [
            'WebView별 렌더링 성능 차이',
            '이미지 로딩 완료 시점 차이',
            '컨테이너 width 계산 타이밍 문제',
        ],

        investigation: [
            'iOS / Android WebView에서 애니메이션 시작 시점 비교',
            '마퀴 내부 이미지 로딩 완료 전후 속도 변화 관찰',
            '초기 width 값이 플랫폼마다 다르게 계산되는 것을 확인',
            'CSS animation이 고정 시간 기반이라 실제 픽셀 이동량이 달라지는 문제로 판단',
        ],

        rootCause:
            '이미지 로딩 시점 차이로 인해 마퀴 컨테이너의 실제 width가 플랫폼별로 다르게 계산되었고, CSS 기반 시간 애니메이션이 이를 보정하지 못함',

        solution: [
            'ResizeObserver를 사용해 실제 콘텐츠 width 변경 시점을 감지',
            'CSS animation 대신 requestAnimationFrame 기반 픽셀 단위 이동 로직으로 변경',
            '초당 이동 거리(px/sec)를 기준으로 애니메이션 속도를 통일',
        ],

        result: [
            'iOS / Android WebView에서 동일한 체감 속도의 마퀴 애니메이션 구현',
            '이미지 로딩 타이밍과 무관한 안정적인 동작 확보',
        ],

        takeaways: [
            'WebView 환경에서는 렌더링 완료 시점을 명시적으로 다뤄야 한다',
            '시간 기반 애니메이션은 플랫폼 차이를 숨기지 못할 수 있다',
            '픽셀 기반 RAF 애니메이션은 플랫폼 간 일관성을 확보하는 데 유리하다',
        ],

        techStack: [
            'WebView',
            'ResizeObserver',
            'requestAnimationFrame',
            'JavaScript Animation',
        ],
    },
];

