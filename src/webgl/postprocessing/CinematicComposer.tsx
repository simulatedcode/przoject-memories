import React, { useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, RenderPass, ShaderPass, UnrealBloomPass } from 'three-stdlib'
import { GrainPass } from './GrainPass'
import { ChromaticPass } from './ChromaticPass'
import { VignettePass } from './VignettePass'
import { ColorGradePass } from './ColorGradePass'
import { FogPass } from './FogPass'

export default function CinematicComposer() {
    const { gl, scene, camera, size } = useThree()

    const composer = useMemo(() => {
        // High performance setup
        const renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            stencilBuffer: false,
            depthBuffer: true,
            depthTexture: new THREE.DepthTexture(size.width, size.height)
        })

        const _composer = new EffectComposer(gl, renderTarget)
        _composer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
        _composer.setSize(size.width, size.height)

        // STEP 1 — Order
        const renderPass = new RenderPass(scene, camera)
        _composer.addPass(renderPass)

        // UnrealBloomPass
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(size.width, size.height),
            1.5, // intensity
            0.4, // radius
            0.85 // threshold
        )
        _composer.addPass(bloomPass)

        // ChromaticAberrationPass
        const chromaticPass = new ShaderPass(new ChromaticPass())
        _composer.addPass(chromaticPass)

        // FilmGrainPass
        const grainPass = new ShaderPass(new GrainPass())
        _composer.addPass(grainPass)

        // ColorGradePass
        const colorGradePass = new ShaderPass(new ColorGradePass())
        _composer.addPass(colorGradePass)

        // FogPass (Needs Depth)
        const fogPass = new ShaderPass(new FogPass())
        _composer.addPass(fogPass)

        // VignettePass
        const vignettePass = new ShaderPass(new VignettePass())
        vignettePass.renderToScreen = true
        _composer.addPass(vignettePass)

        return _composer
    }, [gl, scene, camera, size])

    // Manage gl.autoClear
    useEffect(() => {
        const oldAutoClear = gl.autoClear
        gl.autoClear = false
        return () => { gl.autoClear = oldAutoClear }
    }, [gl])

    // Update fog pass depth texture
    useEffect(() => {
        const fogPass = composer.passes.find(p => (p as any).material instanceof FogPass)
        if (fogPass) {
            (fogPass as any).material.uniforms.tDepth.value = (composer as any).readBuffer.depthTexture
        }
    }, [composer])

    useFrame((state) => {
        // STEP 9 — Animation (Update uTime for grain)
        const grainPass = composer.passes.find(p => (p as any).material instanceof GrainPass)
        if (grainPass) {
            (grainPass as any).material.uniforms.uTime.value = state.clock.getElapsedTime()
        }

        // STEP 8 — Render loop
        composer.render()
    }, 1)

    return null
}
