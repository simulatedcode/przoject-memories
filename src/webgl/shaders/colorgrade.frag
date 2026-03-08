uniform sampler2D tDiffuse;
varying vec2 vUv;

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    
    // Increase blue tones
    color.b *= 1.1;
    // Reduce green slightly
    color.g *= 0.95;
    
    // Apply gamma curve (simplified)
    color.rgb = pow(color.rgb, vec3(1.1));
    
    gl_FragColor = color;
}
