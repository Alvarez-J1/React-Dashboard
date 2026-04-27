"use client";

import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";

import darkTheme from "@/theme/darkTheme"; 
import lightTheme from "@/theme/lightTheme"; 

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function Providers({ children }: { children: React.ReactNode }) {
    // 2. State
  const [mode, setMode] = useState<"light" | "dark">("light");

    // 3. Toggle function
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

    // 4. Pick theme dynamically
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <SessionProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
      </ColorModeContext.Provider>
    </SessionProvider>
  );
}