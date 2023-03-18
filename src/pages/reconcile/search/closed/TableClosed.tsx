import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useEffect, useState } from "react";
import { isEmptyArray } from "src/helpper/functionCommon";

export default function TableClosed() {
  const { data } = useDemoData({
    dataSet: "Commodity",
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
  );
}
