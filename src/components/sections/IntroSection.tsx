'use client'

import React, { useEffect, useRef } from 'react'
import ScrambleText from "@/components/ui/ScrambleText"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import HeroSection from "./HeroSection"

export default function IntroSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const sections = containerRef.current.querySelectorAll('section:not(#hero)')

        sections.forEach((section) => {
            const content = section.querySelector('.mask-content')

            // Timeline for each section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=150%", // Extended scroll duration for the narrative phase
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                    toggleActions: "play none none reverse"
                }
            })

            // 1. Reveal In: Mask slides up from bottom (inset(100% 0 0 0) -> inset(0% 0 0 0))
            tl.fromTo(content,
                { clipPath: 'inset(100% 0 0 0)' },
                { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: "power2.inOut" }
            )

            // 2. Static Phase: Just a small gap in the timeline for "stasis"
            tl.to({}, { duration: 1 })

            // 3. Reveal Out: Mask slides up to hide (inset(0% 0 0 0) -> inset(0% 0 100% 0))
            tl.to(content, {
                clipPath: 'inset(0% 0 100% 0)',
                duration: 1,
                ease: "power2.inOut"
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    return (
        <main ref={containerRef} className="relative z-10 font-sans">
            <HeroSection />

            {/* PROLOGUE */}
            <section id="prologue" className="flex items-center justify-center h-screen overflow-hidden">
                <div className="mask-content cinematic-text max-w-2xl px-8 w-full" style={{ clipPath: 'inset(100% 0 0 0)' }}>
                    <span className="text-caption-sm mb-4">LOG_ENTRY: ORIGIN</span>
                    <h2 className="text-4xl sm:text-6xl tracking-widest mb-10">
                        <ScrambleText text="PROLOGUE" trigger="#prologue" />
                    </h2>
                    <div className="opacity-40 font-mono text-sm sm:text-lg uppercase tracking-widest leading-relaxed">
                        A statue facing the horizon. A figure emerging from the landscape of colonial memory.
                    </div>
                </div>
            </section>

            {/* LANDSCAPE */}
            <section id="landscape" className="flex items-center justify-center h-screen overflow-hidden text-center">
                <div className="mask-content cinematic-text max-w-2xl px-8 w-full" style={{ clipPath: 'inset(100% 0 0 0)' }}>
                    <span className="text-caption-sm mb-4">LOG_ENTRY: ENVIRONMENT</span>
                    <h2 className="text-4xl sm:text-6xl tracking-widest mb-10">
                        <ScrambleText text="IN A LANDSCAPE" trigger="#landscape" />
                    </h2>
                    <div className="text-base opacity-40 leading-relaxed font-mono uppercase tracking-widest max-w-lg mx-auto">
                        Works exploring the fictional presence of Helas within the visual culture of Mooi Indie painting.
                    </div>
                </div>
            </section>

            {/* MEMORIES */}
            <section id="memories" className="flex items-center justify-center h-screen overflow-hidden text-center">
                <div className="mask-content cinematic-text max-w-2xl px-8 w-full" style={{ clipPath: 'inset(100% 0 0 0)' }}>
                    <span className="text-caption-sm mb-4">LOG_ENTRY: RECONSTRUCTION</span>
                    <h2 className="text-4xl sm:text-6xl tracking-widest mb-10">
                        <ScrambleText text="PSEUDO MEMORIES" trigger="#memories" />
                    </h2>
                    <div className="text-base opacity-40 leading-relaxed font-mono uppercase tracking-widest max-w-lg mx-auto">
                        Speculative archives of a future landscape where memory becomes architecture.
                    </div>
                </div>
            </section>
        </main>
    )
}
