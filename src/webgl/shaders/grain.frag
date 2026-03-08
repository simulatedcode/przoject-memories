uniform sampler2D tDiffuse;
uniform float uTime;
varying vec2 vUv;

float random(vec2 p) {
    vec2 K1 = vec2(
        23.14069263277926, // e^pi (Gelfond's constant)
        2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
    );
    return fract(cos(dot(p, K1)) * 12345.6789);
}

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    
    // Subtle animated film noise
    float noise = random(vUv + mod(uTime, 10.0));
    color.rgb += (noise - 0.5) * 0.03;
    
    gl_FragColor = color;
}
