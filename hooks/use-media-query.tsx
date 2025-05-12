'use client';

import { useEffect, useState } from "react";


export function useMediaQuery(query: string) {
    const [value, setValue] = useState(false)

    useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            console.log("onChange", event)
            setValue(event.matches)
        }

        const result = matchMedia(query) // matchMedia는 브라우저의 미디어 쿼리 API를 사용하여 특정 쿼리와 일치하는지 확인
        result.addEventListener("change", onChange)  // 쿼리의 상태가 변경될 때마다 onChange 함수를 호출
        setValue(result.matches) // 초기값 설정

        return () => result.removeEventListener("change", onChange) // cleanup
    }, [query])

    return value
}