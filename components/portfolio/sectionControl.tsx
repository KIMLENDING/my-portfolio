
import React from 'react'
import SkillSection from './Skill'
import ProjectSection from './Project'
import HeroSection from './Hero'
import AboutSection from './About'
import ExperienceSection from './Experience'

const SectionControl = () => {
    return (
        <div className='relative w-screen h-fit text-white '>
            <HeroSection />
            <SkillSection />
            <ProjectSection />
            <ExperienceSection />
            <AboutSection />
        </div>
    )
}

export default SectionControl