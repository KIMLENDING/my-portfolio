'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Anton } from 'next/font/google';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import TitleGsap from './layout/TitleGsap';
gsap.registerPlugin(ScrollTrigger);
const anton = Anton({ weight: '400', subsets: ['latin'] });
const scrollContents = [
    {
        title: 'Next.js + App Router',
        icon: ['/icons/nextjs.svg'],
        content:
            'Next.js의 App Router 구조를 기반으로 페이지 라우팅, 동적 세그먼트, 레이아웃 구성, SEO 최적화까지 직접 적용해 구조적인 웹 애플리케이션을 개발했습니다. H-Helper App, To-do 리스트, 순간 기억력 게임 등 다양한 프로젝트에 활용했습니다.',
    },
    {
        title: 'React Query',
        icon: ['/icons/reactquery.svg'],
        content:
            'React Query로 서버 상태를 관리했습니다. H-Helper App 사이트에서 사용자 운동 기록을 불러오고, 자동 캐싱 및 리패칭으로 UX를 최적화한 경험이 있습니다.',
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
        title: 'Next Auth',
        icon: ['/icons/nextauth.png'],
        content:
            'Google, GitHub OAuth를 연동하여 인증/세션을 관리해 본 경험이 있습니다. Credentials 로그인도 함께 구현했으며, 사용자 정보를 MongoDB에 저장하고, JWT 기반으로 role, provider 같은 사용자 메타데이터를 세션에 포함시켜 클라이언트에서 인증 상태에 따라 유연하게 대응할 수 있도록 구성했습니다.',
    },
    {
        title: 'MongoDB',
        icon: ['/icons/mongodb.svg'],
        content:
            'MongoDB를 사용해 유연한 데이터 저장 구조를 설계하고, 데이터를 효율적으로 관리한 경험이 있습니다. 특히 Health Timer App에서 운동 기록을 populate하는 과정에서 MongoDB의 장점을 활용했습니다.',
    },
];
const SkillSection = () => {
    const sectionRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        // 스킬 아이템 애니메이션
        const skillItems = gsap.utils.toArray('.skill-card') as HTMLElement[];
        skillItems.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        end: 'bottom 70%',
                        toggleActions: 'play none none reverse',
                        scrub: 0.3,
                    },
                }
            );
        });
    }, []);

    return (
        <section
            id="skill"
            ref={sectionRef}
            className="min-h-screen w-full py-32 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-black"
        >
            <div className="max-w-6xl mx-auto relative">
                {/* 섹션 제목 */}
                <TitleGsap sectionRef={sectionRef} title={'Skill'} description={'주로 사용하는 스킬'} />
                {/* 스킬 그리드 */}

                <div
                    ref={skillsRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {scrollContents.map((skill, i) => (
                        <div
                            key={i}
                            className="skill-card relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 transition-all overflow-hidden
                                hover:shadow-lg hover:shadow-green-500/20 group
                                hover:scale-105 duration-300 ease-in-out
                            "
                        >
                            {/* 배경 액센트 */}
                            {/* <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-300 rounded-l"></div>
                            <div className="absolute top-0 right-0 h-1 w-1/3 bg-gradient-to-r from-transparent to-green-500/50 rounded-tr"></div> */}

                            {/* 제목과 아이콘 */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex shrink-0 gap-2">
                                    {skill.icon && skill.icon.map((icon, iconIdx) => (
                                        <div key={iconIdx} className="relative w-10 h-10 bg-gray-700 rounded-lg p-1.5 flex items-center justify-center shadow-md">
                                            <Image
                                                src={icon}
                                                alt={`${skill.title} icon`}
                                                width={30}
                                                height={30}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <h3 className={`${anton.className} text-xl md:text-2xl font-bold text-green-400 truncate`}>
                                    {skill.title}
                                </h3>
                            </div>

                            {/* 설명 */}
                            <p className="text-gray-300 text-base leading-relaxed break-keep">
                                {skill.content}
                            </p>

                            {/* 배경 글로우 효과 */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;