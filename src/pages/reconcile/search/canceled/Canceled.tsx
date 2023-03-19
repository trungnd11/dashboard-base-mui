import { HideSource, Search } from "@mui/icons-material";
import { Grid, Autocomplete, TextField, Button } from "@mui/material";
import Space from "src/components/space/Space";
import { top100Films } from "../pending/Pending";
import TablePending from "../pending/TablePending";

export default function Canceled() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Lịch so sánh" variant="outlined" />}
        />
      </Grid>
      <Grid item lg={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Thời gian" variant="outlined" />}
        />
      </Grid>
      <Grid item lg={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Đối tác" variant="outlined" />}
        />
      </Grid>
      <Grid item lg={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Hệ thống gốc" variant="outlined" />}
        />
      </Grid>
      <Grid item lg={12}>
        <Space justifyContent="end">
          <Button variant="contained" startIcon={<Search />}>Tìm kiếm</Button>
          <Button variant="contained" startIcon={<HideSource />}>Export</Button>
          <Button variant="contained" startIcon={<HideSource />}>Ẩn/hiện cột</Button>
        </Space>
      </Grid>
      <Grid item lg={12} style={{ height: 600, width: 1000 }}>
        <TablePending />
      </Grid>
    </Grid>
  );
}
