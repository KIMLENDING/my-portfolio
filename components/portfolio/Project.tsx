import React from 'react'

const ProjectSection = () => {
    return (
        <section id='project' className=' min-h-screen w-full py-24 px-10 border-2  border-red-400 '>
            <div className='grid grid-cols-1 gap-10'>

                <div className=" mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5
             dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <img className="size-12 shrink-0" src="/circle.svg" alt="ChitChat Logo" />
                    <div>
                        <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
                        <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 '>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className='bg-blue-400 h-20 flex items-center justify-center text-white rounded-2xl
                            hover:bg-blue-500 transition-colors duration-300 cursor-pointer hover:scale-105
                        '>
                            {i}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection