import {
    EffectComposer,
    Bloom,
    Noise,
    Vignette,
    ChromaticAberration,
    BrightnessContrast,
    HueSaturation
} from "@react-three/postprocessing"
import { Vector2 } from "three"

export default function PostFX() {
    return (
        <EffectComposer enableNormalPass>
            <Bloom
                luminanceThreshold={0.2}
                mipmapBlur
                intensity={1.5}
                radius={0.4}
            />
            <ChromaticAberration
                offset={new Vector2(0.0015, 0.0015)}
                radialModulation={false}
                modulationOffset={0}
            />
            <BrightnessContrast
                brightness={0.0}
                contrast={0.1}
            />
            <HueSaturation
                saturation={-0.1}
            />
            <Noise opacity={0.08} />
            <Vignette eskil={false} offset={0.05} darkness={1.2} />
        </EffectComposer>
    )
}
