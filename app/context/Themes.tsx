import React, { createContext, useContext } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff4081",
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#fff",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    action: {
      active: "#1976d2",
      hover: "rgba(25, 118, 210, 0.08)",
      selected: "rgba(25, 118, 210, 0.16)",
      disabled: "rgba(0, 0, 0, 0.26)",
    },
  },
  typography: {
    fontFamily: [
      '"Inter"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    button: {
      fontWeight: 600,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "8px 16px",
          fontSize: "0.875rem",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "box-shadow 0.2s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
  },
});

const customTheme = responsiveFontSizes(baseTheme);

const ThemeContext = createContext<Theme>(customTheme);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={customTheme}>
      <MuiThemeProvider theme={customTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export { customTheme as theme };
