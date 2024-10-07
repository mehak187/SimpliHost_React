import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin to display percentage inside each doughnut segment
const percentagePlugin = {
  id: 'percentagePlugin',
  afterDatasetsDraw(chart) {
    const { ctx, data } = chart;
    const dataset = data.datasets[0];
    const total = dataset.data.reduce((sum, value) => sum + value, 0); // Sum of all values

    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      meta.data.forEach((element, index) => {
        const { x, y } = element.tooltipPosition();
        const percentage = ((dataset.data[index] / total) * 100).toFixed(1); // Calculate percentage

        // Set up text properties
        ctx.fillStyle = '#fff'; // Set text color
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Display the percentage inside the segment
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
        data: [45675.9, 22430, 34625.9, 34625.9], // Booking amounts
        backgroundColor: ["#3551B6", "#34A853", "#F4B942","#32F0CD"], // Colors for each section
        hoverBackgroundColor: ["#3551B6", "#34A853", "#F4B942", "#32F0CD"],
        borderWidth: 0, // No border for clean look
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart resizing
    cutout: "50%", // Donut style with inner space
    plugins: {
      legend: {
        position: "bottom", // Legend on the right
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((sum, val) => sum + val, 0); // Total of all data
            const percentage = ((value / total) * 100).toFixed(1); // Calculate percentage

            // Show both label and percentage in tooltip
            return `${label}: $${value.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
  };

  const containerStyles = {
    width: '100%',// Set a maximum width for larger screens
    margin: '0 auto', // Center the chart
    position: 'relative', // Needed for the chart to fill the container
    height: '400px', // Set a default height for the chart
  };

  return (
    <div style={containerStyles}>
      <Doughnut data={data} options={options} plugins={[percentagePlugin]} />
    </div>
  );
};

export default TaskDonutChart;
