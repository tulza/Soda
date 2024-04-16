import { createContext, useContext, useState } from "react";

import { SodaContext, StateContext } from "@/App";
import SodaDescription from "./PriceLabel";
import StateButton from "./StateButton";
import SodaCanvas from "./ThreeJS/SodaCanvas";
import LetterBoxing from "./AbsComponent/LetterBoxing";
import SodaText from "./AbsComponent/SodaText";
import CreditsText from "./AbsComponent/CreditsText";

export const LoadTimeContext = createContext<number>(1000);

const Home = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const data = useContext(SodaContext);
  const { state, setState } = useContext(StateContext);
  const currSoda = Object.keys(data)[state - 1];
  const maxKey = Object.keys(data).length;
  const LoadTime = 2000; //ms
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, LoadTime);
  };

  //@ts-ignore
  const { Label, Description, Price, BackgroundColor } = data[currSoda];

  return (
    <LoadTimeContext.Provider value={LoadTime}>
      <div
        className="flex h-dvh w-dvw items-center"
        style={{ backgroundColor: BackgroundColor }}
      >
        <SodaText Label={Label} />
        <SodaCanvas state={state} />
        <LetterBoxing />
        <div className="absolute top-10 w-dvw text-center text-2xl text-white">
          {currSoda}
        </div>
        <CreditsText />
        <SodaDescription description={Description} price={Price} />
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
