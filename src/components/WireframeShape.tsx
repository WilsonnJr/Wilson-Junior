import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type ShapeType = "icosahedron" | "octahedron" | "dodecahedron" | "tetrahedron" | "torus" | "torusKnot" | "cube" | "cylinder" | "cone";

const WireframeGeometry = ({
  shape,
  focused,
  dimmed,
}: {
  shape: ShapeType;
  focused: boolean;
  dimmed: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const glowRef = useRef(0.4);

  const geometry = useMemo(() => {
    switch (shape) {
      case "icosahedron": return new THREE.IcosahedronGeometry(1, 0);
      case "octahedron": return new THREE.OctahedronGeometry(1, 0);
      case "dodecahedron": return new THREE.DodecahedronGeometry(1, 0);
      case "tetrahedron": return new THREE.TetrahedronGeometry(1, 0);
      case "torus": return new THREE.TorusGeometry(0.8, 0.3, 8, 16);
      case "torusKnot": return new THREE.TorusKnotGeometry(0.6, 0.2, 64, 8);
      case "cube": return new THREE.BoxGeometry(1.2, 1.2, 1.2);
      case "cylinder": return new THREE.CylinderGeometry(0.7, 0.7, 1.4, 8);
      case "cone": return new THREE.ConeGeometry(0.8, 1.4, 6);
    }
  }, [shape]);

  const edgesGeometry = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  useFrame((_, delta) => {
    if (!meshRef.current || !edgesRef.current) return;

    // Rotation - stop when focused, slow otherwise
    const speed = focused ? 0 : dimmed ? 0.15 : 0.4;
    meshRef.current.rotation.y += delta * speed;
    meshRef.current.rotation.x += delta * speed * 0.5;
    edgesRef.current.rotation.copy(meshRef.current.rotation);

    // Glow intensity
    const targetGlow = focused ? 1.8 : dimmed ? 0.1 : 0.4;
    glowRef.current += (targetGlow - glowRef.current) * 0.08;

    const mat = edgesRef.current.material as THREE.LineBasicMaterial;
    mat.opacity = focused ? 1 : dimmed ? 0.2 : 0.7;

    const meshMat = meshRef.current.material as THREE.MeshStandardMaterial;
    meshMat.emissiveIntensity = glowRef.current;
    meshMat.opacity = focused ? 0.15 : dimmed ? 0.02 : 0.05;
  });

  return (
    <Float speed={focused ? 0 : 1.5} rotationIntensity={0} floatIntensity={focused ? 0 : 0.5}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#ccff00"
          emissive="#ccff00"
          emissiveIntensity={0.4}
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edgesGeometry}>
        <lineBasicMaterial color="#ccff00" transparent opacity={0.7} linewidth={1} />
      </lineSegments>
      {focused && (
        <pointLight color="#ccff00" intensity={2} distance={4} />
      )}
    </Float>
  );
};

const WireframeShape = ({
  shape,
  focused,
  dimmed,
}: {
  shape: ShapeType;
  focused: boolean;
  dimmed: boolean;
}) => {
  return (
    <div className="w-full h-[120px]">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[2, 2, 2]} color="#ccff00" intensity={0.5} />
        <WireframeGeometry shape={shape} focused={focused} dimmed={dimmed} />
      </Canvas>
    </div>
  );
};

export default WireframeShape;
export type { ShapeType };
