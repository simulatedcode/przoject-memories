import { Environment } from "@react-three/drei";

export default function CinematicLights() {

  return (
    <>
      <color attach="background" args={['#080808']} />
      <fog attach="fog" args={['#080808', 8, 28]} />

      <Environment preset="dawn" environmentIntensity={0.5} />

      {/* Ambient */}
      <ambientLight intensity={0.4} />

      {/* Key light - Long shadow casting light */}
      <directionalLight
        position={[20, 5, -10]}
        intensity={2.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-camera-near={0.1}
        shadow-camera-far={100}
        shadow-bias={-0.0001}
      />

      {/* Rim light — cool purple volumetric glow from behind */}
      <pointLight position={[0, 3, -8]} intensity={8} color="#6060ff" decay={2} />

      {/* Subtle warm fill from the front-left — strong enough to read the model clearly */}
      <spotLight position={[-4, 3, 3]} intensity={3.5} color="#ffe8c0" angle={0.5} penumbra={1} />
    </>
  )

}
