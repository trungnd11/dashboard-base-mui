import AppTable from "src/components/table/AppTable";
import { Delete, Edit } from "@mui/icons-material";
import { useQuery } from "react-query";
import { type GridColDef } from "@mui/x-data-grid";
import { walletUrl } from "src/api/baseUrl";
import { useState } from "react";
import axios from "axios";
import Space from "src/components/space/Space";

const columns: GridColDef[] = [
  {
    field: "action",
    headerName: "action",
    align: "center",
    maxWidth: 150,
    renderCell: () => (
      <Space>
        <Edit />
        <Delete />
      </Space>
    )
  },
  {
    field: "parGroup", headerName: "parGroup",
  },
  {
    field: "parName", headerName: "parName"
  },
  {
    field: "parValue", headerName: "parValue"
  }
];

export default function TablePending() {
  const [pageOption, setPageOption] = useState({
    page: 1,
    limit: 10
  });
  const { data } = useQuery<any>(["fetchData", pageOption], async () =>
    await axios(`${walletUrl}/ap_params`, { params: pageOption }));

  return (
    <AppTable
      rows={data ? data?.data : []}
      columns={columns}
      pageCount={data?.totalCount}
      onPage={(page) => setPageOption(pre => ({ ...pre, page }))}
      onPageSize={(pageSize => setPageOption(pre => ({ ...pre, limit: pageSize })))}
    />
  );
}
