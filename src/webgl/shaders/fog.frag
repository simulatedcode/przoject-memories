uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
varying vec2 vUv;

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    float depth = texture2D(tDepth, vUv).r;
    
    // Sci-fi fog color
    vec3 fogColor = vec3(0.04, 0.05, 0.07);
    
    // Simple linear fog based on depth
    float fogFactor = clamp(depth * 2.0, 0.0, 1.0);
    color.rgb = mix(color.rgb, fogColor, fogFactor);
    
    gl_FragColor = color;
}
