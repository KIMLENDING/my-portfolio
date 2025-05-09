'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Anton } from 'next/font/google';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const anton = Anton({ weight: '400', subsets: ['latin'] });

const TitleGsap = ({ sectionRef, title, description }: { sectionRef: React.RefObject<HTMLElement | null>, title: string, description: string }) => {
    const titleRef = useRef(null);
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
    }, [sectionRef]);
    return (
        <div className=" mb-16 md:mb-24 flex items-start">
            <div
                ref={titleRef}
                className="relative inline-block opacity-0"
            >
                <h2 className={`${anton.className} text-5xl md:text-7xl lg:text-8xl text-white relative z-10`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                        {title}
                    </span>
                </h2>
                <p className="text-green-400 text-lg md:text-xl  mb-8">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default TitleGsap