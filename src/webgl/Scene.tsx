'use client'

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { SoftShadows } from "@react-three/drei"
import CameraRig from "@/webgl/CameraRig"
import CinematicLights from "@/webgl/lights/CinematicLights"
import Fog from "@/webgl/environment/Fog"
import GroundGrid from "@/webgl/environment/GroundGrid"
import CinematicComposer from "@/webgl/postprocessing/CinematicComposer"
import HelasStatue from "@/webgl/models/HelasStatue"

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.6, 5], fov: 35 }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
      dpr={[1, 2]}
    >
      {/* Background Color */}
      <color attach="background" args={["#050506"]} />

      {/* 3D Scene Architecture */}
      <Suspense fallback={null}>
        {/* <SoftShadows size={20} samples={8} focus={0.5} /> */}
        <CameraRig />

        <Suspense fallback={null}>
          <HelasStatue />
        </Suspense>

        <CinematicLights />
        <Fog />
        <GroundGrid />
        <CinematicComposer />

      </Suspense>
    </Canvas>
  )
}
