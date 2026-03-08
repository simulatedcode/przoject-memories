uniform float uOffset;
uniform float uDarkness;
varying vec2 vUv;

void main() {
    vec2 uv = vUv - 0.5;
    float dist = length(uv);
    float vignette = smoothstep(uOffset, uOffset + uDarkness, dist);
    gl_FragColor = vec4(vec3(1.0 - vignette), 1.0);
}
