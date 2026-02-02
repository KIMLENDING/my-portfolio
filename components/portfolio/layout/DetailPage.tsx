"use client";

import React, { useEffect, useRef } from "react";
import { Anton } from "next/font/google";
import { project } from "@/data/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const DetailPage = ({ id }: { id: string }) => {

    const data = project.find((p) => p.id === id);

    // Refs for animation targets
    const titleRef = useRef(null);
    const summaryRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Initial entrance animations
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(titleRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(summaryRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(leftColumnRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8 },
                "-=0.4"
            )
            .fromTo(rightColumnRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8 },
                "-=0.8"
            )
            .fromTo(buttonsRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.4"
            );

        // Create staggered animations for list items
        gsap.utils.toArray(".animate-list li").forEach((item, i) => {
            gsap.fromTo(
                item as HTMLElement,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    delay: 0.1 * i + 1,
                    ease: "power2.out"
                }
            );
        });

        // Section highlight on scroll
        gsap.utils.toArray(".section-container").forEach((section) => {
            gsap.fromTo(
                section as HTMLElement,
                { backgroundColor: "rgba(39, 39, 42, 0)" },
                {
                    backgroundColor: "rgba(39, 39, 42, 0.5)",
                    scrollTrigger: {
                        trigger: section as HTMLElement,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse"
                    },
                    duration: 0.5
                }
            );
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    if (!data) {
        return <div className="text-center text-red-500">Project not found</div>;
    }

    return (
        <div className="min-h-screen w-full py-24 px-4 md:px-10 bg-zinc-900 text-white overflow-x-hidden">
            {/* 뒤로가기 버튼 */}
            <Link
                href="/#project" replace
                className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-green-400 transition-colors group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>돌아가기</span>
            </Link>

            <div className="mb-16 md:mb-24">
                <h2
                    ref={titleRef}
                    className={`${anton.className} text-5xl md:text-7xl lg:text-8xl`}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                        {data.title}
                    </span>
                </h2>
                <p ref={summaryRef} className="mt-4 text-lg text-zinc-300 max-w-3xl">{data.summary}</p>
            </div>

            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                <div ref={leftColumnRef} className="space-y-6">
                    <Section title="📌 개발 기간">
                        <ul className="text-sm animate-list">
                            <li>v1: {data.period.v1}</li>
                            {data.period.v2 && <li>v2: {data.period.v2}</li>}
                        </ul>
                    </Section>

                    <Section title="⚙️ 사용 기술">
                        <ul className="flex flex-wrap gap-2 text-sm animate-list">
                            {data.stack.map((tech) => (
                                <li key={tech} className="bg-zinc-800 rounded px-2 py-1 hover:bg-green-600 transition-colors duration-300">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="🧩 기술적 도전">
                        <ul className="list-disc pl-5 text-sm space-y-2 animate-list">
                            {data.techChallenges.map((c, i) => (
                                <li key={i}>
                                    <span className="font-semibold">{c.title}:</span> {c.description}
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <div ref={buttonsRef} className="flex gap-4 mt-6">
                        <a
                            href={data.githubLink}
                            target="_blank"
                            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white text-sm transform transition-transform duration-300 hover:scale-105"
                        >
                            GitHub
                        </a>
                        <a
                            href={data.vercelLink}
                            target="_blank"
                            className="bg-white text-zinc-900 hover:bg-zinc-200 px-4 py-2 rounded text-sm transform transition-transform duration-300 hover:scale-105"
                        >
                            Live Site
                        </a>
                    </div>
                </div>

                <div ref={rightColumnRef} className="space-y-6">
                    <Section title="✨ 주요 기능">
                        <ul className="list-disc pl-5 text-sm space-y-1 animate-list">
                            {data.mainFeatures.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </Section>

                    {data.schemaOverview && (
                        <Section title="📁 스키마 개요">
                            <ul className="list-disc pl-5 text-sm space-y-1 animate-list">
                                {Object.entries(data.schemaOverview).map(([model, desc]) => (
                                    <li key={model}>
                                        <span className="font-semibold">{model}</span>: {desc}
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    )}
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="section-container p-4 rounded-lg transition-all duration-300">
        <h3 className="text-xl font-semibold mb-2 text-green-400">{title}</h3>
        {children}
    </div>
);

export default DetailPage;