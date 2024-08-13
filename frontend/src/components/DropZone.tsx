import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import RouteCard from "./RouteCard";
import Typography from "@mui/material/Typography";
import BikeAnimation from "./BikeAnimation";

function StyledDropzone() {
  const [routeOwner, setRouteOwner] = useState("");
  const [routeName, setRouteName] = useState("");
  const [distance, setDistance] = useState(0);
  const [gpxParsed, setGpxParsed] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "file/gpx": [".gpx"] },
    onDrop: (files) => {
      const file = files[0];

      if (file) {
        const formData = new FormData();
        formData.append("gpx", file);
        const backend = axios.create({ baseURL: "http://localhost:5001" });
        backend
          .post("/api/parse", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            setRouteOwner(response.data.gpx.metadata.author.name);
            setRouteName(response.data.gpx.metadata.name);
            setDistance(
              Number(
                (response.data.gpx.tracks[0].distance.total / 1000).toFixed(1)
              )
            );
            setGpxParsed(true);
          })
          .catch((error) => {
            console.error("Error parsing gpx:", error);
          });
      }
    },
  });

  return (
    <Container style={{ height: "100vh" }}>
      <Grid
        container
        style={{ height: "100%", paddingLeft: "8px", paddingRight: "8px" }}
      >
        <Grid item xs={8}>
          <Box
            sx={{
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "top",
              padding: "8px",
            }}
          >
            <Box
              {...getRootProps()}
              sx={{
                width: "100%",
                height: "100%",
                padding: "8px",
                borderWidth: "2px",
                borderRadius: "2px",
                borderColor: "#eeeeee",
                borderStyle: "dashed",
                backgroundColor: "#fafafa",
                color: "#bdbdbd",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <input {...getInputProps()} />
                <p>Drag & drop some files here, or click to select files</p>
                <em>(Only *.gpx files are accepted)</em>
              </div>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
            }}
          >
            {gpxParsed ? (
              <RouteCard
                title={routeName}
                owner={routeOwner}
                distance={distance}
              />
            ) : (
              <BikeAnimation />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default StyledDropzone;
