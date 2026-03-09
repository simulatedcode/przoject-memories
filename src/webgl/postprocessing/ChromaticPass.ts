import * as THREE from 'three'
import fragmentShader from '@/webgl/shaders/postprocessing/chromatic.frag'
import vertexShader from '@/webgl/shaders/screen.vert'

export const ChromaticShader = {
    uniforms: {
        tDiffuse: { value: null },
        uOffset: { value: 0.002 }
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
