import { GridRowsProp, GridColDef } from "@mui/x-data-grid";

export interface AppTableModel {
  rows: GridRowsProp,
  columns: GridColDef[],
  loading?: boolean,
  checkboxSelection?: boolean,
  pageCount?: number,
  onPage?: (page: number) => void
  onPageSize?: (pageSize: number) => void
};
