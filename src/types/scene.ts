import { NarrativeMode } from "@/types/store"

export interface CameraTransform {
    position: [number, number, number]
    target: [number, number, number]
    fov?: number
}

export interface AtmosphereConfig {
    fogColor: string
    fogDensity: number
    gridColor: string
    ambientIntensity: number
}

export interface SceneState {
    activeMode: NarrativeMode
    isTransitioning: boolean
    transitionProgress: number
}

export interface ModelProps {
    position?: [number, number, number]
    rotation?: [number, number, number]
    scale?: number | [number, number, number]
}
