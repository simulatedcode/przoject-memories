'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

export const useLenis = () => {
    const [lenis, setLenis] = useState<Lenis | null>(null)

    useEffect(() => {
        // In a production app, we usually get this from a Context Provider
        // For now, we search for the instance attached to the window or just 
        // provide a hook that components can use if they need to interact with the global lenis.
        const instance = (window as any).lenis
        if (instance) setLenis(instance)
    }, [])

    return lenis
}
