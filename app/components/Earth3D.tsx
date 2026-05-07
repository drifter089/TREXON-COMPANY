"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import styles from "./Earth3D.module.css";

const TEX_W = 2048;
const TEX_H = 1024;
const OCEAN_COLOR = "#f4efe7";
const LAND_COLOR = "#2a2724";

function makeBlob(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  points = 14
) {
  ctx.beginPath();
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const r = radius * (0.6 + Math.random() * 0.7);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r * 0.85;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

function generateEarthTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = TEX_W;
  canvas.height = TEX_H;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = OCEAN_COLOR;
  ctx.fillRect(0, 0, TEX_W, TEX_H);

  ctx.fillStyle = LAND_COLOR;

  // Eurasia spread
  makeBlob(ctx, 1100, 360, 280);
  makeBlob(ctx, 1380, 320, 200);
  makeBlob(ctx, 1500, 420, 140);
  makeBlob(ctx, 850, 350, 180);

  // Africa region
  makeBlob(ctx, 1080, 580, 200);
  makeBlob(ctx, 1090, 740, 110);

  // Americas
  makeBlob(ctx, 470, 380, 220);
  makeBlob(ctx, 560, 690, 170);
  makeBlob(ctx, 380, 220, 90);

  // SE Asia + Australia
  makeBlob(ctx, 1640, 600, 100);
  makeBlob(ctx, 1730, 720, 120);
  makeBlob(ctx, 1580, 500, 70);

  // Antarctica band
  ctx.fillRect(0, 940, TEX_W, 84);

  // Soft blur for organic feel
  ctx.filter = "blur(2.5px)";
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = "none";

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

interface MeshProps {
  texture: THREE.Texture;
}

const ROTATION_PERIOD = 50;

function EarthMesh({ texture }: MeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const tiltGroupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += ((Math.PI * 2) / ROTATION_PERIOD) * delta;
    }
    if (tiltGroupRef.current) {
      const targetX = mouse.current.y * 0.18;
      const targetZ = -mouse.current.x * 0.16;
      tiltGroupRef.current.rotation.x +=
        (targetX - tiltGroupRef.current.rotation.x) * 0.04;
      tiltGroupRef.current.rotation.z +=
        (targetZ - tiltGroupRef.current.rotation.z) * 0.04;
    }
  });

  return (
    <group ref={tiltGroupRef} rotation={[0.18, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.92}
          metalness={0.04}
        />
      </mesh>
      {/* subtle rust accent dot on sphere surface */}
      <mesh position={[0.62, 0.32, 0.7]}>
        <sphereGeometry args={[0.04, 24, 24]} />
        <meshBasicMaterial color="#a63d2f" />
      </mesh>
    </group>
  );
}

interface Earth3DProps {
  ready: boolean;
}

export default function Earth3D({ ready }: Earth3DProps) {
  const texture = useMemo(() => {
    if (typeof document === "undefined") return null;
    return generateEarthTexture();
  }, []);

  if (!texture) return null;

  return (
    <motion.div
      className={styles.wrap}
      initial={{ opacity: 0 }}
      animate={ready ? { opacity: 1 } : {}}
      transition={{ duration: 1.1, delay: 0.9, ease: "linear" }}
    >
      <Canvas
        className={styles.canvas}
        camera={{ position: [0, 0, 3.4], fov: 35 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 2.5, 4]}
          intensity={1.6}
          color="#fff8eb"
        />
        <directionalLight
          position={[-2.5, -1.5, -2]}
          intensity={0.2}
          color="#a63d2f"
        />
        <EarthMesh texture={texture} />
      </Canvas>
      <span className={styles.shadow} aria-hidden />
    </motion.div>
  );
}
