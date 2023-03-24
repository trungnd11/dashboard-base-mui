import { Autocomplete, TextField } from "@mui/material";
interface PropsSelectCommom {
  options: any[]
  label?: string
  size?: "small" | "medium"
  multiple?: boolean
  onChange?: (record: Record<string, any>, value?: string | number) => void
};

export default function SelectCommon(props: PropsSelectCommom) {
  const { options, label, size, multiple, onChange } = props;
  return (
    <Autocomplete
      multiple={multiple}
      options={options}
      onChange={(_e, record) => {
        onChange && onChange(record, record?.value);
      }}
      size={size ?? "small"}
      getOptionLabel={(option) => option?.title ?? ""}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}
