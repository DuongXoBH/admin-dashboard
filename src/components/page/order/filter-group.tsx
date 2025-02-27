"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function FilterGroup() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "818px",
        height: "70px",
        flexDirection: "row",
        borderRadius: "12px",
        borderColor: "rgba(213, 213, 213, 1)",
        borderWidth: "0.6px",
        borderStyle: "solid",
        overflow: "hidden",
      }}
    >
      <Tooltip title="Filter">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "20px",
            textTransform: "none",
            borderRightWidth: "0.6px",
            borderRightColor: "rgba(213, 213, 213, 1)",
            borderRightStyle: "solid",
            borderRadius: "0 !important",
          }}
        >
          <FilterAltIcon sx={{ color: "black" }} />
          <Typography
            sx={{ color: "black", marginLeft: "10px", fontWeight: "600" }}
          >
            {" "}
            Filter By
          </Typography>
        </Box>
      </Tooltip>

      {/* DateFilter */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "20px",
          textTransform: "none",
          borderRightWidth: "0.6px",
          borderRightColor: "rgba(213, 213, 213, 1)",
          borderRightStyle: "solid",
          borderRadius: "0 !important",
        }}
      >
        {" "}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>

      {/* TypeFilter */}
      <Box>

      </Box>
      
      {/* StatusFilter */}
      <Box>

      </Box>
    </Box>
  );
}
