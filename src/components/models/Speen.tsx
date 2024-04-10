import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Cola from "./Cola";
import { vec3 } from "three/examples/jsm/nodes/Nodes.js";

const Speen = () => {
  const ref = useRef(null);
  useFrame(() => {
    if (!ref) return;
    ref.current.rotation.y += 0.04;
    ref.current.rotation.z += 0.01;
  });
  return (
    <group position={[0, 1, 0]} ref={ref}>
      <Cola />
    </group>
  );
};

export default Speen;
