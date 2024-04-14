import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import * as THREE from "three";
import { SodaContext } from "@/App";
import { useGLTF } from "@react-three/drei";
const SodaSpin = ({ state }: { state: number }) => {
  const ref = useRef<THREE.Group | null>(null);
  const data = useContext(SodaContext);
  const currSoda = Object.keys(data)[state - 1];
  //@ts-ignore
  const soda = useGLTF(data[currSoda].modelLink);
  console.log(currSoda);

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
