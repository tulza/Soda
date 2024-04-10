import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Cola from "./Cola";

const Speen = () => {
  const ref = useRef(null);
  useFrame(() => {
    if (!ref) return;
    //@ts-ignore
    ref.current.rotation.y += 0.04;
    //@ts-ignore
    ref.current.rotation.z += 0.005;
  });
  return (
    <group position={[0, 1, 0]} ref={ref}>
      <Cola />
    </group>
  );
};

export default Speen;
