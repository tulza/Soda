import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SodaSpin from "./models/SodaSpin";
import SodaDescription from "./PriceLabel";
import { createContext, useContext, useState } from "react";
import StateButton from "./StateButton";
import { SodaContext, StateContext } from "@/App";

export const LoadTimeContext = createContext<number>(1000);

const Home = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const data = useContext(SodaContext);
  const { state, setState } = useContext(StateContext);
  const currSoda = Object.keys(data)[state - 1];
  const maxKey = Object.keys(data).length;
  const LoadTime = 0; //ms
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, LoadTime);
  };
  return (
    <LoadTimeContext.Provider value={LoadTime}>
      <div
        className="flex h-dvh w-dvw items-center"
        //@ts-ignore
        style={{ backgroundColor: data[currSoda].BackgroundColor }}
      >
        <div className="ml-[10vw] flex w-min flex-col">
          {
            //@ts-ignore
            data[currSoda].Label.split(" ").map((label) => (
              <div className="pointer-events-none text-[20vw] leading-[15vw] tracking-wide text-white ">
                <span className="pointer-events-none absolute z-50 opacity-40">
                  {label}
                </span>
                {label}
              </div>
            ))
          }
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
            <SodaSpin state={state} />
          </Canvas>
        </div>
        <div className="absolute top-0 h-[15%] w-dvw bg-black"></div>
        <div className="absolute bottom-0 h-[15%] w-dvw bg-black"></div>
        <div className="absolute top-10 w-dvw text-center text-2xl text-white">
          {currSoda}
        </div>
        <div className="absolute bottom-0 right-0 mr-4 text-base text-white opacity-20">
          Thanks to Ono for the 3D models
        </div>
        <SodaDescription
          description={data[currSoda].Description}
          //@ts-ignore
          price={data[currSoda].Price}
        />
        <div className="absolute bottom-5 left-[50%] flex -translate-x-[50%] gap-4 text-white">
          <StateButton
            label="<"
            OnClick={() => {
              if (state <= 1 || isLoading) return;
              handleLoading();
              setState(state - 1);
            }}
          />
          <div className="grid w-[100px] select-none place-items-center text-3xl">
            {state}
          </div>
          <StateButton
            label=">"
            OnClick={() => {
              if (state >= maxKey || isLoading) return;
              handleLoading();
              setState(state + 1);
            }}
          />
        </div>
      </div>
    </LoadTimeContext.Provider>
  );
};

export default Home;
