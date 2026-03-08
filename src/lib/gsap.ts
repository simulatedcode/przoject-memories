import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, CustomEase)
}

// Global Configs
gsap.defaults({
    duration: 1.2,
    ease: "power2.inOut"
})

export { gsap, ScrollTrigger, CustomEase }
