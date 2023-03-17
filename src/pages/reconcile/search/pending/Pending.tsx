import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from '@mui/x-data-grid-generator';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 }
];


export default function Pending() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  console.log({ data })

  return (
    <Grid container columnSpacing={3} rowSpacing={3}>
      <Grid item xl={4}>
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Lịch so sánh" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={4}>
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Đối tác" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={4}>
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Hệ thống gốc" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={4}>
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Trạng thái xử lý" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={4}>
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Thời gian" variant="outlined" />}
        />
      </Grid>
      <Grid item xl={24} textAlign="end">
        <Button variant="contained">Tìm kiếm</Button>
      </Grid>
      <Grid item xl={24}>
        
      </Grid>
    </Grid>
  )
}
