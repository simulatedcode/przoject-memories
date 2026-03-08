'use client'

import { useEffect, useState } from 'react'
import { useWebGLStore } from '@/store/useWebGLStore'

export const useScrollSections = (sectionIds: string[]) => {
    const setCurrentSection = useWebGLStore((state) => state.setCurrentSection)

    useEffect(() => {
        const observers = sectionIds.map((id) => {
            const element = document.getElementById(id)
            if (!element) return null

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(id)
                    }
                },
                { threshold: 0.5 }
            )

            observer.observe(element)
            return observer
        })

        return () => {
            observers.forEach((obs) => obs?.disconnect())
        }
    }, [sectionIds, setCurrentSection])
}
