import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Speen from "./models/Speen";
import { Camera } from "three";

const Home = () => {
  return (
    <div className="grid h-dvh w-dvw place-items-center bg-red-500">
      <div className="ml-[20vw] flex w-full flex-col">
        <div className="h-min text-[20vw] leading-[15vw] tracking-wide text-white">
          <span className="absolute z-50 opacity-15">Coca</span>Coca
        </div>
        <div className="text-[20vw] leading-[15vw] tracking-wide text-white">
          <span className="absolute z-50 opacity-15">Cola</span>Cola
        </div>
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
      <div className="absolute top-0 h-[15%] w-dvw bg-black"></div>
      <div className="absolute bottom-0 h-[15%] w-dvw bg-black"></div>
      <div className="absolute bottom-[10%] right-[10%] h-[200px] w-[400px] rounded-xl bg-black/50 p-8 tracking-wider text-white outline outline-white">
        <p className="mb-4 text-xl font-bold tracking-wider">
          Description:
          <br />
          <span className="font-normal tracking-normal">
            A refreshing beverage
          </span>
        </p>
        <p className="text-xl ">Price: $2.99</p>
      </div>
    </div>
  );
};

export default Home;
