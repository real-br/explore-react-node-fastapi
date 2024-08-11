import "./App.css";
import DirectionList from "./components/DirectionList";
import StyledDropzone from "./components/DropZone";
import Grid from "@mui/material/Grid";
import UploadGPXButton from "./components/UploadGPXButton";
import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div style={{ padding: "0px" }}>
          <StyledDropzone></StyledDropzone>
        </div>
      </Grid>
      {/* <Grid item xs={4}>
        <div style={{ padding: "0px" }}>
          <DirectionList items={instructions}></DirectionList>
        </div>
      </Grid> */}
    </Grid>
  );
}

export default App;
