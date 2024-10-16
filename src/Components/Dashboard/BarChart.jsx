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
        backgroundColor: '#3551B6',
        borderRadius: {
          topLeft: 15,
          topRight: 15,
          bottomLeft: 0,
          bottomRight: 0
        },
        borderSkipped: false,
        barThickness: 15
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`
        },
        grid: {
          display: true,
        },
      },
      x: {
        ticks: {
          color: '#000'
        },
        grid: {
          display: false,
        },
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
