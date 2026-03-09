import * as THREE from 'three'
import fragmentShader from '@/webgl/shaders/postprocessing/fog.frag'
import vertexShader from '@/webgl/shaders/screen.vert'

export const FogShader = {
    uniforms: {
        tDiffuse: { value: null },
        tDepth: { value: null },
        uColor: { value: new THREE.Color(0.04, 0.05, 0.07) },
        uDensity: { value: 0.08 }
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
