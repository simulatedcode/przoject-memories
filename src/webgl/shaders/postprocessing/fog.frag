uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform vec3 uColor;
uniform float uDensity;
varying vec2 vUv;

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    float depth = texture2D(tDepth, vUv).r;
    
    // Depth is usually 0-1, 1 is far plane.
    // Exponential fog factor based on depth
    float fogFactor = smoothstep(0.0, 1.0, depth * uDensity * 10.0);
    
    color.rgb = mix(color.rgb, uColor, fogFactor);
    
    gl_FragColor = color;
}
