import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const chartRef = useRef(null);

  // Create the gradient background
  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
    gradient.addColorStop(0, "rgba(253, 99, 99, 0.5)"); // Start color (more opaque red)
    gradient.addColorStop(1, "rgba(253, 99, 99, 0.1)"); // End color (lighter red)
    return gradient;
  };

  // Chart data and options
  const data = {
    labels: ["$0", "$100,000", "$200,000", "$300,000", "$400,000", "$500,000", "$600,000", "$700,000", "$800,000", "$900,000"], // X-axis labels
    datasets: [
      {
        label: "Property Sales",
        data: [20, 50, 60, 100, 80, 90, 70, 60, 85, 65],
        borderColor: "#FD6363", // Red line color
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          // Ensure chartArea is available before applying the gradient
          if (!chartArea) {
            return null;
          }
          return getGradient(ctx, chartArea); // Apply the gradient
        },
        pointBorderColor: "#FD6363",
        pointBackgroundColor: "#fff",
        pointRadius: 5,
        fill: true, // Ensure fill is true to see the background
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable to allow custom sizing
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw * 1000}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false, // Hide grid lines for X-axis
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 100, // Adjust this depending on your data
        title: {
          display: false,
        },
        grid: {
          display: false, // Hide grid lines for Y-axis
        },
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <div style={{ height: "300px", width: "" }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineGraph;
