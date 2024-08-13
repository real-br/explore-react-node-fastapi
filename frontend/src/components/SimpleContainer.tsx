import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ height: "100vh", padding: 0 }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box sx={{ bgcolor: "#cfe8fc", flex: 1 }} />
          <Box sx={{ bgcolor: "#f0a5a5", flex: 1 }} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
