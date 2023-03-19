import { TextField } from "@mui/material";

interface InputProps {
  label?: string
  size?: "medium" | "small"
  value?: string
  onChange?: (value: any) => void
  type?: "password" | "text"
}

export default function InputCommon(props: InputProps) {
  const { label, size, value, type, onChange } = props;
  return (
    <TextField
      fullWidth
      size={size ?? "small"}
      type={type ?? "text"}
      label={label}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}
