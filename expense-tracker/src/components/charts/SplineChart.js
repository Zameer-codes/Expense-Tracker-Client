// SplineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, TimeScale, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date-fns adapter

// Register necessary components and scales
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, TimeScale, Title, Tooltip, Legend);

const SplineChart = ({ data }) => {
  // Transform the data
  const transformedData = data.map(d => ({
    date: new Date(d.transactionTime),
    amount: d.amount,
    type: d.type
  }));

  // Prepare data for Chart.js
  const chartData = {
    datasets: [
      {
        label: 'Income',
        data: transformedData.filter(d => d.type === 'Income').map(d => ({ x: d.date, y: d.amount })),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.4 // Spline effect
      },
      {
        label: 'Expense',
        data: transformedData.filter(d => d.type === 'Expense').map(d => ({ x: d.date, y: d.amount })),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.4 // Spline effect
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: $${context.raw.y}`;
          }
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default SplineChart;
