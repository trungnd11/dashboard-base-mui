import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from '@mui/x-data-grid-generator';
import { isEmptyArray } from "../../../../helpper/functionCommon";

export default function TablePending() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100,
    editable: true,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    isEmptyArray(data.rows) ? setLoading(true) : setLoading(false);
  }, [data.rows]);

  return (
    <>
      <DataGrid
        rows={data.rows}
        columns={data.columns}
        checkboxSelection
        loading={loading}
        pagination
      />
    </>
  )
}
