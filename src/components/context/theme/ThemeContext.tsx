import React, { createContext, useState } from "react";
import { ThemeContextType } from "../../../types/themeContextTypes";

export const ThemeContext = createContext({} as ThemeContextType);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(
    Boolean(localStorage.getItem("theme")) || false
  );

  const state = { theme, setTheme };

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
