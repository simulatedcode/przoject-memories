uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normalize(normalMatrix * normal);
  
  vec3 pos = position;
  
  // Subtle holographic jitter/interference
  pos.x += sin(uTime * 10.0 + pos.y * 10.0) * 0.005;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
