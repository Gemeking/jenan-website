"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

function CrossMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.007;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    }
    if (glowRef.current) {
      const pulse = 0.7 + Math.sin(state.clock.elapsedTime * 1.8) * 0.3;
      (glowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    }
  });

  const redMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#C81E1E"),
    metalness: 0.45,
    roughness: 0.18,
    emissive: new THREE.Color("#7F1D1D"),
    emissiveIntensity: 0.4,
  });

  const glowMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#EF4444"),
    emissive: new THREE.Color("#DC2626"),
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
  });

  return (
    <Float speed={2.2} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={groupRef}>
        {/* Main cross — horizontal beam */}
        <mesh material={redMat} castShadow>
          <boxGeometry args={[2.6, 0.82, 0.38]} />
        </mesh>
        {/* Main cross — vertical beam */}
        <mesh material={redMat} castShadow>
          <boxGeometry args={[0.82, 2.6, 0.38]} />
        </mesh>

        {/* Beveled edge highlights — top/bottom faces */}
        <mesh position={[0, 0, 0.2]}>
          <boxGeometry args={[2.58, 0.8, 0.04]} />
          <meshStandardMaterial color="#F87171" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.2]}>
          <boxGeometry args={[0.8, 2.58, 0.04]} />
          <meshStandardMaterial color="#F87171" metalness={0.2} roughness={0.3} />
        </mesh>

        {/* Outer glow halos */}
        <mesh ref={glowRef} material={glowMat}>
          <boxGeometry args={[3.0, 1.2, 0.8]} />
        </mesh>
        <mesh material={glowMat}>
          <boxGeometry args={[1.2, 3.0, 0.8]} />
        </mesh>

        {/* Center gem / emblem */}
        <mesh position={[0, 0, 0.25]} castShadow>
          <cylinderGeometry args={[0.28, 0.28, 0.12, 6]} />
          <meshStandardMaterial
            color="#FCA5A5"
            metalness={0.7}
            roughness={0.1}
            emissive="#EF4444"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function MedicalCross3D({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 44 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.55} color="#fff5f5" />
        <directionalLight
          position={[4, 6, 5]}
          intensity={2.2}
          color="#ffffff"
          castShadow
        />
        {/* Warm red rim light from front-left */}
        <pointLight position={[-3, 2, 4]} color="#EF4444" intensity={3.5} />
        {/* Cool blue fill from opposite */}
        <pointLight position={[3, -3, 2]} color="#93C5FD" intensity={1.2} />
        {/* Warm back light */}
        <pointLight position={[0, 0, -4]} color="#FCA5A5" intensity={1.8} />

        <Suspense fallback={null}>
          <CrossMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
