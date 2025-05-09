'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import TitleGsap from './layout/TitleGsap';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);
const ProjectSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    const [activeProject, setActiveProject] = useState(0);

    const scrollContents = [
        {
            url: '/H-Helper',
            thumbnail: '/img/h-helper.png',
            project: 'H-Helper App',
            tags: ['Next.js', 'React Query', 'UI/UX Design'],
            content: '운동 기록을 관리하는 웹 애플리케이션으로, Next.js와 React Query를 활용해 서버 상태를 관리했습니다. 사용자 경험을 고려한 UI/UX 설계로, 운동 계획, 운동 히스토리, 운동 데이터 분석 등 여러 기능을 쉽게 사용할 수 있습니다.'

        },
        {
            url: '/Moment-Memory-Game',
            thumbnail: '/img/game.png',
            project: 'Moment Memory Game',
            tags: ['GSAP', 'Animation'],
            content: '순간 기억력 게임으로, GSAP를 활용해 부드러운 애니메이션 효과를 구현했습니다.  '
        },
        {
            url: '/Portfolio-Website',
            thumbnail: '/img/portfolio.png',
            project: 'Portfolio Website',
            tags: ['React', 'Tailwind CSS', 'Responsive Design'],
            content: '개인 포트폴리오 웹사이트로, React와 Tailwind CSS를 활용해 반응형 디자인을 구현했습니다. 모던한 UI와 부드러운 애니메이션으로 사용자 경험을 개선했습니다.'
        },
    ];

    useEffect(() => {
        // 타이틀 애니메이션
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse',
                    scrub: 0.5,

                }
            }
        );

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
        <section ref={sectionRef} id='project' className='min-h-screen w-full py-24 px-4 md:px-10 bg-zinc-900'>
            <div
                className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-12"
            >
                {/* 왼쪽 타이틀 */}
                <div className='md:sticky md:top-24 md:self-start md:h-[calc(100vh-12rem)] flex flex-col justify-between'>
                    <TitleGsap sectionRef={sectionRef} title={'Projects'} description={''} />

                    <div className="hidden md:flex flex-col space-y-6 pl-6">
                        {scrollContents.map((item, idx) => (
                            <button
                                key={idx}
                                className={`text-left transition-all duration-300 ${activeProject === idx ? 'text-green-400 font-bold' : 'text-gray-400 hover:text-green-300'}`}
                                onClick={() => setActiveProject(idx)}
                            >
                                <span className="text-xl">{item.project}</span>
                                {activeProject === idx && (
                                    <span className="block h-1 w-12 bg-green-500 mt-2 rounded-full"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 오른쪽 프로젝트 콘텐츠 */}
                <div className="flex flex-col space-y-16 md:space-y-24 ">
                    {scrollContents.map((item, i) => (
                        <div
                            key={i}
                            className={`w-full group transition-all duration-500 transform ${activeProject === i ? 'md:scale-105' : 'md:opacity-70'
                                }`}
                            onMouseEnter={() => setActiveProject(i)}
                        >
                            <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-xl hover:shadow-green-500/20 transition-all duration-300">
                                {/* 썸네일 이미지 */}
                                <div className="relative overflow-hidden">
                                    <div className="aspect-video bg-zinc-700 group-hover:bg-zinc-600 transition-all duration-500">
                                        <Image
                                            src={item.thumbnail}
                                            alt={item.project}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                                    <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                                        {item.project}
                                    </h3>
                                </div>

                                {/* 프로젝트 내용 */}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.content}
                                    </p>
                                    <div className="mt-6 flex justify-end">
                                        <Link href={item.url} className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                                            자세히 보기
                                            <ArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;