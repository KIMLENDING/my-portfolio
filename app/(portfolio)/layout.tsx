"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react"; // 햄버거 메뉴 & 닫기 아이콘
import SmoothScroll from "@/hooks/SmoothScroll";


const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const sections = ['hero', "skill", "project", "about"];
    const [activeSection, setActiveSection] = useState("hero");
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const highlightRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pathname !== "/") return;

        gsap.registerPlugin(ScrollTrigger);

        sections.forEach((section) => {

            ScrollTrigger.create({
                trigger: `#${section}`,
                start: "top 48%",
                end: "bottom 48%",
                onEnter: () => setActiveSection(section),
                onEnterBack: () => setActiveSection(section),
                // markers: true,
            });
        });

        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // 컴포넌트 언마운트 시 ScrollTrigger 제거
    }, [pathname]);

    useEffect(() => { // 네비게이션 하이라이트 애니메이션
        if (!navRef.current || !highlightRef.current) return;

        const navLinks = navRef.current.querySelectorAll("a");
        console.log(activeSection)
        const activeIndex = sections.indexOf(activeSection);
        if (activeIndex === -1) return;

        const targetLink = navLinks[activeIndex];
        console.log(targetLink.href.split("#")[1]);
        if (!targetLink) return;

        gsap.to(highlightRef.current, {
            backgroundColor: targetLink.href.split("#")[1] === 'hero' ? "transparent" : "",
            x: targetLink.offsetLeft,
            width: targetLink.offsetWidth,
            duration: 0.1,
            ease: "power2.out",
        });
    }, [activeSection]);




    // 메뉴 열고 닫기 애니메이션
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        if (menuOpen) {
            gsap.to(mobileMenuRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                x: "100%",
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [menuOpen]);

    return (
        <div className="relative w-screen min-h-screen  ">
            {/* 상단 그라디언트 효과 blur-[5vh] lg:blur-[10vh]*/}


            {/* 데스크탑 네비게이션 */}
            <nav className="fixed top-5 left-0 w-full text-softGray font-bold z-20 sm:flex sm:justify-center sm:items-center sm:gap-5 text-nowrap hidden ">
                <div
                    ref={navRef}
                    className="relative flex justify-between items-center gap-2 px-4 py-1 mx-4 bg-black rounded-full sm:w-fit"
                >

                    <div
                        ref={highlightRef}
                        className="absolute top-1/6 left-0  bg-[#228b22] opacity-60 rounded-full h-10 transition-all"

                    />
                    {sections.map((section, index) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`relative transition-colors duration-300 text-xl px-4 py-2 rounded-full ${pathname === "/" && activeSection === section
                                ? "text-[#00ff00]"
                                : "hover:text-white"
                                }`}
                        >
                            {section === 'hero' ? <Image alt="star" src="/circle.svg" height={30} width={30} /> : sections[index]}
                        </a>
                    ))}
                </div>
            </nav>

            {/* 🌟 모바일 햄버거 메뉴 버튼 */}
            <button
                className="fixed top-5 right-5 z-50 sm:hidden p-2 bg-black rounded-full"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
            </button>

            {/* 🌟 모바일 메뉴 */}
            <div
                ref={mobileMenuRef}
                className=" fixed top-0 right-0 h-screen w-3/4 bg-black text-softGray z-20 flex flex-col justify-center items-center gap-6 sm:hidden"
                style={{ transform: "translateX(100%)", opacity: 0 }}
            >
                <div className="relative flex flex-col items-center gap-4">

                    {sections.map((section, index) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`text-xl font-bold transition-colors duration-300 rounded-full px-4 pb-1 "${pathname === "/" && activeSection === section
                                ? " bg-[#228b22]/60 text-[#00ff00]"
                                : " hover:text-white"
                                }`}
                            onClick={() => setMenuOpen(false)} // 클릭 시 메뉴 닫기
                        >
                            {sections[index]}
                        </a>
                    ))}
                </div>
            </div>
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </div>
    );
};

export default Layout;
