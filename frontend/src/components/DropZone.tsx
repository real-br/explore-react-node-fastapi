import React, { useState } from "react";
import { DropzoneRootProps, useDropzone } from "react-dropzone";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";
import DirectionList from "./DirectionList";
import Grid from "@mui/material/Grid";

const getColor = (props: DropzoneRootProps) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

interface Props {
  onResponse: (response: AxiosResponse) => void;
}

function StyledDropzone() {
  const [routeOwner, setRouteOwner] = useState("");
  const [routeName, setRouteName] = useState("");
  const [distance, setDistance] = useState("");
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
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
              setDistance(response.data.gpx.tracks[0].distance.total || "");
            })
            .catch((error) => {
              console.error("Error parsing gpx:", error);
            });
        }
      },
    });

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div style={{ padding: "0px" }}>
          <div className="container">
            <Container
              {...getRootProps({ isFocused, isDragAccept, isDragReject })}
            >
              <input {...getInputProps()} />
              <p>Drag & drop some files here, or click to select files</p>
              <em>(Only *.gpx files are accepted)</em>
            </Container>
          </div>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div style={{ padding: "0px" }}>
          <DirectionList item={distance}></DirectionList>
        </div>
      </Grid>
    </Grid>
  );
}

export default StyledDropzone;
