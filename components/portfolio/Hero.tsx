'use client'
import React, { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { Doto } from 'next/font/google';
import Link from 'next/link';

const doto = Doto({ weight: ['600', '800'], subsets: ['latin'] });

// 상수로 분리하여 재사용성 높이기
const LETTER_STYLE = { fontSize: 'clamp(1rem, 12vw, 20vh)' };
const GREEN_COLORS = {
    t1: '#00ff00',   // Green
    t2: '#32cd32',   // LimeGreen
    t3: '#3cb371',   // MediumSeaGreen
    t4: '#2e8b57',   // SeaGreen
    t5: '#228b22',   // ForestGreen
    t6: '#006400',   // DarkGreen
    t7: '#00ff7f',   // SpringGreen
    t8: '#00fa9a',   // MediumSpringGreen
    t9: '#7fff00'    // Chartreuse
};

const HeroSection = () => {
    const devRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    // 반복되는 코드를 함수화
    const createFrontendAnimation = useCallback((timeline: gsap.core.Timeline, vh: number) => {
        // 홀수 인덱스 애니메이션 (f,o,t,E,d)
        const oddIndices = [1, 3, 5, 7, 9];
        oddIndices.forEach((idx, i) => {
            const yTarget = idx === 7 ? 5 : 0; // 특수 케이스 t7
            timeline.fromTo(`#t${idx}`,
                { yPercent: 50, opacity: 0 },
                { yPercent: yTarget, opacity: 1, y: 0, duration: 0.5, delay: i === 0 ? 0.2 : 0 },
                i === 0 ? undefined : '-=0.5'
            );
        });

        // 짝수 인덱스 애니메이션 (r,n,-,n)
        const evenIndices = [2, 4, 6, 8];
        evenIndices.forEach((idx, i) => {
            timeline.fromTo(`#t${idx}`,
                { y: vh / 2, opacity: 0 },
                { yPercent: 10, opacity: 1, duration: 0.5, delay: i === 0 ? 0.5 : 0 },
                '-=0.5'
            );
        });

        // 커튼 열기
        timeline.to('#커튼', { yPercent: -100, duration: 0.8, delay: 0.5 });

        // 짝수 요소 추가 애니메이션
        evenIndices.forEach((idx, i) => {
            const yTarget = idx === 4 ? -10 : 10; // 특수 케이스 t4
            if (idx === 2) {
                timeline.to(`#t${idx}`, { yPercent: 0, opacity: 1, y: 0, duration: 0.5 }, '-=0.8');
            } else {
                timeline.to(`#t${idx}`, { yPercent: yTarget, opacity: 1, y: 0, duration: 0.5 }, '-=0.8');
            }
        });

        // 텍스트 컬러 변경 (흰색으로)
        for (let i = 1; i <= 9; i++) {
            const position = i === 1 ? '-=0.4' : '-=0.5';
            timeline.to(`#t${i}`, { duration: 0.5, color: '#ffffff' }, position);
        }

        // 텍스트 컬러 변경 (그린으로)
        for (let i = 1; i <= 9; i++) {
            const position = '-=0.4';
            const delay = i === 1 ? 0.5 : 0;
            timeline.to(`#t${i}`, { duration: 0.5, color: GREEN_COLORS[`t${i}` as keyof typeof GREEN_COLORS], delay }, position);
        }

        return timeline;
    }, []);

    useEffect(() => {
        const vh = window.innerHeight; // 뷰포트 높이

        // 애니메이션을 실행하기 위해 DOM이 로드되었을 때 실행
        const mainTimeline = gsap.timeline({
            onComplete: () => {
                const devSpan = devRef.current?.querySelectorAll('span');
                if (!devSpan) return;
                const devSpanArray = Array.from(devSpan).slice(0, -1);
                gsap.timeline()
                    .fromTo(devSpanArray, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.1 })
                    .fromTo(devSpan[devSpan.length - 1], { opacity: 0, y: 10 }, { opacity: 1, y: -20, duration: 0.8, repeat: -1, yoyo: true, ease: 'power2.out' });
            },
        });

        // 함수를 호출하여 애니메이션 생성
        createFrontendAnimation(mainTimeline, vh);

    }, [createFrontendAnimation]);

    useEffect(() => {
        // 텍스트 애니메이션 (위로 올라가고 사라지기 아래에서 나타나기기) 반복
        if (!textRefs.current.length) return;
        gsap.set(textRefs.current, { opacity: 0, y: 50, });
        const timeline = gsap.timeline({ repeat: -1, delay: 4 }); // 무한 반복
        textRefs.current.forEach((text) => {
            timeline.to(text, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
            }).to(text, {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: 'power2.in',
                delay: 2
            });
        });
    }, []);

    useEffect(() => {
        // GitHub 링크 애니메이션
        const github = document.getElementById('github');
        if (!github) return;
        gsap.set(github, { y: 50 });

        gsap.to(github, { opacity: 1, y: 0, duration: 1, delay: 5, ease: 'power2.out' });
    }, []);


    return (
        <section id='hero' className='w-full min-h-screen relative flex flex-col items-center text-black transparent pointer-events-none '>
            <div id='커튼' className='absolute top-0 left-0 flex flex-col w-full min-h-screen bg-green-500 ' />            <div className="mt-20 flex justify-center w-full gap-2 md:gap-4 px-4 ">
                {/* 문자 배열로 효율적으로 렌더링 */}
                {['F', 'r', 'o', 'n', 't', '-'].map((char, i) => (
                    <span
                        key={`letter-${i + 1}`}
                        id={`t${i + 1}`}
                        className={`font-semibold ${doto.className}`}
                        style={LETTER_STYLE}
                    >
                        {char}
                    </span>
                ))}
                <div id="t7" className='flex flex-col relative opacity-0'>
                    <span className={`font-semibold ${doto.className}`} style={LETTER_STYLE}>E</span>
                    <div
                        ref={devRef}
                        id='dev'
                        className={`flex flex-row absolute left-0 -bottom-4 sm:-bottom-10 font-semibold ${doto.className} text-yellow-50 text-center`}
                        style={{ fontSize: 'clamp(0.5rem, 5vw, 8vh)' }}
                    >
                        {[...'developer!'].map((char, index) => (
                            <span key={index} className="inline-block opacity-0">{char}</span>
                        ))}
                    </div>
                </div>
                {['n', 'd'].map((char, i) => (
                    <span
                        key={`letter-${i + 8}`}
                        id={`t${i + 8}`}
                        className={`font-semibold ${doto.className}`}
                        style={LETTER_STYLE}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <div className='relative mt-4 sm:mt-10 p-4 w-full h-full flex-[2] md:flex-1  flex flex-col items-center justify-center  text-white pointer-events-none'>
                <p ref={(el) => { textRefs.current[0] = el }} className="absolute  px-4 opacity-0   sm:leading-14 leading-relaxed break-keep" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.3vh)', }} >
                    <span>웹을 그저 </span>
                    <span className='sm:text-3xl md:text-4xl text-3xl text-[#00ff00] text-nowrap  '>보는 것</span>
                    <span >이 아닌, </span> <br />
                    <span className='sm:text-3xl md:text-4xl text-3xl text-[#00ff00] text-nowrap'>느낄 수 있는 경험</span>
                    <span>으로 만들고 싶습니다.</span>
                </p>
                <p ref={(el) => { textRefs.current[1] = el }} className="absolute px-4 opacity-0  sm:leading-14 leading-relaxed break-keep" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.3vh)', }}>
                    작은 움직임 하나까지 고민하며,<br />
                    더 좋은 <span className='sm:text-3xl md:text-4xl text-2xl text-[#00ff00] text-nowrap'>사용자 경험</span>을 고민하는 개발자가 되겠습니다.</p>
            </div>
            <div className='flex flex-col flex-1 pointer-events-auto  '>



                <Link id='github' href={'https://github.com/KIMLENDING'}
                    className={`text-[#37e237] opacity-0 relative py-2 px-4 transition-all ease-in-out duration-300 
                    hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black 
                    after:transition-all after:ease-in-out after:duration-300 after:mix-blend-difference hover:after:h-full ${doto.className} after:rounded-lg`}
                    style={{ fontSize: 'clamp(3rem, 5vw, 8vh)' }}
                >
                    GitHub
                </Link>


            </div>
        </section>
    )
}

export default HeroSection
