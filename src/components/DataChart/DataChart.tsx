"use client";

import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";
import { darkOptions, lightOptions } from "@/components/DataChart/Themes";
import { months } from "@/helper/Util";
import { useTheme } from "@mui/material/styles";


Chart.register(...registerables);
  

const DataChart = (props: ChartConfiguration) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();
  const { data, options } = props;

  useEffect(() => {
    if (!chartRef.current) return;

    const chartThemeOptions =
      theme.palette.mode === "dark" ? darkOptions : lightOptions

    const chart = new Chart(chartRef.current, {
      ...props,
      data,
      options: {
        ...options,
        ...chartThemeOptions,
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data, options, props]);

  return <canvas ref={chartRef} />;
};

export default DataChart;