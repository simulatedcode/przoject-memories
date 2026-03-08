'use client'

import React, { useEffect, useState } from 'react'
import { useWebGLStore } from '@/store/useWebGLStore'

export default function Coordinates() {
    const scrollProgress = useWebGLStore((state) => state.scrollProgress)
    const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 })

    useEffect(() => {
        // Simulated coordinate drift based on scroll
        setCoords({
            x: Math.sin(scrollProgress * Math.PI) * 10,
            y: 1.6 + Math.cos(scrollProgress * Math.PI) * 2,
            z: 5 - scrollProgress * 15
        })
    }, [scrollProgress])

    return (
        <div className="flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
            <div>LOC_X: {coords.x.toFixed(4)}</div>
            <div>LOC_Y: {coords.y.toFixed(4)}</div>
            <div>LOC_Z: {coords.z.toFixed(4)}</div>
        </div>
    )
}
