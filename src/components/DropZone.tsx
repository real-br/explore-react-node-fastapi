import React, { useCallback } from "react";
import { DropzoneRootProps, useDropzone } from "react-dropzone";
import styled from "styled-components";

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
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "file/gpx": [".gpx"] },
      onDrop: (files) => console.log(files),
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
