import * as THREE from 'three'
import fragmentShader from '../shaders/grain.frag'
import vertexShader from '../shaders/screen.vert'

export const GrainShader = {
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0 }
    },
    vertexShader,
    fragmentShader
}

export class GrainPass extends THREE.ShaderMaterial {
    constructor() {
        super({
            uniforms: THREE.UniformsUtils.clone(GrainShader.uniforms),
            vertexShader: GrainShader.vertexShader,
            fragmentShader: GrainShader.fragmentShader
        })
    }
}
