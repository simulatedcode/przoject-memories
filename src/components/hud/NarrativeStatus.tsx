'use client'

import React from 'react'
import { useWebGLStore } from '@/store/useWebGLStore'

export default function NarrativeStatus() {
    const narrativeMode = useWebGLStore((state) => state.narrativeMode)

    return (
        <div className="flex flex-col items-center gap-1">
            <div className="text-[8px] opacity-40 tracking-[0.4em]">CURRENT_PHASE</div>
            <div className="text-xl font-doto tracking-widest text-amber-500 animate-flicker">
                {narrativeMode.replace('_', ' ')}
            </div>
        </div>
    )
}
