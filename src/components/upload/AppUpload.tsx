import { useState } from "react";
import { StyleAppUpload } from "./styleAppUpload";
import { Box, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function AppUpload() {
  const [files, setFiles] = useState<File[] | null>();

  const handleChangeFile = (files: FileList) => {
    const listFiles = Array.from(files);
    setFiles(pre => pre ? [...pre, ...listFiles] : listFiles);
  };

  return (
    <StyleAppUpload>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input type="file" multiple onChange={(e) => e.target.files && handleChangeFile(e.target.files)} />
        <PhotoCamera />
      </IconButton>
      {
        files && Array.from(files).map((file, index) => (
          <Box key={index}>{ file.name }</Box>
        ))
      }
    </StyleAppUpload>
  );
}
