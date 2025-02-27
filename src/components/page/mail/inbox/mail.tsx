"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Typography } from "@mui/material";
import { Label } from "./mail-label";
import { INBOXLIST } from "@/constants/mail";

const columns: GridColDef[] = [
  { field: "id", headerName: "", width: 40 },
  {
    field: "starred",
    headerName: "",
    width: 50,
    renderCell: (params) => {
      return params.value ? (
        <StarIcon sx={{ color: "gold" }} />
      ) : (
        <StarBorderIcon sx={{ color: "gray" }} />
      );
    },
  },
  {
    field: "userFrom",
    headerName: "",
    width: 130,
    renderCell: (params) => {
      return (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "label",
    headerName: "",
    width: 80,
    renderCell: (params) => {
      return (
        <div className="flex items-center h-full">
          <Label title={params.value} />
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "",
    type: "string",
    width: 350,
    renderCell: (params) => {
      return (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "time",
    headerName: "",
    type: "string",
    width: 70,
  },
];

const paginationModel = { page: 0, pageSize: 12 };

export default function InboxList(props: { title: string }) {
  const rows = INBOXLIST;
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  // Filter selected data
  const selectedData = rows.filter((row) => selectedRows.includes(row.id));
  console.log("🚀 ~ InboxList ~ selectedData:", selectedData)
  return (
    <Box>
      <Typography >{props.title}</Typography>
      <Paper sx={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[12, 20]}
          checkboxSelection
          onRowSelectionModelChange={(ids) => {
            setSelectedRows(ids as number[]);
          }}
          disableColumnSorting
          sx={{ border: 0 }}
        />
      </Paper>
    </Box>
  );
}
