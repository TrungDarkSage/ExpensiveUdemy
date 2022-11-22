import React from "react";
import Chart from "../Chart/Chart";
const ExpensiveChart = (props) => {
  const chartData = [
    { label: "jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  // chưa rõ loop này
  for (const expense of props.expenses) {
    // bắt đầu từ index 0 => Jan
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartData} />;
};

export default ExpensiveChart;
