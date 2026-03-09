import * as THREE from 'three'
import fragmentShader from '@/webgl/shaders/postprocessing/vignette.frag'
import vertexShader from '@/webgl/shaders/screen.vert'

export const VignetteShader = {
    uniforms: {
        tDiffuse: { value: null },
        uOffset: { value: 0.3 },
        uDarkness: { value: 0.8 }
    },
    vertexShader,
    fragmentShader
}

export class VignettePass extends THREE.ShaderMaterial {
    constructor() {
        super({
            uniforms: THREE.UniformsUtils.clone(VignetteShader.uniforms),
            vertexShader: VignetteShader.vertexShader,
            fragmentShader: VignetteShader.fragmentShader
        })
    }
}
