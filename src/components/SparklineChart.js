import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './SparklineChart.css';

const SparklineChart = ({ data, title, visitorType }) => {
  const total = data.reduce((acc, booking) => acc + booking[visitorType], 0);

  const series = [{ data: data.map(booking => booking[visitorType]) }];

  const options = {
    chart: {
      type: 'line',
      sparkline: { enabled: true },
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 400,
      },
    },
    title: { 
      text: `${title}: ${total}`, 
      align: 'center', 
      style: { fontSize: '20px', color: '#2c3e50' }, // Increased font size and dark color
    },
    stroke: { curve: 'smooth', width: 2 },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      style: {
        fontSize: '14px',
        background: '#333',
        color: '#fff',
        borderRadius: '5px',
      },
    },
    xaxis: {
      categories: data.map((_, index) => index + 1),
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#2c3e50', // Dark color for y-axis labels
          fontSize: '16px', // Increased font size for y-axis labels
        },
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
