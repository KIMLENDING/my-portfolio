'use client'
import React, { useRef } from 'react'
import SkillSection from './Skill'
import ProjectSection from './Project'
import HeroSection from './Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import AboutSection from './About'
gsap.registerPlugin(ScrollTrigger);
const SectionControl = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const panel = containerRef.current
        if (panel) {



        }
    }, {
        scope: containerRef
    })
    return (
        <div ref={containerRef} className='relative w-screen h-fit  text-white  '>
            <HeroSection />
            <SkillSection />
            <ProjectSection />
            <AboutSection />

        </div>
    )
}

export default SectionControl