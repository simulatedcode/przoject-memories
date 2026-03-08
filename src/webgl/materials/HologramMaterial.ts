import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

import vertex from '@/webgl/shaders/materials/HelasMaterial/vertex.glsl'
import fragment from '@/webgl/shaders/materials/HelasMaterial/fragment.glsl'

export const HologramMaterial = shaderMaterial(
    {
        uTime: 0,
        uColor: new THREE.Color("#ffb000"),
        uOpacity: 0.5,
        cameraPosition: new THREE.Vector3(),
        uScanlineDensity: 100.0,
        uScanlineSpeed: 2.0,
        uFresnelPower: 3.0,
    },
    vertex,
    fragment
)

extend({ HologramMaterial })

export default HologramMaterial

// Type definitions for R3F
declare global {
    namespace JSX {
        interface IntrinsicElements {
            hologramMaterial: any
        }
    }
}
