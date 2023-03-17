import { Autocomplete, Button, Divider, Grid, TextField } from "@mui/material";
import { Close, Create, ExploreOff, HideSource, Search, Update } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import TablePending from "./TablePending";
import ListFiles from "./ListFiles";
import { masonryStyle } from "./stylePending";

export const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 }
];


export default function Pending() {

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
      <Grid item xl={3}>
        <Autocomplete
          options={top100Films}
          size="small"
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Trạng thái xử lý" variant="outlined" />}
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
      <Grid item xl={9} textAlign="end">
        <Masonry columns={3} spacing={3} sx={masonryStyle}>
          <Button variant="contained" startIcon={<Search />}>Tìm kiếm</Button>
        </Masonry>
      </Grid>
      <Grid item xl={6}>
        <Masonry columns={3} spacing={3}>
          <Button variant="contained" startIcon={<Create />}>Tạo đối soát</Button>
          <Button variant="contained" startIcon={<Update />}>Duyệt kết quả</Button>
          <Button variant="contained" startIcon={<Close />}>Đóng phiên</Button>
        </Masonry>
      </Grid>
      <Grid item xl={6}>
        <Masonry columns={3} spacing={3} sx={masonryStyle}>
          <Button variant="contained" startIcon={<ExploreOff />}>Xuất báo cáo</Button>
          <Button variant="contained" startIcon={<HideSource />}>Ẩn/hiện cột</Button>
        </Masonry>
      </Grid>
      <Grid item xl={12} style={{ height: 600, width: 1000 }}>
        <TablePending />
      </Grid>
      <Grid item xl={12}>
        <Divider />
      </Grid>
      <Grid item xl={12}>
        <ListFiles />
      </Grid>
    </Grid>
  )
}
