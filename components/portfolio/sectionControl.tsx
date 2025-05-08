
import React from 'react'
import SkillSection from './Skill'
import ProjectSection from './Project'
import HeroSection from './Hero'
import AboutSection from './About'

const SectionControl = () => {
    return (
        <div className='relative w-screen h-fittext-white  '>
            <HeroSection />
            <SkillSection />
            <ProjectSection />
            <AboutSection />
        </div>
    )
}

export default SectionControl