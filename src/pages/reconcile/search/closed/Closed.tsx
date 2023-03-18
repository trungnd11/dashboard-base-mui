import { ExpandCircleDown, Search } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { top100Films } from "../pending/Pending";
import { masonryStyle } from "../pending/stylePending";
import TableClosed from "./TableClosed";

export default function Closed() {
  return (
    <Grid container spacing={3}>
      <Grid item xl={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Lịch so sánh" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Thời gian" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Đối tác" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Hệ thống gốc" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={12}>
        <Masonry columns={6} spacing={3} sx={masonryStyle}>
          <Button variant="contained" startIcon={<Search />}>Tìm kiếm</Button>
          <Button variant="contained" startIcon={<ExpandCircleDown />}>Xuất báo cáo</Button>
        </Masonry>
      </Grid>
      <Grid item xl={12} style={{ height: 600, width: 1000 }}>
        <TableClosed />
      </Grid>
    </Grid>
  );
}
