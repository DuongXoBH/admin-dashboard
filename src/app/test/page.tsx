"use client";

import * as React from "react";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

export default function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </DemoContainer>

      <div className="mt-4">
        <span className="font-medium">Ngày đã chọn:</span>{" "}
        {selectedDate ? selectedDate.format("DD/MM/YYYY") : "Chưa chọn"}
      </div>
    </LocalizationProvider>
  );
}
