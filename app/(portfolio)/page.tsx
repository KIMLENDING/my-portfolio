import MouseLight from '@/components/portfolio/layout/MouseLight'
import MouseReversal from '@/components/portfolio/layout/MouseReversal'
import ParticlesBG from '@/components/portfolio/layout/ParticlesBG'
import SectionControl from '@/components/portfolio/sectionControl'

const page = () => {

    return (
        <div className='flex flex-col items-center justify-center min-h-screen w-screen relative '>
            {/** 배경 효과 */}
            <ParticlesBG />

            {/** 마우스 포인터 */}
            <MouseReversal />
            <MouseLight />

            <SectionControl />
        </div>
    )
}

export default page