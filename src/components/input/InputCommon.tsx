import { TextField } from "@mui/material";

interface InputProps {
  label?: string
  size?: "medium" | "small"
  value?: string
  onChange?: (value: any) => void
  type?: "password" | "text"
  focused?: boolean
  variant?: "standard" | "outlined" | "filled"
}

export default function InputCommon(props: InputProps) {
  const { label, size, value, type, onChange, focused, variant } = props;
  return (
    <TextField
      fullWidth
      variant={variant ?? "outlined"}
      focused={focused}
      size={size ?? "small"}
      type={type ?? "text"}
      label={label}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}
