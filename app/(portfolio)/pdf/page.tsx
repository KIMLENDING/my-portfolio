"use client";

import React from "react";
import { project, workExperiences } from "@/data/project";
import Link from "next/link";

const PDFPage = () => {
    return (
        <div className="min-h-screen bg-white text-black p-8 sm:p-16 max-w-4xl mx-auto font-sans print:p-0">
            {/* 인쇄 시 레이아웃 최적화를 위한 글로벌 스타일 */}
            <style jsx global>{`
                @media print {
                    nav, button, footer {
                        display: none !important;
                    }
                    body {
                        background-color: white !important;
                        color: black !important;
                    }
                    .no-print {
                        display: none !important;
                    }
                    @page {
                        margin: 2cm;
                    }
                    a {
                        text-decoration: none;
                        color: black;
                    }
                }
            `}</style>

            {/* 헤더 섹션 */}
            <header className="border-b-2 border-black pb-6 mb-8 pt-8">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold mb-2 whitespace-nowrap">김계관 (Kim GyeGwan)</h1>
                        <p className="text-xl text-gray-700">Frontend Engineer</p>
                    </div>
                    <div className="text-right">
                        <p className="font-medium">Portfolio Link</p>
                        <Link
                            href="https://my-portfolio-kimlendings-projects.vercel.app"
                            className="text-blue-600 hover:underline text-sm font-medium whitespace-nowrap block"
                        >
                            my-portfolio-kimlendings-projects.vercel.app
                        </Link>
                    </div>
                </div>
            </header>

            {/* 소개 요약 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-black pl-3 uppercase tracking-wider">About</h2>
                <p className="text-gray-800 leading-relaxed">
                    사용자 경험(UX)과 인터랙티브한 웹 환경을 중요시하는 프론트엔드 개발자입니다.
                    플랫폼 간의 성능 최적화와 시각적 완성도를 높이는 작업에 강점이 있으며,
                    복잡한 문제를 해결하고 효율적인 코드를 작성하는 것을 즐깁니다.
                </p>
            </section>

            {/* 경력 섹션 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-black pl-3 uppercase tracking-wider">Experience</h2>
                <div className="space-y-8">
                    {workExperiences.map((exp) => (
                        <div key={exp.id} className="relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold">{exp.company}</h3>
                                    <p className="text-gray-600 italic font-medium">{exp.role}</p>
                                </div>
                                <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{exp.period}</span>
                            </div>
                            <p className="mb-3 text-gray-800">{exp.summary}</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="text-sm leading-relaxed">{resp}</li>
                                ))}
                            </ul>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {exp.techStack.map((tech) => (
                                    <span key={tech} className="text-xs border border-gray-300 px-2 py-0.5 rounded text-gray-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 기술 섹션 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-black pl-3 uppercase tracking-wider">Key Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-bold border-b border-gray-200 mb-2 pb-1 text-sm">Frontend</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">React, Next.js, TypeScript, TailwindCSS, GSAP, Zustand, React Query</p>
                    </div>
                    <div>
                        <h3 className="font-bold border-b border-gray-200 mb-2 pb-1 text-sm">Mobile / Etc</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">React Native (Expo), MongoDB, Redis, Vercel, Git</p>
                    </div>
                </div>
            </section>

            {/* 프로젝트 섹션 */}
            <section className="print:break-before-page pt-8">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-black pl-3 uppercase tracking-wider">Key Projects</h2>
                <div className="space-y-10">
                    {project.map((pj, index) => (
                        <div key={pj.id} className={`break-inside-avoid ${index === 3 ? 'print:break-before-page pt-8' : ''}`}>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold">{pj.title}</h3>
                                <div className="flex gap-3 text-xs">
                                    {pj.githubLink && (
                                        <a href={pj.githubLink} className="text-blue-600 hover:underline">GitHub</a>
                                    )}
                                    {pj.vercelLink && (
                                        <a href={pj.vercelLink} className="text-blue-600 hover:underline">Live Demo</a>
                                    )}
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-gray-600 mb-2">{pj.period.v1} {pj.period.v2 ? `/ ${pj.period.v2}` : ''}</p>
                            <p className="text-gray-800 mb-4 whitespace-pre-wrap leading-relaxed">{pj.summary || pj.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-bold text-xs uppercase text-gray-500 mb-1">Main Features</h4>
                                    <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                                        {pj.mainFeatures?.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="truncate">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase text-gray-500 mb-1">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {pj.stack.map((s) => (
                                            <span key={s} className="bg-gray-50 text-[10px] px-1.5 py-0.5 rounded border border-gray-100">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 푸터 섹션 */}
            <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} Kim GyeGwan. All rights reserved. </p>
                <p className="mt-1 italic">Generated from Portfolio Website for PDF Export</p>
            </footer>

            {/* 인쇄 버튼 (화면상에서만 보임) */}
            <div className="fixed bottom-8 right-8 no-print">
                <button
                    onClick={() => window.print()}
                    className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    PDF로 인쇄하기
                </button>
            </div>
        </div>
    );
};

export default PDFPage;