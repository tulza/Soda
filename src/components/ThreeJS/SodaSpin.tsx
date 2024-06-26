import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { SodaContext } from "@/App";
import { useGLTF } from "@react-three/drei";
const SodaSpin = ({ state }: { state: number }) => {
  const ref = useRef<THREE.Group | null>(null);
  const data = useContext(SodaContext);
  const currSoda = Object.keys(data)[state - 1];
  // Get data from JSON
  //@ts-ignore
  const { modelLink } = data[currSoda];
  const soda = useGLTF(modelLink);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z = 0.2;
    ref.current.rotation.x = 0;
  });
  return (
    <>
      <group position={[0, 0, -2]} ref={ref}>
        <group position={[0, -3.5, 0]}>
          <primitive object={soda.scene} />
        </group>
      </group>
    </>
  );
};

export default SodaSpin;
