'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { useWebGLStore } from '@/store/useWebGLStore'

export const useCameraRig = () => {
    const { camera, mouse } = useThree()
    const target = useRef(new THREE.Vector3(0, 0, 0))
    const scrollProgress = useWebGLStore((state) => state.scrollProgress)

    useFrame((state, delta) => {
        // Mouse Parallax
        target.current.x = THREE.MathUtils.lerp(target.current.x, mouse.x * 0.5, 0.1)
        target.current.y = THREE.MathUtils.lerp(target.current.y, mouse.y * 0.2, 0.1)

        // Scroll-driven look-at or position shifts
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, target.current.x, 0.1)
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.6 + target.current.y, 0.1)

        // Subtle rotation based on scroll
        camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, scrollProgress * Math.PI * 0.05, 0.05)
    })
}
