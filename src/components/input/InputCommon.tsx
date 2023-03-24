import { RemoveRedEyeOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { cursorPointer } from "../stylesCommon";
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
  const [typeInput, setTypeInput] = useState(type);

  const handleTypeInput = () => {
    typeInput === "text" ? setTypeInput("password") : setTypeInput("text");
  };

  const renderIconTypePassword = () => typeInput === "password" ? VisibilityOffOutlined : RemoveRedEyeOutlined;

  return (
    <TextField
      fullWidth
      InputProps={{
        endAdornment: type && type === "password" && (
          <InputAdornment position="end">
            <Box style={cursorPointer} component={renderIconTypePassword()} onClick={handleTypeInput} />
          </InputAdornment>
        ),
      }}
      variant={variant ?? "outlined"}
      focused={focused}
      size={size ?? "small"}
      type={typeInput ?? "text"}
      label={label}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}