'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrambleTextProps {
    text: string
    className?: string
    delay?: number
    duration?: number
    trigger?: string
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%-+*/=[]{}<>!?'

export default function ScrambleText({
    text,
    className = "",
    delay = 0.5,
    duration = 1.5,
    trigger
}: ScrambleTextProps) {
    const elementRef = useRef<HTMLSpanElement>(null)
    const tweenRef = useRef<gsap.core.Tween | null>(null)
    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
        if (!elementRef.current) return

        const targetText = text

        const scramble = () => {
            const obj = { value: 0 }

            tweenRef.current = gsap.to(obj, {
                value: 1,
                duration: duration,
                delay: delay,
                ease: "none",
                onUpdate: () => {
                    const progress = obj.value
                    const result = targetText.split('').map((char, i) => {
                        if (char === ' ') return ' '
                        if (progress > i / targetText.length) return char
                        return CHARS[Math.floor(Math.random() * CHARS.length)]
                    }).join('')
                    setDisplayText(result)
                },
                scrollTrigger: trigger ? {
                    trigger: trigger,
                    start: "top 60%", // Adjusted to trigger later so it's visible during the mask reveal
                    toggleActions: "play none none reverse"
                } : undefined
            })
        }

        scramble()

        return () => {
            if (tweenRef.current) tweenRef.current.kill()
        }
    }, [text, delay, duration, trigger])

    return (
        <span ref={elementRef} className={`${className} inline-block min-h-[1.2em]`}>
            {displayText || text.replace(/./g, ' ')}
        </span>
    )
}
