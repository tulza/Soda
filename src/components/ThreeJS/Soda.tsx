import { useGLTF } from "@react-three/drei";

const Soda = () => {
  const cola = useGLTF("./cola.glb");
  return (
    <>
      <primitive object={cola.scene} />
    </>
  );
};

export default Soda;
