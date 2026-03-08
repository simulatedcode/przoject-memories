float linearFog(float distance, float start, float end) {
    return clamp((end - distance) / (end - start), 0.0, 1.0);
}

float expFog(float distance, float density) {
    return exp(-distance * density);
}

float exp2Fog(float distance, float density) {
    float d = distance * density;
    return exp(-d * d);
}
