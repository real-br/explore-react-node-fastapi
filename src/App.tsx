import "./App.css";
import DirectionList from "./components/DirectionList";
import StyledDropzone from "./components/DropZone";
import Grid from "@mui/material/Grid";

function App() {
  const items: string[] = ["left", "right"];
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div style={{ padding: "0px" }}>
          <StyledDropzone></StyledDropzone>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div style={{ padding: "0px" }}>
          <DirectionList items={items}></DirectionList>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;

// 1. Add a list of turn by turn directions - check
// 2. Add a button to upload a gpx file - check
// 3. Add a drop zone to drop the gpx file - check
// Handle the file
