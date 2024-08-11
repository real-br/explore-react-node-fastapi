import React, { useCallback, useState } from "react";
import { DropzoneRootProps, useDropzone } from "react-dropzone";
import styled from "styled-components";
import axios from "axios";

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

function StyledDropzone() {
  // const [instructions, setInstructions] = useState(["Dummy Instruction"]);
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
            .post("/api/route", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response.data.paths[0].instructions);
            })
            .catch((error) => {
              console.error("Error fetching route:", error);
            });
        }
      },
    });

  return (
    <div className="container">
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
        <em>(Only *.gpx files are accepted)</em>
      </Container>
    </div>
  );
}

export default StyledDropzone;
