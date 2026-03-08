import { create } from 'zustand'
import { WebGLState } from '@/types/store'

export const useWebGLStore = create<WebGLState>((set) => ({
    // Initial State
    scrollProgress: 0,
    currentSection: 'hero',
    narrativeMode: 'BOOT',
    isLoaded: false,

    // Actions
    setScrollProgress: (scrollProgress) => set({ scrollProgress }),
    setCurrentSection: (currentSection) => set({ currentSection }),
    setNarrativeMode: (narrativeMode) => set({ narrativeMode }),
    setLoaded: (isLoaded) => set({ isLoaded }),
}))
