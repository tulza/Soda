import { useGLTF } from "@react-three/drei";

const Cola = () => {
  const cola = useGLTF("./cola.glb");
  return (
    <>
      <primitive object={cola.scene} />
    </>
  );
};

export default Cola;
