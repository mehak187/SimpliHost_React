// BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Gross Revenue',
        data: [2500, 6000, 7500, 2200, 5000, 7500, 5000, 2200, 3200, 0, 9500, 5000],
        backgroundColor: '#3551B6', // Customize bar color
        borderRadius: {
          topLeft: 10,   // Top left corner
          topRight: 10,  // Top right corner
          bottomLeft: 0, // Bottom left corner
          bottomRight: 0 // Bottom right corner
        },
        borderSkipped: false, // Ensure the bar corners are rounded
        barThickness: 40 // Adjust the width of the bars
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // Hide legend (you can change this if you want to show it)
      },
      tooltip: {
        enabled: true // Enable tooltips on hover
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}` // Format y-axis values as currency
        },
        grid: {
          display: true, // Display grid lines for Y-axis
        },
      },
      x: {
        ticks: {
          color: '#000' // Customize x-axis label color
        },
        grid: {
          display: false, // Hide grid lines for X-axis
        },
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
