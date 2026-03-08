'use client'

import Scene from "@/webgl/Scene"
import IntroSection from "@/components/sections/IntroSection"
import CinematicHUD from "@/components/hud/CinematicHUD"
import Scanlines from "@/components/hud/Scanlines"

export default function Page() {
  return (
    <div className="relative bg-void">


      {/* 3D Scene Background */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      {/* Cinematic HUD Layer */}
      <CinematicHUD />
      <Scanlines />
      <div className="film-grain" />

      <IntroSection />
    </div>
  )
}
