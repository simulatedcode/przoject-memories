
export type NarrativeMode =
    | 'BOOT'
    | 'LANDSCAPE_ANALYSIS'
    | 'SUBJECT_DETECTION'
    | 'MEMORY_RECONSTRUCTION'
    | 'SYSTEM_COLLAPSE'

export interface WebGLState {
    // Progress & Navigation
    scrollProgress: number
    currentSection: string

    // Narrative State
    narrativeMode: NarrativeMode
    isLoaded: boolean

    // Actions
    setScrollProgress: (progress: number) => void
    setCurrentSection: (section: string) => void
    setNarrativeMode: (mode: NarrativeMode) => void
    setLoaded: (loaded: boolean) => void
}
