import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const electricSymbols = [
  { symbol: "Ω", name: "Resistência" },
  { symbol: "V", name: "Tensão" },
  { symbol: "A", name: "Corrente" },
  { symbol: "W", name: "Potência" },
  { symbol: "F", name: "Capacitância" },
  { symbol: "H", name: "Indutância" },
  { symbol: "Hz", name: "Frequência" },
  { symbol: "Φ", name: "Fluxo" },
];

const orbits = [
  { tiltX: Math.PI * 0.35, tiltZ: 0, speed: 0.15 },
  { tiltX: -Math.PI * 0.1, tiltZ: Math.PI * 0.33, speed: 0.12 },
  { tiltX: Math.PI * 0.15, tiltZ: -Math.PI * 0.25, speed: 0.1 },
];

const symbolAssign = [
  [0, 1, 2],
  [3, 4],
  [5, 6, 7],
];

function OrbitRing({ tiltX, tiltZ }: { tiltX: number; tiltZ: number }) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * 2.8, Math.sin(angle) * 2.8, 0));
    }
    return pts;
  }, []);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <line geometry={geometry}>
        <lineBasicMaterial color="#22c55e" transparent opacity={0.12} />
      </line>
    </group>
  );
}

function OrbitingSymbol({
  symbol,
  orbitIndex,
  indexInOrbit,
  totalInOrbit,
}: {
  symbol: string;
  orbitIndex: number;
  indexInOrbit: number;
  totalInOrbit: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const orbit = orbits[orbitIndex];
  const radius = 2.8;
  const baseAngle = (indexInOrbit / totalInOrbit) * Math.PI * 2;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * orbit.speed + baseAngle;
    const x = Math.cos(t) * radius;
    const y = Math.sin(t) * radius;

    // Apply orbit tilt
    const cosX = Math.cos(orbit.tiltX);
    const sinX = Math.sin(orbit.tiltX);
    const cosZ = Math.cos(orbit.tiltZ);
    const sinZ = Math.sin(orbit.tiltZ);

    // Rotate around X then Z
    const y1 = y * cosX;
    const z1 = -y * sinX;
    const x2 = x * cosZ - y1 * sinZ;
    const y2 = x * sinZ + y1 * cosZ;

    groupRef.current.position.set(x2, y2, z1);
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0} floatIntensity={0.3}>
        <Text
          fontSize={0.45}
          color="#22c55e"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {symbol}
        </Text>
        {/* Glow sprite behind text */}
        <sprite scale={[1.2, 1.2, 1]}>
          <spriteMaterial color="#22c55e" transparent opacity={0.08} />
        </sprite>
      </Float>
    </group>
  );
}

function LightningBolt() {
  const meshRef = useRef<THREE.Group>(null);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Lightning bolt shape
    s.moveTo(0.15, 0.8);
    s.lineTo(-0.3, 0.15);
    s.lineTo(0.0, 0.15);
    s.lineTo(-0.15, -0.8);
    s.lineTo(0.3, -0.15);
    s.lineTo(0.0, -0.15);
    s.closePath();
    return s;
  }, []);

  const geometry = useMemo(() => {
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.15,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 3,
    });
  }, [shape]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
  });

  return (
    <group ref={meshRef}>
      <mesh geometry={geometry} position={[0, 0, -0.075]}>
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={1.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Glow */}
      <pointLight color="#22c55e" intensity={3} distance={5} decay={2} />
    </group>
  );
}

function Scene() {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!sceneRef.current) return;
    sceneRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.15;
  });

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      {/* Lightning bolt nucleus */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <LightningBolt />
      </Float>

      {/* Orbit rings */}
      {orbits.map((o, i) => (
        <OrbitRing key={i} tiltX={o.tiltX} tiltZ={o.tiltZ} />
      ))}

      {/* Orbiting symbols */}
      {symbolAssign.map((indices, orbitIdx) =>
        indices.map((symIdx, i) => (
          <OrbitingSymbol
            key={electricSymbols[symIdx].symbol}
            symbol={electricSymbols[symIdx].symbol}
            orbitIndex={orbitIdx}
            indexInOrbit={i}
            totalInOrbit={indices.length}
          />
        ))
      )}
    </group>
  );
}

const FloatingTechElements = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingTechElements;
