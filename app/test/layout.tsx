import SmoothScroll from '@/hooks/SmoothScroll'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </div>
    )
}

export default layout