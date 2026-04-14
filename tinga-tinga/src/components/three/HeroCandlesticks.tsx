"use client";

import { OrthographicCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, InstancedMesh } from "three";
import { AdditiveBlending, Color, Object3D as ThreeObject3D } from "three";

type Candle = {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  opacity: number;
};

const DUMMY = new ThreeObject3D();

function createCandle(previousClose = 0) {
  const drift = (Math.random() - 0.45) * 0.4;
  const open = previousClose + (Math.random() - 0.5) * 0.2;
  const close = open + drift;
  const high = Math.max(open, close) + Math.random() * 0.3 + 0.08;
  const low = Math.min(open, close) - Math.random() * 0.3 - 0.08;
  return { open, close, high, low };
}

function Candles({ maxCandles }: { maxCandles: number }) {
  const candlesRef = useRef<Candle[]>([]);
  const bodyMeshRef = useRef<InstancedMesh | null>(null);
  const wickMeshRef = useRef<InstancedMesh | null>(null);
  const particlesRef = useRef<Group | null>(null);
  const lastSpawn = useRef(0);
  const cursor = useRef(0);
  const previousClose = useRef(0);

  const particlePositions = useMemo(
    () =>
      Array.from({ length: 36 }, (_, index) => ({
        x: ((index % 9) - 4) * 1.8 + (index % 2 === 0 ? 0.45 : -0.45),
        y: (index % 6) - 3,
        z: ((index % 6) - 3) * 0.22,
      })),
    [],
  );

  useFrame((_, delta) => {
    lastSpawn.current += delta;
    if (lastSpawn.current > 0.8) {
      lastSpawn.current = 0;
      const candle = createCandle(previousClose.current);
      previousClose.current = candle.close;
      candlesRef.current.push({
        x: 8.8,
        opacity: 1,
        ...candle,
      });
      if (candlesRef.current.length > maxCandles) {
        candlesRef.current.shift();
      }
    }

    candlesRef.current = candlesRef.current
      .map((item) => ({
        ...item,
        x: item.x - delta * 1.3,
        opacity: item.x < -7.2 ? Math.max(0, item.opacity - delta * 0.9) : item.opacity,
      }))
      .filter((item) => item.opacity > 0);

    if (bodyMeshRef.current && wickMeshRef.current) {
      const bodies = bodyMeshRef.current;
      const wicks = wickMeshRef.current;

      for (let i = 0; i < maxCandles; i += 1) {
        const c = candlesRef.current[i];
        if (!c) {
          DUMMY.scale.set(0, 0, 0);
          DUMMY.position.set(0, -99, 0);
          DUMMY.updateMatrix();
          bodies.setMatrixAt(i, DUMMY.matrix);
          wicks.setMatrixAt(i, DUMMY.matrix);
          continue;
        }

        const isBull = c.close >= c.open;
        const bodyHeight = Math.max(0.06, Math.abs(c.close - c.open));
        const bodyCenter = (c.open + c.close) / 2;
        const wickHeight = Math.max(0.08, c.high - c.low);

        DUMMY.position.set(c.x, bodyCenter, isBull ? -0.08 : 0.08);
        DUMMY.scale.set(0.22, bodyHeight, 0.22);
        DUMMY.updateMatrix();
        bodies.setMatrixAt(i, DUMMY.matrix);
        bodies.setColorAt(i, new Color(isBull ? "#10B981" : "#DC2626").multiplyScalar(c.opacity));

        DUMMY.position.set(c.x, (c.high + c.low) / 2, 0);
        DUMMY.scale.set(0.045, wickHeight, 0.045);
        DUMMY.updateMatrix();
        wicks.setMatrixAt(i, DUMMY.matrix);
        wicks.setColorAt(i, new Color(isBull ? "#34D399" : "#F87171").multiplyScalar(c.opacity));
      }

      bodies.instanceMatrix.needsUpdate = true;
      wicks.instanceMatrix.needsUpdate = true;
      if (bodies.instanceColor) bodies.instanceColor.needsUpdate = true;
      if (wicks.instanceColor) wicks.instanceColor.needsUpdate = true;
    }

    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, index) => {
        const driftY = delta * (0.25 + ((index % 5) + 1) * 0.12);
        child.position.y += driftY;
        if (child.position.y > 3.8) {
          const seed = particlePositions[index];
          child.position.set(seed.x, -3.2, seed.z);
        }
      });
      cursor.current += delta;
      particlesRef.current.rotation.y = Math.sin(cursor.current * 0.2) * 0.12;
    }
  });

  return (
    <>
      <instancedMesh
        ref={bodyMeshRef}
        args={[undefined, undefined, maxCandles]}
        frustumCulled={false}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial emissive="#021a0f" emissiveIntensity={0.5} metalness={0.15} roughness={0.5} />
      </instancedMesh>

      <instancedMesh
        ref={wickMeshRef}
        args={[undefined, undefined, maxCandles]}
        frustumCulled={false}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial emissive="#140b0b" emissiveIntensity={0.35} metalness={0.08} roughness={0.52} />
      </instancedMesh>

      <group ref={particlesRef}>
        {particlePositions.map((particle, index) => (
          <mesh key={`${particle.x}-${particle.z}-${index}`} position={[particle.x, particle.y, particle.z]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial
              color={index % 3 === 0 ? "#d4a253" : index % 2 === 0 ? "#10B981" : "#DC2626"}
              transparent
              opacity={0.55}
              blending={AdditiveBlending}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

function PriceGrid() {
  return (
    <group>
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh key={`line-${i}`} position={[0, i - 3, -0.6]} rotation={[0, 0, 0]}>
          <boxGeometry args={[18, 0.012, 0.01]} />
          <meshBasicMaterial color="#1F2937" transparent opacity={0.33} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroCandlesticks({ mobile }: { mobile: boolean }) {
  const visibleCandles = mobile ? 24 : 38;

  return (
    <Canvas
      dpr={mobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !mobile, powerPreference: "high-performance", alpha: true }}
      frameloop="always"
      onCreated={(state) => {
        state.gl.setPixelRatio(mobile ? 1.1 : Math.min(window.devicePixelRatio, 2));
        state.gl.setClearColor(new Color(0x000000), 0);
      }}
    >
      <fog attach="fog" args={["#0f0e0c", 8, 18]} />
      <OrthographicCamera makeDefault zoom={55} position={[0, 0.2, 8]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 8, 6]} intensity={1.4} color="#d4a253" />
      <directionalLight position={[-5, 3, 3]} intensity={0.35} color="#b8860b" />
      <group rotation={[-0.26, 0.2, 0]}>
        <PriceGrid />
        <Candles maxCandles={visibleCandles} />
      </group>
    </Canvas>
  );
}
