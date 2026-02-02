'use client'
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, ChevronDown, ChevronUp, Lightbulb, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import TitleGsap from './layout/TitleGsap';
import { workExperiences, caseStudies } from '@/data/project';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    const sectionRef = useRef(null);
    const [expandedCase, setExpandedCase] = useState<string | null>(null);

    const toggleCase = (id: string) => {
        setExpandedCase(expandedCase === id ? null : id);
    };

    // workExperience에 연결된 caseStudies 가져오기
    const getRelatedCaseStudies = (caseIds: string[]) => {
        return caseStudies.filter(cs => caseIds.includes(cs.id));
    };

    return (
        <section ref={sectionRef} id='experience' className='min-h-screen w-full py-24 px-4 md:px-10 bg-zinc-900'>
            <div className="mx-auto max-w-6xl">
                {/* 헤더 */}
                <TitleGsap sectionRef={sectionRef} title={'Experience'} description={'실무 경험 및 문제 해결 사례'} />

                {/* 경력 카드 */}
                <div className="mt-12 space-y-8">
                    {workExperiences.map((exp) => (
                        <div key={exp.id} className="bg-zinc-800 rounded-2xl p-6 md:p-8 border border-zinc-700 hover:border-green-500/50 transition-all duration-300">
                            {/* 회사 정보 헤더 */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-500/20 rounded-xl">
                                        <Briefcase className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                        <p className="text-green-400 font-medium">{exp.role}</p>
                                    </div>
                                </div>
                                <div className="bg-zinc-700 px-4 py-2 rounded-full text-sm text-gray-300 w-fit">
                                    {exp.period}
                                </div>
                            </div>

                            {/* 요약 */}
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {exp.summary}
                            </p>

                            {/* 담당 업무 */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">담당 업무</h4>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 기술 스택 */}
                            <div className="mb-8">
                                <h4 className="text-lg font-semibold text-white mb-3">기술 스택</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Case Studies */}
                            {exp.relatedCaseStudies && exp.relatedCaseStudies.length > 0 && (
                                <div className="border-t border-zinc-700 pt-6">
                                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-green-400" />
                                        문제 해결 사례
                                    </h4>
                                    <div className="space-y-4">
                                        {getRelatedCaseStudies(exp.relatedCaseStudies).map((cs) => (
                                            <div
                                                key={cs.id}
                                                className="bg-zinc-700/50 rounded-xl overflow-hidden transition-all duration-300"
                                            >
                                                {/* Case Study 헤더 (클릭 가능) */}
                                                <button
                                                    onClick={() => toggleCase(cs.id)}
                                                    className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-700 transition-colors"
                                                >
                                                    <span className="flex-1">
                                                        <span className="text-lg font-semibold text-white block">
                                                            {cs.title}
                                                        </span>
                                                        <span className="flex flex-wrap gap-2 mt-2">
                                                            {cs.techStack.slice(0, 3).map((tech, idx) => (
                                                                <span key={idx} className="px-2 py-0.5 bg-zinc-600 text-gray-300 text-xs rounded">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </span>
                                                    </span>
                                                    {expandedCase === cs.id ? (
                                                        <ChevronUp className="w-5 h-5 text-green-400" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                                    )}
                                                </button>

                                                {/* Case Study 상세 내용 */}
                                                {expandedCase === cs.id && (
                                                    <div className="p-4 pt-0 space-y-4 animate-fadeIn">
                                                        {/* 상황 */}
                                                        <div className="bg-zinc-800/50 rounded-lg p-4">
                                                            <h6 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                                                                <Briefcase className="w-4 h-4" />
                                                                상황
                                                            </h6>
                                                            <p className="text-gray-300">{cs.situation}</p>
                                                        </div>

                                                        {/* 문제 */}
                                                        <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                                                            <h6 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                                                                <AlertCircle className="w-4 h-4" />
                                                                문제
                                                            </h6>
                                                            <ul className="space-y-1">
                                                                {cs.problem.map((p, idx) => (
                                                                    <li key={idx} className="text-gray-300 text-sm">• {p}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* 원인 */}
                                                        <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                                                            <h6 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                                                                <Lightbulb className="w-4 h-4" />
                                                                원인 분석
                                                            </h6>
                                                            <p className="text-gray-300 text-sm">{cs.rootCause}</p>
                                                        </div>

                                                        {/* 해결 */}
                                                        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                                                            <h6 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                                                                <CheckCircle2 className="w-4 h-4" />
                                                                해결 방법
                                                            </h6>
                                                            <ul className="space-y-1">
                                                                {cs.solution.map((s, idx) => (
                                                                    <li key={idx} className="text-gray-300 text-sm">• {s}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* 결과 */}
                                                        <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                                                            <h6 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                                                                <Sparkles className="w-4 h-4" />
                                                                결과
                                                            </h6>
                                                            <ul className="space-y-1">
                                                                {cs.result.map((r, idx) => (
                                                                    <li key={idx} className="text-gray-300 text-sm">• {r}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* 배운 점 */}
                                                        <div className="bg-zinc-800/50 rounded-lg p-4">
                                                            <h6 className="text-sm font-semibold text-purple-400 mb-2">💡 배운 점</h6>
                                                            <ul className="space-y-1">
                                                                {cs.takeaways.map((t, idx) => (
                                                                    <li key={idx} className="text-gray-300 text-sm">• {t}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
