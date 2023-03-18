import { TextField } from "@mui/material";

interface InputProps {
  label?: string
  size?: "medium" | "small"
}

export default function InputCommon(props: InputProps) {
  const { label, size } = props;
  return (
    <TextField
      fullWidth
      size={size ?? "small"}
      label={label}
    />
  );
}
