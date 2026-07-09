import { BarChart } from '@mui/x-charts/BarChart'; 
import * as React from "react";
import { ThemeContext } from '../../context/ThemeContext';
import { DarkModeContext } from "../../context/DarkModeContext";

export function valueFormatter(value) {
  return `${value}mm`;
}

export default function BarsDataset(props) {
  const { dataset } = props;

  const { theme } = React.useContext(ThemeContext);
  const { darkMode } = React.useContext(DarkModeContext);

  const chartSetting = {
    height: 300,
    yAxis: [
      {
        disableTicks: true,
        disableLine: true,
        width: 50,
      },
    ],
    grid: {
      horizontal: true,
    },
    sx: {
      // Y Axis
      "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
        fill: darkMode ? "#D4D4D8" : "#9F9F9F",
      },

      // X Axis
      "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
        fill: darkMode ? "#D4D4D8" : "#9F9F9F",
      },

      // Legend
      "& .MuiChartsLegend-root text": {
        fill: darkMode ? "#FFFFFF !important" : "#666666 !important",
      },

      "& .MuiChartsLegend-series text": {
        fill: darkMode ? "#FFFFFF !important" : "#666666 !important",
      },

      "& .MuiChartsLegend-label": {
        fill: darkMode ? "#FFFFFF !important" : "#666666 !important",
      },
    },
  };

  const expensesSeries = dataset.series.map((item) =>
    item.dataKey === "amountLastWeek" ? { ...item, color: theme.color } : item,
  );

  return (
    <BarChart
      height={200}
      dataset={dataset.data}
      xAxis={[
        {
          dataKey: dataset.dataKey,
          categoryGapRatio: 0.5,
          tickLabelStyle: {
            fill: darkMode ? "#FFFFFF" : "#9F9F9F",
          },
        },
      ]}
      yAxis={[
        {
          disableTicks: true,
          disableLine: true,
          width: 50,
          tickLabelStyle: {
            fill: darkMode ? "#FFFFFF" : "#9F9F9F",
          },
        },
      ]}
      grid={{
        horizontal: true,
      }}
      series={expensesSeries}
      hideLegend
    />
  );
}