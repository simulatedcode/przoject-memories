export default function Lighting() {

  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.3} />

      {/* Key light */}
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.2}
      />

      {/* Sci-fi rim light */}
      <pointLight
        position={[-3, 2, 2]}
        color="#00ffff"
        intensity={1}
      />
    </>
  )

}
