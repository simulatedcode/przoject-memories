import * as THREE from 'three'
import fragmentShader from '../shaders/vignette.frag'
import vertexShader from '../shaders/screen.vert'

export const VignetteShader = {
    uniforms: {
        tDiffuse: { value: null }
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
