import { create } from "zustand";

interface ThemeStateProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useThemeStore = create<ThemeStateProps>((set) => {
  const storedTheme =
    localStorage.getItem("darkMode") === "true" ? true : false;

  return {
    darkMode: storedTheme,
    toggleDarkMode: () => {
      set((state) => {
        const newDarkMode = !state.darkMode;
        localStorage.setItem("darkMode", newDarkMode.toString());
        return { darkMode: newDarkMode };
      });
    },
  };
});

export default useThemeStore;
