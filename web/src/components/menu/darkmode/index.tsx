import { Moon, Sun } from "phosphor-react";
import { UseTheme } from "./UseTheme";

export function DarkMode() {
  const { theme, setTheme } = UseTheme();

  return (
    <>
      {theme === "dark" ? (
        <button
          className="h-12 rounded-full p-4 bg-ligth-shover text-ligth-textprimary"
          id="theme-toggle"
          type="button"
          onClick={() => {
            setTheme("light");
          }}
        >
          {<Sun weight="bold" className="w-4 h-4" />}
        </button>
      ) : (
        <button
          className="h-12 rounded-full p-4 bg-dark-shover text-dark-textprimary"
          id="theme-toggle"
          type="button"
          onClick={() => {
            setTheme("dark");
          }}
        >
          {<Moon weight="bold" className="w-4 h-4" />}
        </button>
      )}
    </>
  );
}
