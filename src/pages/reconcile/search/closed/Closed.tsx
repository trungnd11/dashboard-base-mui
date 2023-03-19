import { ExpandCircleDown, Search } from "@mui/icons-material";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import Space from "src/components/space/Space";
import { top100Films } from "../pending/Pending";
import TableClosed from "./TableClosed";

export default function Closed() {
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
          <Button variant="contained" startIcon={<ExpandCircleDown />}>Xuất báo cáo</Button>
        </Space>
      </Grid>
      <Grid item lg={12} style={{ height: 600, width: 1000 }}>
        <TableClosed />
      </Grid>
    </Grid>
  );
}
