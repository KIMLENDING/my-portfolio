import React, { useRef } from 'react'
import { Anton } from 'next/font/google';
// import Image from 'next/image';
const anton = Anton({ weight: '400', subsets: ['latin'] });

const ProjectSection = () => {
    const sectionRef = useRef(null)
    const scrollContents = [
        {
            thumbnail: '/img/test.png',
            project: 'Health Timer App',
            content: '운동 기록을 관리하는 웹 애플리케이션으로, Next.js와 React Query를 활용해 서버 상태를 관리했습니다. 사용자 경험을 고려한 UI/UX 설계로, 운동 기록을 쉽게 추가하고 관리할 수 있습니다.'
        },
        {
            thumbnail: '/img/test.png',
            project: 'Moment Memory Game',
            content: '순간 기억력 게임으로, GSAP과 Lenis를 활용해 부드러운 스크롤과 애니메이션 효과를 구현했습니다. 사용자 경험을 고려한 UI/UX 설계로, 게임의 몰입감을 높였습니다.'
        },
    ];
    return (
        <section id='project' className=' min-h-screen w-full py-24 px-10  '>

            <div
                ref={sectionRef}
                className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-12  "
            >
                {/* 왼쪽 타이틀  */}
                <div className='md:flex md:items-center md:justify-center  sticky top-8 left-3 z-30 my-10 md:my-20'>
                    <h2 className="text-4xl  md:text-7xl lg:text-8xl md:sticky md:top-1/3 md:self-start px-2  " >
                        <div className={`relative md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-1 md:after:h-full md:after:bg-[#32cd32] md:after:-mx-8 md:after:rounded-md 
                    ${anton.className} select-none`}>
                            Project
                        </div>
                    </h2>
                </div>


                {/* 오른쪽 스크롤 콘텐츠 */}
                <aside className="flex flex-col">
                    {scrollContents.map((item, i) => (
                        <div key={i} className={`w-full h-fit my-10 md:my-20 flex px-2  items-center   `}>
                            <div className="w-full bg-green-800/65 p-4  rounded-lg  shadow-lg">
                                <div className='flex flex-row items-center gap-4 mb-2'>

                                    {item.project && (
                                        <h3 className={` text-2xl font-semibold mb-2 text-[#00ff00] ${anton.className}`}>{item.project}</h3>
                                    )}

                                </div>
                                <div className='animate-pulse aspect-video bg-zinc-700 '>

                                </div>
                                {/* <Image src={item.thumbnail} height={1000} width={1000} alt='' className='aspect-video ' ></Image> */}
                            </div>
                        </div>
                    ))}
                </aside>
                {/* <div className='min-h-[100vh]'></div> */}
            </div>
        </section>
    )
}

export default ProjectSection