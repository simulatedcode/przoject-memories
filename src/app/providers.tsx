'use client'

import { useWebGLStore } from '@/store/useWebGLStore'
import { SCROLL_THRESHOLDS } from '@/lib/constants'
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Providers({ children }: { children: React.ReactNode }) {
    const setScrollProgress = useWebGLStore((state) => state.setScrollProgress)
    const setNarrativeMode = useWebGLStore((state) => state.setNarrativeMode)

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        })

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', (e: any) => {
            ScrollTrigger.update()

            // Update global store
            const progress = e.progress
            setScrollProgress(progress)

            // Map progress to NarrativeMode
            if (progress < SCROLL_THRESHOLDS.LANDSCAPE) {
                setNarrativeMode('BOOT')
            } else if (progress < SCROLL_THRESHOLDS.SUBJECT) {
                setNarrativeMode('LANDSCAPE_ANALYSIS')
            } else if (progress < SCROLL_THRESHOLDS.RECONSTRUCTION) {
                setNarrativeMode('SUBJECT_DETECTION')
            } else if (progress < SCROLL_THRESHOLDS.COLLAPSE) {
                setNarrativeMode('MEMORY_RECONSTRUCTION')
            } else {
                setNarrativeMode('SYSTEM_COLLAPSE')
            }
        })

        const raf = (time: number) => {
            lenis.raf(time * 1000)
        }

        gsap.ticker.add(raf)
        gsap.ticker.lagSmoothing(0)

            // Make lenis globally accessible for hooks
            ; (window as any).lenis = lenis

        return () => {
            lenis.destroy()
            gsap.ticker.remove(raf)
            delete (window as any).lenis
        }
    }, [setScrollProgress, setNarrativeMode])

    return <>{children}</>
}
