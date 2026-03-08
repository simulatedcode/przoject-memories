'use client'

import React, { useEffect, useState } from 'react'

import SystemInfo from "./SystemInfo"
import CoordinatesDisplay from "./CoordinatesDisplay"
import NarrativeStatus from "./NarrativeStatus"

export default function CinematicHUD() {
    const [time, setTime] = useState("")

    useEffect(() => {
        const timer = setInterval(() => {
            const d = new Date()
            setTime(d.toLocaleTimeString('en-GB', { hour12: true }))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-8">
            {/* TOP HUD */}
            <header className="flex justify-between items-start">
                <SystemInfo />
                <NarrativeStatus />
                <div className="flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                    <div>{time}</div>
                </div>
            </header>

            {/* BOTTOM HUD */}
            <footer className="flex justify-between items-end">
                <CoordinatesDisplay />
            </footer>
        </div>
    )
}
