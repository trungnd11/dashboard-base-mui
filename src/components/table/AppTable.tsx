import { useState } from "react";
import { type TablePaginationProps, LinearProgress } from "@mui/material";
import { DataGrid, GridPagination, type GridColDef } from "@mui/x-data-grid";
import MuiPagination from "@mui/material/Pagination";
import { type AppTableModel } from "src/model/component/AppTableModel";
import { toNumber } from "src/helpper/functionCommon";

export default function AppTable(props: AppTableModel) {
  const { rows, columns, loading, checkboxSelection, pageCount, onPage, onPageSize } = props;
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const Pagination = ({
    className,
  }: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) => {
    const totalPage = pageCount && toNumber(pageCount / pageSize);

    return (
      <MuiPagination
        color="primary"
        className={className}
        count={totalPage && totalPage + 1}
        page={page}
        onChange={(_event, newPage) => {
          setPage(() => newPage);
          onPage && onPage(newPage);
        }}
      />
    );
  };

  const CustomPagination = (props: any) => <GridPagination ActionsComponent={Pagination} {...props} />;

  const generateColumns = (columns: GridColDef[]) =>
    columns.map(column => ({ ...column, flex: column.flex ? column.flex : 1 }));

  return (
    <>
      <DataGrid
        rows={rows}
        columns={generateColumns(columns)}
        checkboxSelection={checkboxSelection ?? true}
        autoHeight
        loading={loading}
        pagination
        paginationMode="server"
        rowCount={pageCount}
        pageSizeOptions={[5, 10, 20, 50]}
        componentsProps={{
          pagination: {
            labelRowsPerPage: "Chọn số bản ghi",
          }
        }}
        onPaginationModelChange={(option => {
          setPageSize(option.pageSize);
          onPageSize && onPageSize(option.pageSize);
        })}
        slots={{
          pagination: CustomPagination,
          loadingOverlay: LinearProgress
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
      />
    </>
  );
};
