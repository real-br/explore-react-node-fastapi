import "./App.css";
import StyledDropzone from "./components/DropZone";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import Navbar from "./components/NavBar";
import theme from "./theme"; // Import the custom theme

function App() {
  // const [instructions, setInstructions] = useState("Dummy Instruction");
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>

      <StyledDropzone></StyledDropzone>
    </ThemeProvider>
  );
}

export default App;
