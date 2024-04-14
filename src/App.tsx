import "@styles/styles.css";
import "@styles/fonts.css";
import Home from "@components/Home";
import { createContext, useState } from "react";
import data from "./data.json";

export const SodaContext = createContext(data);
export const StateContext = createContext<any>(null);

function App() {
  const [state, setState] = useState<number>(1);
  return (
    <StateContext.Provider value={{ state, setState }}>
      <SodaContext.Provider value={data}>
        <Home />
      </SodaContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
