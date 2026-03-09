uniform sampler2D tDiffuse;
uniform float uTime;
uniform float uIntensity;
varying vec2 vUv;

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    
    // Quick random noise based on UV and time
    float noise = (fract(sin(dot(vUv, vec2(12.9898, 78.233) + uTime)) * 43758.5453) - 0.5) * 2.0;
    
    color.rgb += noise * uIntensity;
    
    gl_FragColor = color;
}
