import { Grid } from "@react-three/drei"

export default function GroundGrid() {
    return (
        <group position={[0, 0, 0]}>
            {/* The Grid lines */}
            <Grid
                renderOrder={-1}
                position={[0, 0, 0]}
                args={[100, 100]}
                cellSize={1}
                cellThickness={1.5}
                cellColor="#4FD1C5"
                sectionSize={5}
                sectionThickness={2.5}
                sectionColor="#38B2AC"
                fadeDistance={40}
                fadeStrength={1}
            />

            {/* The Shadow Receiver Plane */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.01, 0]}
                receiveShadow
            >
                <planeGeometry args={[100, 100]} />
                <shadowMaterial transparent opacity={0.7} />
            </mesh>
        </group>
    )
}
