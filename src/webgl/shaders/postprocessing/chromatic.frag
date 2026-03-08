uniform sampler2D tDiffuse;
uniform float uOffset;
varying vec2 vUv;

void main() {
    vec4 cr = texture2D(tDiffuse, vUv + vec2(uOffset, 0.0));
    vec4 cg = texture2D(tDiffuse, vUv);
    vec4 cb = texture2D(tDiffuse, vUv - vec2(uOffset, 0.0));
    gl_FragColor = vec4(cr.r, cg.g, cb.b, 1.0);
}
