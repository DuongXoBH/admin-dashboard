"use client";

import DealsDetail from "@/components/page/dashboard/deals-detail/deals-detail";
import Revenue from "@/components/page/dashboard/revenue";
import SalesDetail from "@/components/page/dashboard/sales-detail/sales-detail";
import TotalList from "@/components/page/dashboard/total-list/list";
import { Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <div className="w-full pb-2 relative">
      <Typography
        sx={{
          mb: "18px",
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 600,
        }}
      >
        Dashboard
      </Typography>
      <TotalList />
      <SalesDetail />
      <DealsDetail />
      <Revenue />
    </div>
  );
}
