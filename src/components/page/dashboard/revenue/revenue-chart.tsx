"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import Image from "next/image";

export default function RevenueChart() {
  const dataA = [20, 40, 50, 80, 30, 60, 20, 50, 70, 60, 40, 50];
  const dataB = [60, 30, 40, 60, 90, 40, 80, 20, 50, 90, 60, 30];

  const labels = [
    "5k",
    "10k",
    "15k",
    "20k",
    "25k",
    "30k",
    "35k",
    "40k",
    "45k",
    "50k",
    "55k",
    "60k",
  ];
  const option = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: labels,
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      axisLabel: {
        formatter: "{value}%",
      },
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
      {
        start: 0,
        end: 100,
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    series: [
      {
        name: "Profit",
        data: dataA,
        type: "line",
        smooth: true,
        symbol: "none",
        symbolSize: 8,
        itemStyle: {
          color: "#3B82F6",
          borderColor: "#fff",
          borderWidth: 0,
        },
        lineStyle: {
          color: "#3B82F6",
          width: 0,
        },
        areaStyle: {
          color: "#E2B8FE",
        },
      },
      {
        name: "Sale",
        data: dataB,
        type: "line",
        smooth: true,
        symbol: "none",
        symbolSize: 8,
        itemStyle: {
          color: "#fff",
          borderColor: "#fff",
          borderWidth: 0,
        },
        lineStyle: {
          color: "#3B82F6",
          width: 0,
        },
        areaStyle: {
          color: "#FFA58A",
        },
      },
    ],
  };
  return (
    <div id="#revenue" className="w-full h-[430px]">
      <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
      <div className="w-full flex flex-row justify-center gap-5 mt-10">
        <div className="flex gap-1">
          <Image alt="" src='/dashboard/oval-1.svg' width={12} height={12}></Image>
          <p className="font-semibold">Profit</p>
        </div>
        <div className="flex gap-1">
          <Image alt="" src='/dashboard/oval.svg' width={12} height={12}></Image>
          <p className="font-semibold">Sale</p>
        </div>
      </div>
    </div>
  );
}
