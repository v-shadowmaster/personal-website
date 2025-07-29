"use client"

import { useState, useEffect } from "react"

interface UseLoadingOptions {
    delay?: number
    minLoadingTime?: number
}

export function useLoading(options: UseLoadingOptions = {}) {
    const { delay = 300, minLoadingTime = 1000 } = options
    const [isLoading, setIsLoading] = useState(true)
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        const startTime = Date.now()

        // Initial delay before showing loading
        const delayTimer = setTimeout(() => {
            setIsLoading(true)
        }, delay)

        // Minimum loading time
        const loadingTimer = setTimeout(() => {
            const elapsedTime = Date.now() - startTime
            const remainingTime = Math.max(0, minLoadingTime - elapsedTime)

            setTimeout(() => {
                setIsLoading(false)
                setShowContent(true)
            }, remainingTime)
        }, minLoadingTime)

        return () => {
            clearTimeout(delayTimer)
            clearTimeout(loadingTimer)
        }
    }, [delay, minLoadingTime])

    return { isLoading, showContent }
}
