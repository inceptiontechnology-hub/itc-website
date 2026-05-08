import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

export function Earth() {
  const [colorMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      "/textures/8k_earth_daymap.jpg",
      "/textures/8k_earth_clouds.jpg",
    ]
  );

  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 20; // Slower rotation
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsedTime / 18; // Slightly different speed for clouds
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight color="#ffffff" position={[10, 10, 10]} intensity={2.5} />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.01, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.6}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          map={colorMap}
          metalness={0.2}
          roughness={0.5}
          emissive="#112244"
          emissiveIntensity={0.1}
        />
      </mesh>
    </>
  );
}
