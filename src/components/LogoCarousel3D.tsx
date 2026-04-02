import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import mrvLogo from "@/assets/mrv.png";
import plaengeLogo from "@/assets/plaenge.png";
import piemonteLogo from "@/assets/piemonte.png";
import yticonLogo from "@/assets/yticon.png";
import yoshiiLogo from "@/assets/yoshii.webp";

const logos = [mrvLogo, plaengeLogo, piemonteLogo, yticonLogo, yoshiiLogo];

const LogoPlane = ({
  textureUrl,
  angle,
  radius,
}: {
  textureUrl: string;
  angle: number;
  radius: number;
}) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl);
  const meshRef = useRef<THREE.Mesh>(null);

  const position = useMemo((): [number, number, number] => {
    return [Math.sin(angle) * radius, 0, Math.cos(angle) * radius];
  }, [angle, radius]);

  useFrame(() => {
    if (!meshRef.current) return;
    // Always face the camera roughly
    meshRef.current.lookAt(0, 0, 0);
    meshRef.current.rotateY(Math.PI);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1.2, 0.6]} />
      <meshBasicMaterial map={texture} transparent opacity={0.85} side={THREE.DoubleSide} />
    </mesh>
  );
};

const CarouselRing = () => {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 2.5;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.3;
  });

  // Ring wireframe
  const ringGeometry = useMemo(() => new THREE.TorusGeometry(radius, 0.015, 8, 64), [radius]);

  return (
    <group ref={groupRef}>
      {/* Neon ring */}
      <mesh geometry={ringGeometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#ccff00" transparent opacity={0.3} />
      </mesh>

      {/* Logo planes */}
      {logos.map((logo, i) => {
        const angle = (i / logos.length) * Math.PI * 2;
        return <LogoPlane key={i} textureUrl={logo} angle={angle} radius={radius} />;
      })}

      {/* Glow point lights at each logo */}
      {logos.map((_, i) => {
        const angle = (i / logos.length) * Math.PI * 2;
        return (
          <pointLight
            key={`light-${i}`}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            color="#ccff00"
            intensity={0.3}
            distance={2}
          />
        );
      })}
    </group>
  );
};

const LogoCarousel3D = () => {
  return (
    <div className="w-full h-[220px] md:h-[280px]">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <CarouselRing />
      </Canvas>
    </div>
  );
};

export default LogoCarousel3D;
