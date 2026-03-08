import React, { useEffect, useState } from 'react'

export default function SystemInfo() {
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null)

    useEffect(() => {
        if (!navigator.geolocation) return

        let watchId: number | undefined

        watchId = navigator.geolocation.watchPosition(
            (position) => {
                setCoords({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            },
            (error) => console.error('Geo error:', error),
            { enableHighAccuracy: true }
        )

        return () => {
            if (watchId !== undefined) {
                navigator.geolocation.clearWatch(watchId)
            }
        }
    }, [])

    return (
        <div className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-widest opacity-60">
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                <span>KERNEL_ACTIVE</span>
            </div>
            <div className="flex flex-col gap-0.5 mt-1 opacity-50">
                {coords ? (
                    <>
                        <div>LAT: {coords.lat.toFixed(4)}° {coords.lat >= 0 ? 'N' : 'S'}</div>
                        <div>LNG: {coords.lng.toFixed(4)}° {coords.lng >= 0 ? 'E' : 'W'}</div>
                    </>
                ) : (
                    <div>LOCATING...</div>
                )}
            </div>
        </div>
    )
}
