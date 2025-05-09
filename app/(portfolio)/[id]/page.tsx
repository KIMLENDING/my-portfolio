import React from 'react'
import { Anton } from 'next/font/google';
const anton = Anton({ weight: '400', subsets: ['latin'] });

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div className='min-h-screen w-full py-24 px-4 md:px-10 bg-zinc-900'>
            <div className=" mb-16 md:mb-24 flex items-start">
                <h2 className={`${anton.className} text-5xl md:text-7xl lg:text-8xl text-white  `}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 ">
                        {id}
                    </span>
                </h2>
            </div>
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-12">
                <div>사진</div>
                <div>설명</div>
            </div>
        </div>
    )
}

export default page