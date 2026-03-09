uniform sampler2D tDiffuse;
uniform float uOffset;
uniform float uDarkness;
varying vec2 vUv;

void main() {
    vec4 tex = texture2D(tDiffuse, vUv);
    vec2 uv = vUv - 0.5;
    float dist = length(uv);
    float vignette = smoothstep(uOffset, uOffset + uDarkness, dist);
    
    tex.rgb *= (1.0 - vignette);
    gl_FragColor = tex;
}
