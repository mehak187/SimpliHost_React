import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const percentagePlugin = {
  id: "percentagePlugin",
  afterDatasetsDraw(chart) {
    const { ctx, data } = chart;
    const dataset = data.datasets[0];
    const total = dataset.data.reduce((sum, value) => sum + value, 0);

    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      meta.data.forEach((element, index) => {
        const { x, y } = element.tooltipPosition();
        const percentage = ((dataset.data[index] / total) * 100).toFixed(1);

        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(`${percentage}%`, x, y);
      });
    });
  },
};

const TaskDonutChart = () => {
  const data = {
    labels: ["Cleaning", "Inspections", "Maintenance", "Admin"],
    datasets: [
      {
        data: [45675.9, 22430, 34625.9, 34625.9],
        backgroundColor: ["#3551B6", "#34A853", "#F4B942", "#32F0CD"],
        hoverBackgroundColor: ["#3551B6", "#34A853", "#F4B942", "#32F0CD"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%",
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce(
              (sum, val) => sum + val,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);

            return `${label}: $${value.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
  };

  const containerStyles = {
    width: "100%",
    margin: "0 auto",
    position: "relative",
    height: "400px",
  };

  return (
    <div style={containerStyles}>
      <Doughnut data={data} options={options} plugins={[percentagePlugin]} />
    </div>
  );
};

export default TaskDonutChart;
