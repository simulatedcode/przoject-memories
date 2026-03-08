'use client'

import { useGLTF } from "@react-three/drei"

export default function HelasStatue() {

  const { scene } = useGLTF("/model3d/helas.glb")

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
    />
  )
}

useGLTF.preload("/model3d/helas.glb")
