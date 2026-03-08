uniform float uTime;
uniform vec3 uColor;
uniform float uOpacity;
uniform vec3 cameraPosition;
uniform float uScanlineDensity;
uniform float uScanlineSpeed;
uniform float uFresnelPower;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  // Horizontal Scanlines
  float scanline = sin(vPosition.y * uScanlineDensity - uTime * uScanlineSpeed) * 0.5 + 0.5;
  scanline = pow(scanline, 1.5); // Sharpen scanlines
  
  // Fresnel glow (rim light)
  vec3 viewDirection = normalize(cameraPosition - vPosition);
  float fresnel = pow(1.0 - dot(vNormal, viewDirection), uFresnelPower);
  
  // Base holographic color
  vec3 baseColor = mix(vec3(1.0), uColor, 0.4);
  
  // Final Alpha/Opacity logic
  float alpha = (fresnel * 0.8 + 0.2) * scanline * uOpacity;
  
  // Final composite
  vec3 finalColor = baseColor + fresnel * 0.5;
  
  gl_FragColor = vec4(finalColor, alpha);
}
