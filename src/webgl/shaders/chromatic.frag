uniform sampler2D tDiffuse;
varying vec2 vUv;

void main() {
    // R offset +0.002, B offset -0.002
    float r = texture2D(tDiffuse, vUv + vec2(0.002, 0.0)).r;
    float g = texture2D(tDiffuse, vUv).g;
    float b = texture2D(tDiffuse, vUv - vec2(0.002, 0.0)).b;
    
    gl_FragColor = vec4(r, g, b, 1.0);
}
