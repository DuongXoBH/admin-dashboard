"use client";

import { useFetchProductsApi } from "@/api-hook/product";
import { Button, CardMedia, Paper, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    renderHeader: () => <p className="font-semibold">ID</p>,
  },
  {
    field: "images",
    headerName: "Image",
    width: 140,
    renderCell: (params) => (
      <div className="flex h-full items-center justify-start">
        <CardMedia
          component="img"
          image={params.value[0]}
          sx={{ width: "60px", height: "60px", borderRadius: "8px" }}
        />
      </div>
    ),
    renderHeader: () => <p className="font-semibold">Image</p>,
  },
  {
    field: "title",
    headerName: "Product Name",
    width: 240,
    renderCell: (params) => (
      <Tooltip title={params.value}>
        <div className="w-[180px] h-full text-left overflow-hidden">
          {params.value}
        </div>
      </Tooltip>
    ),
    renderHeader: () => <p className="font-semibold">Product Name</p>,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    renderCell: (params) => (
      <div>
        {params.value["name"]}
      </div>
    ),
    renderHeader: () => <p className="font-semibold">Category</p>,
  },
  {
    field: "price",
    headerName: "Price",
    renderCell: (params) => <p>{`$${params.value}`}</p>,
    renderHeader: () => <p className="font-semibold">Price</p>,
  },
  {
    field: "piece",
    headerName: "Piece",
    renderHeader: () => <p className="font-semibold">Piece</p>,
    renderCell: () => <p>{Math.floor(Math.random() * 200 + 1)}</p>,
  },
  {
    field: "color",
    headerName: "Available Color",
    width: 200,
    renderHeader: () => <p className="font-semibold">Available Color</p>,
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderHeader: () => (
      <p className="font-semibold w-[160px] text-center">Action</p>
    ),
    renderCell: () => (
      <div className="h-full w-[100px] flex">
        <Tooltip title="edit">
          <Button>
            <EditIcon sx={{ color: "gray" }} />
          </Button>
        </Tooltip>
        <Tooltip title="delete">
          <Button>
            <DeleteIcon sx={{ color: "gray" }} />
          </Button>
        </Tooltip>
      </div>
    ),
  },
];

export default function StocksList() {
  const { data: products,isLoading } = useFetchProductsApi();
  if (isLoading) {
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20]}
        disableColumnSorting
        sx={{ border: 0 }}
        rowHeight={85}
      />
    </Paper>
  );
}
