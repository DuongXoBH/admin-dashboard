"use client";

import CropSquareIcon from "@mui/icons-material/CropSquare";
import { Box } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <h1>DashBoard</h1>
      <CropSquareIcon sx={{ color: 'green' }}/>
      <Box sx={{ backgroundColor: "#C2EAEB", color: "rgba(0, 182, 155, 1)" }}>Primary</Box>
    </>
  );
}
