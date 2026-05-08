"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Text3D } from "@react-three/drei";
import * as THREE from "three";

const STONE = "#f0e9dd";
const ACCENT = "#d4694a";

export default function WorkSculpture() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 28 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.55} color="#fff8ec" />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.2}
        color="#ffffff"
      />

      <directionalLight
        position={[-5, -2, 3]}
        intensity={0.35}
        color="#e8d5b7"
      />

      <Suspense fallback={null}>
        <Sculpture />
      </Suspense>
    </Canvas>
  );
}

function Sculpture() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    // Slow drift — sculpture turning on a plinth. No fast spin during
    // the entry — we want the word "work" readable the whole time.
    groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.28;
    groupRef.current.rotation.x = Math.sin(t * 0.12) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Text3D
          font="/fonts/gentilis_regular.typeface.json"
          size={1.3}
          height={0.32}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.015}
          bevelSegments={4}
          letterSpacing={-0.02}
        >
          work
          <meshStandardMaterial
            color={STONE}
            roughness={0.85}
            metalness={0.04}
          />
        </Text3D>
      </Center>

      {/* Accent period — terracotta sphere offset to the lower-right */}
      <mesh position={[2.55, -0.55, 0.18]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color={ACCENT}
          roughness={0.55}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}
