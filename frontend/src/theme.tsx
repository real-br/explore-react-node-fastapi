// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30313D",
    },
    secondary: {
      main: "#06AB78", // Custom base content color
    },
    background: {
      default: "#FFFFFF", // Background color
    },
  },
  typography: {
    fontFamily: '"MyCustomFont" "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: "MyCustomFont, Arial, sans-serif",
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
    // Add more typography styles as needed
  },
});

export default theme;
