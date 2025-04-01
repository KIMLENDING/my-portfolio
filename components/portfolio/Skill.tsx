'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Anton } from 'next/font/google';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
const anton = Anton({ weight: '400', subsets: ['latin'] });

const SkillSection = () => {

    const scrollContents = [
        {
            title: 'Next.js + App Router',
            icon: ['/icons/nextjs.svg'],
            content:
                'Next.js의 App Router 구조를 기반으로 페이지 라우팅, 동적 세그먼트, 레이아웃 구성, SEO 최적화까지 직접 적용해 구조적인 웹 애플리케이션을 개발했습니다. Health Timer App, To-do 리스트, 게임 등 다양한 프로젝트에 활용했습니다.',
        },
        {
            title: 'React Query + Axios',
            icon: ['/icons/reactquery.svg', '/icons/axios.svg',],
            content:
                'React Query로 서버 상태를 관리하며, API 요청은 Axios로 처리했습니다. Health Timer App 사이트에서 사용자 운동 기록을 불러오고, 자동 캐싱 및 리패칭으로 UX를 최적화한 경험이 있습니다.',
        },
        {
            title: 'Zustand로 상태 관리',
            icon: ['/icons/zustand.svg'],
            content:
                '컴포넌트 간 전역 상태 공유가 필요한 경우 React Context보다 더 단순한 Zustand를 선택해 구조를 효율적으로 관리했습니다. 특히 To-do 리스트와 순간 기억력 게임에서 데이터 흐름을 예측 가능하게 유지했습니다.',
        },
        {
            title: 'Tailwind CSS + Shadcn UI',
            icon: ['/icons/tailwindcss.svg', '/icons/shadcnui.svg'],
            content:
                'Tailwind로 유연하게 UI를 구성하고, Shadcn UI를 활용해 일관된 컴포넌트를 빠르게 구성할 수 있습니다. 반응형 디자인과 커스텀 UI 구현 모두에 능숙합니다.',
        },
        {
            title: 'GSAP + Lenis로 인터랙션 구현',
            icon: ['/icons/gsap.svg'],
            content:
                '포트폴리오와 순간 기억력 게임 프로젝트에서 Lenis로 부드러운 스크롤을 적용하고, ScrollTrigger로 각 요소가 등장하는 애니메이션을 구성했습니다. 시각적 몰입감과 UX를 함께 고려한 설계를 할 수 있습니다.',
        },
        {
            title: 'Next Auth + Clerk 로그인 경험',
            icon: ['/icons/nextauth.png', '/icons/clerk.svg'],
            content:
                'Github OAuth를 Next Auth로 연동하여 인증/세션을 관리, Clerk를 통해 사용자 인증/세션을 관리해 본 경험이 있습니다. 각각의 상황에 맞춰 인증 방식을 설계하고 적용할 수 있습니다.',
        },
        {
            title: 'MongoDB',
            icon: ['/icons/mongodb.svg'],
            content:
                'MongoDB를 사용해 유연한 데이터 저장 구조를 설계하고, 데이터를 효율적으로 관리한 경험이 있습니다. ',
        },
    ]



    const sectionRef = useRef(null)

    useEffect(() => {
        const targets = gsap.utils.toArray('.scroll-text') as HTMLElement[]
        console.log(targets)
        targets.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                        // end: 'bottom 45%',//window.innerWidth >= 768 ? (i === 6 ? 'bottom 90%' : 'bottom 30%') : 'bottom 45%',
                        scrub: true, // 스크롤 속도에 따라 애니메이션 속도 조절
                        // markers: true, // 디버깅용 마커 표시
                        onEnterBack: () => { }, // 스크롤이 위로 올라갈 때 다시 애니메이션 실행
                        onLeave: () => { }, // 스크롤이 아래로 내려갈 때 애니메이션 실행

                        refreshPriority: 1, // 스크롤 성능 최적화
                    },
                }
            )
        })
    }, [])


    return (
        <section id="skill" className="min-h-screen w-full py-24 px-10  flex flex-col items-center ">
            <div
                ref={sectionRef}
                className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-12  relative"
            >
                {/* 왼쪽 타이틀 - 데스크탑에서만 sticky */}
                <div className='md:flex md:items-center md:justify-center  sticky top-8 left-3 z-30 my-10 md:my-20'>
                    <h2 className="text-4xl  md:text-7xl lg:text-8xl md:sticky md:top-1/3 md:self-start px-2  " >
                        <div className={`relative md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-1 md:after:h-full md:after:bg-[#32cd32] md:after:-mx-8 md:after:rounded-md 
                    ${anton.className} select-none`}>
                            Skills
                        </div>
                    </h2>
                </div>


                {/* 오른쪽 스크롤 콘텐츠 */}
                <aside className="flex flex-col ">
                    {scrollContents.map((item, i) => (
                        <div key={i} className={`  h-fit my-10 md:my-20 flex px-2  items-center   `}>
                            <div className="scroll-text bg-green-800/65 p-4  rounded-lg opacity-0 shadow-lg">
                                <div className='flex flex-row items-center gap-4 mb-2'>

                                    {item.title && (
                                        <h3 className={` text-2xl font-semibold mb-2 text-[#00ff00] ${anton.className}`}>{item.title}</h3>
                                    )}
                                    {item.icon && item.icon.map((icon, i) => (
                                        <Image key={i} src={icon} alt="icon" width={400} height={400} className="w-12 h-12" />
                                    ))}
                                </div>
                                <p className="text-lg leading-relaxed break-keep">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </aside>
                {/* <div className='min-h-[100vh]'></div> */}
            </div>

        </section>
    );
};

export default SkillSection;
