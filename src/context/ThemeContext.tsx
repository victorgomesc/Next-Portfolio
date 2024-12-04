import { createContext, useState } from "react";

type ThemeContext = {
  setTheme(value: string): void;
  theme: string;
};
type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as ThemeContext);

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "dark");
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};