import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Speen from "./models/Speen";

const Home = () => {
  return (
    <div className="grid h-dvh w-dvw place-items-center bg-red-500">
      <div className="flex w-full justify-around">
        <span className="text-[10rem] tracking-wide text-white">Coca</span>
        <span className="text-[10rem] tracking-wide text-white">cola</span>
      </div>
      <div className="absolute h-full w-full">
        <Canvas className="absolute">
          <directionalLight
            position={[3.3, 1.0, 4.4]}
            intensity={Math.PI * 2}
          />
          <directionalLight
            position={[-3.3, -1.0, -4.4]}
            intensity={Math.PI * 2}
          />
          <ambientLight />
          <OrbitControls enabled={false} />
          <Speen />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
