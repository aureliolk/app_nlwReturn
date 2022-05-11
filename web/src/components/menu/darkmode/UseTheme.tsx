import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext<any>("");

export function ThemeContextProvider({ children }: any) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.removeAttribute("class");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function UseTheme() {
  return useContext(ThemeContext);
}
