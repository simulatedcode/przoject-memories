'use client'

import React from 'react'

export default function Scanlines() {
    return (
        <div className="fixed inset-0 pointer-events-none z-9998 opacity-[0.03]">
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                    backgroundSize: '100% 4px',
                }}
            />
            <div
                className="absolute inset-0 w-full h-full animate-scanline"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(255, 176, 0, 0.05), transparent)',
                    height: '100px',
                }}
            />
        </div>
    )
}
