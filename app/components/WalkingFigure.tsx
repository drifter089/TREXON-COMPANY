"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const INK = "#0a0908";
const FLOOR = "#faf7f2";

export default function WalkingFigure() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.4, 4.2], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.65} color="#faf7f2" />

      <directionalLight
        position={[3, 6, 3]}
        intensity={1.15}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-2}
        shadow-bias={-0.001}
        shadow-radius={6}
      />

      <directionalLight
        position={[-3, 2, -1]}
        intensity={0.18}
        color="#e8d5b7"
      />

      <Suspense fallback={null}>
        <Figure />
        <Floor />
      </Suspense>
    </Canvas>
  );
}

function Figure() {
  const groupRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const stride = 2.4;

    if (groupRef.current) {
      // continuous left→right walk, wraps around
      const cycle = (t * 0.42) % 6;
      groupRef.current.position.x = cycle - 3;

      // subtle vertical bob synced to stride (twice per cycle)
      groupRef.current.position.y = Math.abs(Math.sin(t * stride)) * 0.045;
    }

    // Leg swing — opposite phases
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * stride) * 0.5;
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(t * stride + Math.PI) * 0.5;
    }

    // Arm swing — opposite of legs
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * stride + Math.PI) * 0.45;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(t * stride) * 0.45;
    }

    // Subtle torso lean per step
    if (torsoRef.current) {
      torsoRef.current.rotation.z = Math.sin(t * stride) * 0.022;
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={torsoRef} position={[0, 1, 0]}>
        {/* Torso */}
        <mesh castShadow>
          <capsuleGeometry args={[0.22, 0.62, 4, 12]} />
          <meshStandardMaterial color={INK} roughness={0.7} metalness={0} />
        </mesh>
        {/* Head */}
        <mesh castShadow position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshStandardMaterial color={INK} roughness={0.6} metalness={0} />
        </mesh>
      </group>

      {/* Left arm — anchored at shoulder */}
      <group ref={leftArmRef} position={[-0.27, 1.27, 0]}>
        <mesh castShadow position={[0, -0.32, 0]}>
          <capsuleGeometry args={[0.07, 0.55, 4, 8]} />
          <meshStandardMaterial color={INK} roughness={0.7} metalness={0} />
        </mesh>
      </group>

      {/* Right arm */}
      <group ref={rightArmRef} position={[0.27, 1.27, 0]}>
        <mesh castShadow position={[0, -0.32, 0]}>
          <capsuleGeometry args={[0.07, 0.55, 4, 8]} />
          <meshStandardMaterial color={INK} roughness={0.7} metalness={0} />
        </mesh>
      </group>

      {/* Left leg — anchored at hip */}
      <group ref={leftLegRef} position={[-0.1, 0.55, 0]}>
        <mesh castShadow position={[0, -0.4, 0]}>
          <capsuleGeometry args={[0.09, 0.65, 4, 8]} />
          <meshStandardMaterial color={INK} roughness={0.7} metalness={0} />
        </mesh>
      </group>

      {/* Right leg */}
      <group ref={rightLegRef} position={[0.1, 0.55, 0]}>
        <mesh castShadow position={[0, -0.4, 0]}>
          <capsuleGeometry args={[0.09, 0.65, 4, 8]} />
          <meshStandardMaterial color={INK} roughness={0.7} metalness={0} />
        </mesh>
      </group>
    </group>
  );
}

function Floor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[30, 15]} />
      <meshStandardMaterial color={FLOOR} roughness={1} metalness={0} />
    </mesh>
  );
}
