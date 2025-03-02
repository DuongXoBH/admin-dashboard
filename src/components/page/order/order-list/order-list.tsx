"use client";

import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Status } from "./status";
import { ORDERLIST } from "@/constants/order";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    renderHeader: () => <p className="font-semibold w-full">ID</p>,
  },
  {
    field: "name",
    headerName: "NAME",
    type: "string",
    width: 250,
    renderHeader: () => <p className="font-semibold w-full">NAME</p>,
  },
  {
    field: "address",
    headerName: "ADDRESS",
    type: "string",
    width: 250,
    renderHeader: () => <p className="font-semibold w-full">ADDRESS</p>,
  },
  {
    field: "date",
    headerName: "DATE",
    type: "string",
    width: 200,
    renderHeader: () => <p className="font-semibold w-full">DATE</p>,
  },
  {
    field: "type",
    headerName: "TYPE",
    type: "string",
    width: 200,
    renderHeader: () => <p className="font-semibold w-full">TYPE</p>,
  },
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
    renderHeader: () => <p className="font-semibold w-full">STATUS</p>,
  },
];

const rows = ORDERLIST;

export default function OrderList() {
  return (
    <Paper sx={{ width: "98%", overflow: "hidden" }}>
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
