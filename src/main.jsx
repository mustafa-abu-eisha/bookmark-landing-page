import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
  palette: {
    primary: {
      main: "hsl(231, 69%, 60%)",
      light: "hsl(0, 94%, 66%)",
    },
    text: {
      primary: "hsl(229, 31%, 21%)",
      secondary: "#9e9e9e",
    },
    background: {
      default: "hsl(0, 0%, 97%)",
      paper: "hsl(229deg 31% 21% / 15%)",
    },
    action: {
      hover: "hsl(229deg 31% 21% / 75%)",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
