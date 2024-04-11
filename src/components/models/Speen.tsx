import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Cola from "./Cola";
import * as THREE from "three";
const Speen = () => {
  const ref = useRef<THREE.Group | null>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z = 0.2;
    ref.current.rotation.x = 0;
  });
  return (
    <group position={[0, 0, 0]} ref={ref}>
      <group position={[0, -2.5, 0]}>
        <Cola />
      </group>
    </group>
  );
};

export default Speen;
