import { Children, createContext, useContext, useState } from "react";

export const HiddenContext = createContext({});

export const HiddenProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);

  const changeState = () => setHidden((prev) => !prev);

  const hide = () => setHidden(true);

  return (
    <HiddenContext.Provider value={{ hidden, changeState, hide }}>
      {children}
    </HiddenContext.Provider>
  );
};

export const useHidden = () => useContext(HiddenContext);
