import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Speen from "./models/Speen";

const Home = () => {
  return (
    <Canvas className="bg-red-500">
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={Math.PI * 2} />
      <directionalLight position={[-3.3, -1.0, -4.4]} intensity={Math.PI * 2} />
      <ambientLight />
      <OrbitControls />
      <Speen />
    </Canvas>
  );
};

export default Home;
