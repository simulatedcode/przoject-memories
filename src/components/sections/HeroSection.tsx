'use client'

import ScrambleText from "@/components/ui/ScrambleText"

export default function HeroSection() {
    return (
        <section id="hero" className="flex items-center justify-center h-screen overflow-hidden">
            <div className="cinematic-text mix-blend-exclusion max-w-4xl">
                <h1 className="text-display-xl font-thin tracking-tighter-compressed text-glow-amber pl-[0.1em]">
                    <ScrambleText text="Speculative Future Memories" duration={2} />
                </h1>
                <div className="mt-8 flex flex-col items-center">
                    <span className="text-caption-sm mb-2">System Initialized // ARCHIVE_01</span>
                    <p className="font-doto uppercase text-sm tracking-[0.6em] opacity-40">
                        Helas
                    </p>
                </div>
            </div>
        </section>
    )
}
