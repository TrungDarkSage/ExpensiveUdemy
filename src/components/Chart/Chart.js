import React from "react";
import ChartBar from "./ChartBar";
import "../../../src/styles/ChartStyle/Chart.css";

const Chart = (props) => {
  // Chuyển arr dataPoint là 1 arr chứa obj
  // thành 1 arr mới chứa value
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Tìm value max từ arr trên với ... chuyển
  // dataPoinValue từ 1 arr thành 1 dãy value
  const maxValueMonth = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValueMonth}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
