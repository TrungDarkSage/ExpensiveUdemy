import "../../../src/styles/ChartStyle/ChartBar.css";

const ChartBar = (props) => {
  let percentFillHeight = "0%";
  if (props.maxValue > 0) {
    percentFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: percentFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label ">{props.label}</div>
    </div>
  );
};

export default ChartBar;
