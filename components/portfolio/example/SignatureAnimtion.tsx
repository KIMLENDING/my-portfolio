"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/use-media-query";

// GSAP 플러그인 등록
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const SignatureAnimation = () => {
    const [svgContent, setSvgContent] = useState<string | null>(null);
    const svgContainerRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    // const penRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        //  public/signature.svg 파일을 가져와서 state에 저장
        fetch("/signature.svg")
            .then((response) => response.text())
            .then((data) => setSvgContent(data))
            .catch((error) => console.error("SVG 로드 오류:", error));
    }, []);

    useEffect(() => {
        if (!svgContainerRef.current || !sectionRef.current) return;

        const path = svgContainerRef.current.querySelector("path");
        if (!path) return;

        const length = path.getTotalLength(); // SVG 경로 길이 계산

        // 🔹 초기 상태 설정 (선을 숨김)
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: isDesktop ? "top 80%" : 'top 40%', // 화면의 80% 위치에서 시작
                end: isDesktop ? "bottom 50%" : 'bottom 10%', // 스크롤이 중간 정도 오면 끝남
                scrub: 1, // 스크롤과 애니메이션이 연동됨
                toggleActions: "play none none reverse", // 되감기 효과 추가
                // markers: true,
            },
        });

        // 1️⃣ 선이 그려지는 애니메이션
        tl.to(path, {

            strokeDashoffset: 0, // 선이 서서히 나타남
            duration: 3,
            ease: "power4.out",
        });

        // 2️⃣ 펜이 따라 움직이는 애니메이션
        // tl.to(
        //     penRef.current,
        //     {
        //         motionPath: {
        //             path: path, // SVG 경로를 따라 이동
        //             align: path,
        //             alignOrigin: [0.5, 0.5],
        //             autoRotate: true, // 펜이 경로 방향에 따라 회전
        //         },
        //         duration: 3,
        //         ease: "power2.out",
        //     },
        //     "<" // 동시에 실행
        // );
    }, [svgContent, isDesktop]); // 🔥 SVG가 로드된 후 실행

    return (



        <div ref={sectionRef} className="w-full h-full flex items-center justify-center">

            {svgContent && (
                <div
                    ref={svgContainerRef}
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                    className='w-full h-full object-contain'

                />
            )}

            {/* 🖊️ 펜 아이콘 (선을 따라 움직임) */}
            {/* <div
            ref={penRef}
            className="w-6 h-6 rounded-full absolute"
            /> */}
        </div>

    );
};

export default SignatureAnimation;
