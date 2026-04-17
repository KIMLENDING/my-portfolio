"use client";

import React, { useEffect, useRef } from "react";
import { Anton } from "next/font/google";
import { project } from "@/data/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Lightbulb, Target, Rocket, Smartphone, Code2, Calendar, Cpu, Zap, ListChecks, Database, Check, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const DetailPage = ({ id }: { id: string }) => {

    const data = project.find((p) => p.id === id);

    // Refs for animation targets
    const titleRef = useRef(null);
    const summaryRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const buttonsRef = useRef(null);
    const irRef = useRef(null);
    const galleryRef = useRef(null);
    const archRef = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Initial entrance animations (Hero Section)
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(titleRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        )
            .fromTo(summaryRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.4"
            )
            .fromTo(buttonsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.4"
            );

        // Scroll animations for new sections
        if (irRef.current) {
            gsap.fromTo(gsap.utils.toArray((irRef.current as HTMLElement).children),
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: irRef.current,
                        start: "top 85%",
                    }
                }
            );
        }

        if (galleryRef.current) {
            gsap.fromTo(gsap.utils.toArray(".gallery-item"),
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: galleryRef.current,
                        start: "top 85%",
                    }
                }
            );
        }

        if (archRef.current) {
            gsap.fromTo(archRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: archRef.current,
                        start: "top 85%",
                    }
                }
            );
        }

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
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${data.themeColor || '#4ade80'}, ${data.themeColor ? data.themeColor + 'dd' : '#16a34a'})`
                        }}
                    >
                        {data.title}
                    </span>
                </h2>
                <p ref={summaryRef} className="mt-4 text-lg text-zinc-300 max-w-3xl leading-relaxed">{data.summary}</p>

                <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-8">
                    {data.githubLink && (
                        <a
                            href={data.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(39,39,42,0.5)] group"
                        >
                            <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
                            <span className="font-semibold text-sm">GitHub Repository</span>
                        </a>
                    )}
                    {data.vercelLink && (
                        <a
                            href={data.vercelLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:brightness-110 active:scale-95 group"
                            style={{
                                background: `linear-gradient(135deg, ${data.themeColor || '#10b981'})`
                            }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span>Visit Live Site</span>
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    )}
                </div>
            </div>

            {/* IR Section - Problem & Solution */}
            {data.irContent && (
                <div ref={irRef} className="mx-auto max-w-6xl mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 hover:border-green-500/30 transition-colors group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <Lightbulb className="w-6 h-6 text-amber-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Problem</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                            {data.irContent.problem}
                        </p>
                    </div>

                    <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 hover:border-green-500/30 transition-colors group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-green-500/10 rounded-lg">
                                <Target className="w-6 h-6 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Solution</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                            {data.irContent.solution}
                        </p>
                        {data.irContent.valueProp && (
                            <div className="mt-6 pt-6 border-t border-zinc-700/50 flex items-center gap-2">
                                <Rocket className="w-5 h-5 text-green-500" />
                                <span className="text-green-500 font-semibold">{data.irContent.valueProp}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Screenshots Gallery */}
            {data.screenshots && (
                <div ref={galleryRef} className="mx-auto max-w-6xl mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <Smartphone className="w-6 h-6 text-green-500" />
                        <h3 className="text-3xl font-bold">Visual Showcase</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {data.screenshots.map((src, i) => (
                            <div key={i} className="gallery-item relative aspect-[9/19] rounded-xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all duration-500 group">
                                <Image
                                    src={src}
                                    alt={`Screenshot ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-xs font-medium text-white">View Detail</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <div ref={leftColumnRef} className="space-y-8">
                    <Section title="개발 기간" icon={<Calendar className="w-5 h-5" />}>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 bg-zinc-800/30 p-3 rounded-xl border border-zinc-700/30">
                                <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">v1</span>
                                <span className="text-zinc-300 font-medium">{data.period.v1}</span>
                            </div>
                            {data.period.v2 && (
                                <div className="flex items-center gap-2 bg-zinc-800/30 p-3 rounded-xl border border-zinc-700/30">
                                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">v2</span>
                                    <span className="text-zinc-300 font-medium">{data.period.v2}</span>
                                </div>
                            )}
                        </div>
                    </Section>

                    <Section title="사용 기술" icon={<Cpu className="w-5 h-5" />}>
                        <div className="flex flex-wrap gap-2">
                            {data.stack.map((tech) => (
                                <span key={tech} className="bg-zinc-800/80 hover:bg-green-500/10 text-zinc-300 hover:text-green-400 border border-zinc-700 hover:border-green-500/30 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </Section>

                    <Section title="기술적 도전" icon={<Zap className="w-5 h-5" />}>
                        <div className="space-y-4">
                            {data.techChallenges.map((c, i) => (
                                <div key={i} className="group/item">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-1 group-hover/item:text-green-400 transition-colors uppercase tracking-tight">{c.title}</h4>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{c.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </div>

                <div ref={rightColumnRef} className="space-y-8">
                    <Section title="주요 기능" icon={<ListChecks className="w-5 h-5" />}>
                        <div className="grid grid-cols-1 gap-3">
                            {data.mainFeatures.map((f, i) => (
                                <div key={i} className="flex items-center gap-3 bg-zinc-800/30 p-4 rounded-xl border border-zinc-700/30 hover:border-green-500/20 transition-all group/feat">
                                    <div className="p-1 bg-green-500/10 rounded-md group-hover/feat:bg-green-500/20 transition-colors">
                                        <Check className="w-3.5 h-3.5 text-green-500" />
                                    </div>
                                    <span className="text-zinc-300 text-sm font-medium">{f}</span>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {data.schemaOverview && (
                        <Section title="스키마 개요" icon={<Database className="w-5 h-5" />}>
                            <div className="space-y-3">
                                {Object.entries(data.schemaOverview).map(([model, desc]) => (
                                    <div key={model} className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/80 hover:bg-zinc-800/40 transition-all">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="font-bold text-white text-sm">{model}</span>
                                        </div>
                                        <p className="text-zinc-500 text-xs leading-relaxed pl-4 border-l border-zinc-800">
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}
                </div>
            </div>

            {/* Architecture Section */}
            {data.architecture && (
                <div ref={archRef} className="mx-auto max-w-6xl mt-24">
                    <Section title="📂 Project Architecture" icon={<Database className="w-5 h-5" />}>
                        <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 mt-4 overflow-x-auto">
                            <div className="flex items-center gap-2 mb-4 text-zinc-500">
                                <Code2 className="w-4 h-4" />
                                <span className="text-xs font-mono uppercase tracking-widest">Directory Tree</span>
                            </div>
                            <pre className="text-sm font-mono text-green-500/90 leading-relaxed">
                                {data.architecture}
                            </pre>
                        </div>
                    </Section>
                </div>
            )}
        </div>
    );
};

const Section = ({ title, icon, children, className = "" }: { title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }) => (
    <div className={`section-container p-6 rounded-2xl bg-zinc-800/20 border border-zinc-800/50 transition-all duration-500 hover:border-zinc-700/50 ${className}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
        </div>
        <div>
            {children}
        </div>
    </div>
);

export default DetailPage;