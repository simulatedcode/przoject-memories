import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function CameraRig({ children }: any) {

  const rig = useRef<THREE.Group>(null)
  const { camera } = useThree()

  useFrame(() => {
    camera.lookAt(0, 1, 0)
  })

  return (
    <group ref={rig}>
      {children}
    </group>
  )
}
