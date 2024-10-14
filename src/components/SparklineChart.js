import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './SparklineChart.css'; // Import the CSS file for styling

const SparklineChart = ({ data, title, visitorType }) => {
  // Calculate total visitors
  const total = data.reduce((acc, booking) => acc + booking[visitorType], 0);

  // Prepare series data for the chart
  const series = [{
    data: data.map(booking => booking[visitorType]),
  }];

  // Define chart options
  const options = {
    chart: {
      type: 'line',
      sparkline: { enabled: true },
      background: '#fff',
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 3,
        opacity: 0.2,
      },
    },
    title: {
      text: `${title}: ${total}`,
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#999',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#999',
          fontSize: '12px',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#00BFFF'], // Change color of the line
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: '12px',
      },
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // Grid row colors
        opacity: 0.5,
      },
      column: {
        colors: ['#f3f3f3', 'transparent'], // Grid column colors
        opacity: 0.5,
      },
    },
  };

  return (
    <div className="sparkline-chart-container">
      <ReactApexChart options={options} series={series} type="line" height={200} />
    </div>
  );
};

export default SparklineChart;
