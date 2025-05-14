'use client'
import { Book, Github, GraduationCap, Instagram, Mail, MapPinCheck, PhoneCall } from 'lucide-react';
import React, { useRef } from 'react';
import TitleGsap from './layout/TitleGsap';
import Image from 'next/image';
const AboutSection = () => {
    const sectionRef = useRef(null);

    const skills = [
        { category: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
        { category: "Backend", items: ["Node.js", "MongoDB", "Express"] },
        { category: "Others", items: ["GSAP", 'Lenis', "Tailwind CSS", 'vercel', 'React Query', 'zustand'] }
    ];

    const education = [
        {
            field: "컴퓨터공학과",
            school: "한라대학교",
            period: "2019 - 2025"
        },
    ];

    return (
        <section ref={sectionRef} id='about' className='min-h-screen w-full py-24 px-4 md:px-10 bg-zinc-900'>
            <div
                className="mx-auto max-w-6xl "
            >
                {/* 헤더 영역 */}
                <TitleGsap sectionRef={sectionRef} title={'About Me'} description={'개발자 소개 및 연락처'} />

                {/* 콘텐츠 영역 */}

                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                        {/* 왼쪽: 개인 소개 */}
                        <div className="space-y-8">
                            <div className="relative">
                                <div className="aspect-square bg-zinc-700 rounded-2xl overflow-hidden">
                                    <Image
                                        width={500}
                                        height={500}
                                        src="/img/starrail.webp"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">김계관</h3>
                                <h4 className="text-green-400 text-xl mb-6">프론트엔드 개발자</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    웹 개발에 대한 열정을 가진 프론트엔드 개발자입니다. 사용자 경험을 최우선으로 생각하며,
                                    모던 웹 기술을 활용한 인터랙티브한 웹사이트 개발을 지향합니다.
                                    새로운 기술을 배우고 적용하는 것을 좋아하며, 항상 최신 트렌드를 따라가려고 노력합니다.
                                </p>
                            </div>
                        </div>

                        {/* 오른쪽: 스킬 및 학력 */}
                        <div className="space-y-12">
                            {/* 스킬 */}
                            <div>
                                <h3 className="text-2xl font-bold text-white gap-4 mb-6 flex items-center">
                                    <Book className='text-green-400' />
                                    스킬
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {skills.map((skillGroup, index) => (
                                        <div key={index} className="bg-zinc-700/50 rounded-lg p-4">
                                            <h4 className="text-green-400 font-semibold mb-3">{skillGroup.category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skillGroup.items.map((skill, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-zinc-800 text-gray-300 text-sm rounded-md hover:bg-green-500 hover:text-zinc-700 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 학력 */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 gap-4 flex items-center">
                                    <GraduationCap className="  text-green-400" />
                                    학력
                                </h3>

                                <div className="space-y-6">
                                    {education.map((edu, index) => (
                                        <div key={index} className="bg-zinc-700/50 rounded-lg p-5 relative">
                                            <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                                {edu.period}
                                            </div>
                                            <h4 className="text-white font-semibold text-lg">{edu.field}</h4>
                                            <p className="text-gray-300 mt-2">{edu.school}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
                                <MapPinCheck className='text-green-400' />
                                위치
                            </h3>
                            <p className="text-gray-300 ml-7">원주시, 대한민국</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-2">연락처</h3>
                            <div className="flex flex-col space-y-3">
                                <a href="mailto:email@example.com" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors">
                                    <Mail className='text-green-400' />
                                    gotslaakaak@gmail.com
                                </a>
                                <a href="tel:+8210-4337-8193" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors">
                                    <PhoneCall className='text-green-400' />
                                    +82 10-4337-8193
                                </a>
                            </div>

                            <div className="flex space-x-4 mt-4">
                                <a href="https://github.com/KIMLENDING" className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                                    <Github />
                                </a>
                                <a href="https://www.instagram.com/kim_lending/" className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 푸터 */}
            <div className="bg-zinc-900 py-8 mt-16">
                <div className="mx-auto max-w-6xl ">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 KimLending 포트폴리오. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0">
                            <p className="text-gray-400 text-sm">
                                Made with <span className="text-green-500">♥</span> using React & GSAP
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;