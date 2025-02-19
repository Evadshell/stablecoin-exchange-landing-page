import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      <Sphere ref={globeRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          color="#4338ca"
          transparent
          opacity={0.3}
          wireframe
        />
      </Sphere>
      <points ref={particlesRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <pointsMaterial
          color="#818cf8"
          size={0.02}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
}