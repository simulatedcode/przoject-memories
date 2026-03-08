'use client'

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Lighting from "./Lighting"
import CameraRig from "./CameraRig"
import HelasStatue from "../models/HelasStatue"

export default function Scene() {

  return (
    <Canvas
      camera={{ position: [0, 1.6, 3], fov: 35 }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
    >
      {/* Background */}
      <color attach="background" args={["#050506"]} />

      <Suspense fallback={null}>

        <CameraRig>

          {/* Lights */}
          <Lighting />

          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 5, 3]} />
            <HelasStatue />
          </Suspense>

        </CameraRig>

      </Suspense>

    </Canvas>
  )
}
