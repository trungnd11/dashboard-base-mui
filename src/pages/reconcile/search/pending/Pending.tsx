import { useRef } from "react";
import { Button, Grid } from "@mui/material";
import { Close, Create, ExploreOff, Search, Update } from "@mui/icons-material";
import Space from "src/components/space/Space";
import TablePending from "./TablePending";
import SelectCommon from "src/components/select/SelectCommon";
import InputCommon from "src/components/input/InputCommon";
import { type OptionForm } from "src/model/component/FormCommonModel";
import FormSearchCommon from "src/components/form/FormSearchCommon";

export const top100Films = [
  { title: "The Shawshank Redemption", year: 1994, value: "1" },
  { title: "The Godfather", year: 1972, value: "2" },
  { title: "The Godfather: Part II", year: 1974, value: "3" },
  { title: "The Dark Knight", year: 2008, value: "4" }
];

const optionForm: OptionForm[] = [
  {
    label: "Lịch so sánh",
    field: "calendar",
    typeComponent: "select",
    component: SelectCommon
  },
  {
    label: "Đối tác",
    field: "partner",
    component: InputCommon
  },
  {
    label: "Hệ thống gốc",
    field: "system",
    typeComponent: "select",
    component: SelectCommon
  },
  {
    label: "Trạng thái xử lý",
    field: "status",
    typeComponent: "select",
    component: SelectCommon
  }
];

export default function Pending() {
  const refForm = useRef();

  const handleSearch = () => {
    console.log(refForm.current);
  };

  return (
    <>
      <FormSearchCommon
        options={optionForm}
        optionsSelect={top100Films}
        ref={refForm}
      />
      <Grid container spacing={3} marginTop={1}>
        <Grid item lg={6}>
          <Space>
            <Button variant="contained" startIcon={<Create />}>
              Tạo đối soát
            </Button>
            <Button variant="contained" startIcon={<Update />}>
              Duyệt kết quả
            </Button>
            <Button variant="contained" startIcon={<Close />}>
              Đóng phiên
            </Button>
          </Space>
        </Grid>
        <Grid item lg={6}>
          <Space justifyContent="end">
            <Button variant="contained" startIcon={<ExploreOff />}>
              Xuất báo cáo
            </Button>
            <Button variant="contained" startIcon={<Search />} onClick={handleSearch}>
              Tìm kiếm
            </Button>
          </Space>
        </Grid>
        <Grid item lg={12} sx={{ width: 1000 }}>
          <TablePending />
        </Grid>
      </Grid>
    </>
  );
}
