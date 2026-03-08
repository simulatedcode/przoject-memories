/**
 * Linear interpolation between two values.
 */
export const lerp = (v0: number, v1: number, t: number) => v0 * (1 - t) + v1 * t

/**
 * Clamp a value between a minimum and maximum.
 */
export const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val))

/**
 * Map a value from one range to another.
 */
export const mapRange = (
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

/**
 * Normalize a value between 0 and 1 given a range.
 */
export const normalize = (value: number, min: number, max: number) =>
    clamp((value - min) / (max - min), 0, 1)

/**
 * Smoothstep interpolation.
 */
export const smoothstep = (min: number, max: number, value: number) => {
    const x = Math.max(0, Math.min(1, (value - min) / (max - min)))
    return x * x * (3 - 2 * x)
}
