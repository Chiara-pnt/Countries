import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
  };

  return (
    <StateContext.Provider value={{ handleTheme, dark }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
