"use client";

import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Status } from "./status";
import { ORDERLIST } from "@/constants/order";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "NAME", type: "string", width: 250 },
  { field: "address", headerName: "ADDRESS", type: "string", width: 250 },
  { field: "date", headerName: "DATE", type: "string", width: 200 },
  { field: "type", headerName: "TYPE", type: "string", width: 200 },
  {
    field: "status",
    headerName: "STATUS",
    type: "string",
    width: 150,
    renderCell: (params) => (
      <div className="flex h-full items-center">
        <Status title={params.value} />
      </div>
    ),
  },
];

const rows = ORDERLIST;

export default function OrderList() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20]}
        disableRowSelectionOnClick
        sx={{
          border: 0,
          "& .MuiDataGrid-cell": {
            outline: "none",
          },
        }}
      />
    </Paper>
  );
}
