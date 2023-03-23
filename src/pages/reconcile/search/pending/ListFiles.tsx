import { Create, TrackChangesTwoTone } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { Button, Grid, Typography } from "@mui/material";

export default function ListFiles() {
  return (
    <Grid container columnSpacing={3} rowSpacing={3}>
      <Grid item xl={12}>
        <Typography variant="h5">
          Danh sách file
        </Typography>
      </Grid>
      <Grid item xl={6}>
        <Masonry columns={3} spacing={3}>
          <Button variant="contained" startIcon={<Create />}>Thêm file</Button>
          <Button variant="contained" startIcon={<TrackChangesTwoTone />}>So sánh</Button>
        </Masonry>
      </Grid>
    </Grid>
  );
}
