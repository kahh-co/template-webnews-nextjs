"use client";

import React, { createContext, useContext } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Light-only: situs dikunci ke tema terang agar kontras konsisten
// di semua perangkat (tidak lagi mengikuti OS / localStorage).
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
    try {
      localStorage.removeItem("nusantara_theme");
    } catch {
      // abaikan jika localStorage tidak tersedia
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {}, setTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
