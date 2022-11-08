import { createContext, useState } from "react";
import { Header } from "../components/Header";

export const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  const [theme, ThemeChanger] = useState({
    palette: {
      dark: false,
    },
  });

  const changeTheme = () => {
    ThemeChanger({ ...theme, palette: { dark: !theme.palette.dark } });
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
