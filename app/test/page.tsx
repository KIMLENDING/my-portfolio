'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollFadeIn() {
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        sectionsRef.current.forEach((section,) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20">
            {[...Array(10)].map((_, index) => (
                <section
                    key={index}
                    ref={el => { sectionsRef.current[index] = el }}
                    className="w-full max-w-3xl p-10 my-10 bg-gray-800 rounded-2xl shadow-lg"
                >
                    <h2 className="text-2xl font-bold">Section {index + 1}</h2>
                    <p className="mt-4 text-gray-300">
                        This section fades in as you scroll down.
                    </p>
                </section>
            ))}
        </div>
    );
}
