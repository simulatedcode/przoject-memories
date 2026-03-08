import * as THREE from 'three'
import fragmentShader from '../shaders/fog.frag'
import vertexShader from '../shaders/screen.vert'

export const FogShader = {
    uniforms: {
        tDiffuse: { value: null },
        tDepth: { value: null }
    },
    vertexShader,
    fragmentShader
}

export class FogPass extends THREE.ShaderMaterial {
    constructor() {
        super({
            uniforms: THREE.UniformsUtils.clone(FogShader.uniforms),
            vertexShader: FogShader.vertexShader,
            fragmentShader: FogShader.fragmentShader
        })
    }
}
