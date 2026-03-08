import * as THREE from 'three'
import fragmentShader from '../shaders/chromatic.frag'
import vertexShader from '../shaders/screen.vert'

export const ChromaticShader = {
    uniforms: {
        tDiffuse: { value: null }
    },
    vertexShader,
    fragmentShader
}

export class ChromaticPass extends THREE.ShaderMaterial {
    constructor() {
        super({
            uniforms: THREE.UniformsUtils.clone(ChromaticShader.uniforms),
            vertexShader: ChromaticShader.vertexShader,
            fragmentShader: ChromaticShader.fragmentShader
        })
    }
}
