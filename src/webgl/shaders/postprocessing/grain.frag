uniform float uTime;
uniform float uIntensity;
varying vec2 vUv;

void main() {
    float n = fract(sin(dot(vUv, vec2(12.9898, 78.233) + uTime)) * 43758.5453);
    gl_FragColor = vec4(vec3(n * uIntensity), 1.0);
}
