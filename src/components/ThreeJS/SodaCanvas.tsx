import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SodaSpin from "./SodaSpin";

const SodaCanvas = ({ state }: { state: number }) => {
  return (
    <div className="absolute h-full w-full">
      <Canvas className="absolute">
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={Math.PI * 2} />
        <directionalLight
          position={[-3.3, -1.0, -4.4]}
          intensity={Math.PI * 2}
        />
        <ambientLight />
        <OrbitControls enabled={false} />
        <SodaSpin state={state} />
      </Canvas>
    </div>
  );
};

export default SodaCanvas;
