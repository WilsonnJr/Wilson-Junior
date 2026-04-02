import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// Microchip - flat box with pins
const Microchip = ({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const hovered = useRef(false);
  const speedMultiplier = useRef(1);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const target = hovered.current ? 2.5 : 1;
    speedMultiplier.current += (target - speedMultiplier.current) * 0.05;
    groupRef.current.rotation.y += delta * 0.3 * speedMultiplier.current;
    groupRef.current.rotation.z += delta * 0.15 * speedMultiplier.current;
  });

  const pinPositions = useMemo(() => {
    const pins: [number, number, number][] = [];
    for (let i = -3; i <= 3; i++) {
      pins.push([i * 0.12, 0, 0.45]);
      pins.push([i * 0.12, 0, -0.45]);
      pins.push([0.45, 0, i * 0.12]);
      pins.push([-0.45, 0, i * 0.12]);
    }
    return pins;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8} floatingRange={[-0.2, 0.2]}>
      <group
        ref={groupRef}
        position={position}
        rotation={rotation}
        onPointerOver={() => (hovered.current = true)}
        onPointerOut={() => (hovered.current = false)}
      >
        {/* Main body */}
        <mesh>
          <boxGeometry args={[0.7, 0.08, 0.7]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Die / center glow */}
        <mesh position={[0, 0.045, 0]}>
          <boxGeometry args={[0.3, 0.02, 0.3]} />
          <meshStandardMaterial color="#ccff00" emissive="#ccff00" emissiveIntensity={0.6} metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Pins */}
        {pinPositions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <boxGeometry args={[0.04, 0.02, 0.04]} />
            <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
          </mesh>
        ))}
        {/* Circuit traces on top */}
        {[[-0.15, 0.05, 0], [0.15, 0.05, 0.1], [0, 0.05, -0.15]].map((pos, i) => (
          <mesh key={`trace-${i}`} position={pos as [number, number, number]}>
            <boxGeometry args={[0.2, 0.005, 0.015]} />
            <meshStandardMaterial color="#ccff00" emissive="#ccff00" emissiveIntensity={0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

// Fiber optic cable bundle
const FiberOpticCable = ({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const hovered = useRef(false);
  const glowIntensity = useRef(0.3);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetGlow = hovered.current ? 1.5 : 0.3;
    glowIntensity.current += (targetGlow - glowIntensity.current) * 0.05;
    groupRef.current.rotation.z += delta * 0.2;
  });

  const fibers = useMemo(() => {
    const result: { pos: [number, number, number]; color: string }[] = [];
    const colors = ["#ccff00", "#99cc00", "#bbee00", "#ddff33", "#aadd00"];
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const r = 0.06;
      result.push({
        pos: [Math.cos(angle) * r, Math.sin(angle) * r, 0],
        color: colors[i % colors.length],
      });
    }
    return result;
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.3, 0.3]}>
      <group
        ref={groupRef}
        position={position}
        rotation={rotation}
        onPointerOver={() => (hovered.current = true)}
        onPointerOut={() => (hovered.current = false)}
      >
        {/* Outer sheath */}
        <mesh>
          <cylinderGeometry args={[0.12, 0.12, 1.2, 16]} />
          <meshStandardMaterial color="#222" metalness={0.5} roughness={0.4} transparent opacity={0.6} />
        </mesh>
        {/* Individual fibers */}
        {fibers.map((fiber, i) => (
          <mesh key={i} position={fiber.pos}>
            <cylinderGeometry args={[0.02, 0.02, 1.3, 8]} />
            <meshStandardMaterial
              color={fiber.color}
              emissive={fiber.color}
              emissiveIntensity={0.8}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
        {/* Glowing tips */}
        {fibers.map((fiber, i) => (
          <pointLight key={`light-${i}`} position={[fiber.pos[0], fiber.pos[1], 0.65]} color="#ccff00" intensity={0.15} distance={0.5} />
        ))}
      </group>
    </Float>
  );
};

// Circuit board piece
const CircuitBoard = ({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const hovered = useRef(false);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const speed = hovered.current ? 0.8 : 0.25;
    groupRef.current.rotation.x += delta * speed;
  });

  const traces = useMemo(() => {
    const result: { pos: [number, number, number]; size: [number, number, number] }[] = [];
    // Horizontal traces
    for (let i = 0; i < 5; i++) {
      result.push({
        pos: [(Math.random() - 0.5) * 0.6, 0.026, (Math.random() - 0.5) * 0.4],
        size: [0.15 + Math.random() * 0.2, 0.004, 0.01],
      });
    }
    // Vertical traces
    for (let i = 0; i < 3; i++) {
      result.push({
        pos: [(Math.random() - 0.5) * 0.5, 0.026, (Math.random() - 0.5) * 0.3],
        size: [0.01, 0.004, 0.12 + Math.random() * 0.15],
      });
    }
    return result;
  }, []);

  const components = useMemo(() => {
    const result: { pos: [number, number, number]; size: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < 4; i++) {
      result.push({
        pos: [(Math.random() - 0.5) * 0.5, 0.04, (Math.random() - 0.5) * 0.3],
        size: [0.04 + Math.random() * 0.03, 0.03, 0.04 + Math.random() * 0.03],
        color: i === 0 ? "#ccff00" : "#333",
      });
    }
    return result;
  }, []);

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6} floatingRange={[-0.15, 0.15]}>
      <group
        ref={groupRef}
        position={position}
        rotation={rotation}
        onPointerOver={() => (hovered.current = true)}
        onPointerOut={() => (hovered.current = false)}
      >
        {/* PCB board */}
        <mesh>
          <boxGeometry args={[0.8, 0.04, 0.5]} />
          <meshStandardMaterial color="#0d3d0d" metalness={0.3} roughness={0.6} />
        </mesh>
        {/* Copper traces */}
        {traces.map((trace, i) => (
          <mesh key={i} position={trace.pos}>
            <boxGeometry args={trace.size} />
            <meshStandardMaterial color="#ccff00" emissive="#ccff00" emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
        {/* Components */}
        {components.map((comp, i) => (
          <mesh key={`comp-${i}`} position={comp.pos}>
            <boxGeometry args={comp.size} />
            <meshStandardMaterial
              color={comp.color}
              emissive={comp.color === "#ccff00" ? "#ccff00" : "#000"}
              emissiveIntensity={comp.color === "#ccff00" ? 0.5 : 0}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

// Glass lens / capacitor
const GlassLens = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.rotation.x += delta * 0.2;
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2} floatingRange={[-0.25, 0.25]}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#ccff00"
          transmission={0.9}
          thickness={0.5}
          roughness={0.05}
          metalness={0}
          ior={1.5}
          transparent
          opacity={0.4}
          emissive="#ccff00"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[3, 3, 3]} color="#ccff00" intensity={0.8} distance={10} />
      <pointLight position={[-2, -1, 2]} color="#ccff00" intensity={0.4} distance={8} />
      <pointLight position={[0, 2, -2]} color="#ffffff" intensity={0.2} distance={6} />

      <Microchip position={[0, 0.5, 0]} rotation={[0.3, 0.5, 0]} />
      <FiberOpticCable position={[1.2, -0.3, -0.5]} rotation={[0.8, 0, 0.5]} />
      <CircuitBoard position={[-1, -0.5, 0.3]} rotation={[0.2, -0.3, 0.1]} />
      <GlassLens position={[-0.8, 0.8, -0.3]} />
      <GlassLens position={[0.9, 0.7, 0.2]} />
    </>
  );
};

const FloatingTechElements = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingTechElements;
