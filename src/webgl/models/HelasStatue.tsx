'use client'

import { useGLTF, ContactShadows } from "@react-three/drei"
import { useLayoutEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import HologramMaterial from "@/webgl/materials/HologramMaterial"

export default function HelasStatue() {
  const { scene } = useGLTF("/model3d/helas.glb")
  const groupRef = useRef<THREE.Group>(null)
  const materialRef = useRef<any>(null)

  useLayoutEffect(() => {
    // Ensure matrices are updated for accurate bounds
    scene.updateMatrixWorld()

    // Calculate the bounding box of the scene to find its bottom
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    box.getSize(size)
    const center = new THREE.Vector3()
    box.getCenter(center)

    // Move the bottom center of the model to [0, 0, 0]
    scene.position.x = -center.x
    scene.position.y = -box.min.y
    scene.position.z = -center.z

    // Enable shadows and apply "hologram" material to all meshes
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true
        obj.receiveShadow = true

        // Create a unique instance of our custom material
        const mat = new HologramMaterial()
        mat.uColor = new THREE.Color("#ff66cc") // Slight pinkish tint
        mat.opacity = 0.8
        mat.transparent = true
        mat.uScanlineDensity = 120.0
        mat.uScanlineSpeed = 1.5
        mat.uFresnelPower = 4.0
        obj.material = mat

        if (!materialRef.current) materialRef.current = []
        materialRef.current.push(mat)
      }
    })
  }, [scene])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.forEach((mat: any) => {
        mat.uTime = state.clock.getElapsedTime()
      })
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <primitive
        object={scene}
        scale={1}
      />
      {/* Contact Shadows at the base */}
      <ContactShadows
        opacity={0.4}
        scale={10}
        blur={2.4}
        far={10}
        resolution={256}
        color="#000000"
      />
    </group>
  )
}

useGLTF.preload("/model3d/helas.glb")
