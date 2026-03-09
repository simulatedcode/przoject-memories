import * as THREE from 'three'
import fragmentShader from '@/webgl/shaders/postprocessing/colorgrade.frag'
import vertexShader from '@/webgl/shaders/screen.vert'

export const ColorGradeShader = {
    uniforms: {
        tDiffuse: { value: null }
    },
    vertexShader,
    fragmentShader
}

export class ColorGradePass extends THREE.ShaderMaterial {
    constructor() {
        super({
            uniforms: THREE.UniformsUtils.clone(ColorGradeShader.uniforms),
            vertexShader: ColorGradeShader.vertexShader,
            fragmentShader: ColorGradeShader.fragmentShader
        })
    }
}
