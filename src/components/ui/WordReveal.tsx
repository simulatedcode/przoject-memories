'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface WordRevealProps {
    text: string
    className?: string
    trigger?: string
    start?: string
    end?: string
}

export default function WordReveal({
    text,
    className = "",
    trigger,
    start = "top center",
    end = "bottom center"
}: WordRevealProps) {
    const containerRef = useRef<HTMLSpanElement>(null)
    const tlRef = useRef<gsap.core.Timeline | null>(null)
    const words = text.split(' ')

    useEffect(() => {
        if (!containerRef.current || !trigger) return

        const el = containerRef.current
        const wordEls = el.querySelectorAll('.reveal-word')

        tlRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                start: start,
                end: end,
                scrub: true,
            }
        })

        tlRef.current.fromTo(wordEls,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                ease: "power2.out",
            }
        )

        return () => {
            if (tlRef.current) {
                tlRef.current.scrollTrigger?.kill()
                tlRef.current.kill()
            }
        }
    }, [trigger, start, end])

    return (
        <span ref={containerRef} className={`${className} inline-block`}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="reveal-word inline-block opacity-0 translate-y-8 mr-[0.3em]"
                    style={{ willChange: "opacity, transform" }}
                >
                    {word}
                </span>
            ))}
        </span>
    )
}
