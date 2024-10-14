import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './TimeSeriesChart.css';

const TimeSeriesChart = ({ data }) => {
  const series = [{
    name: 'Visitors',
    data: data.map(booking => ({
      x: new Date(booking.arrival_date_year, booking.arrival_date_month - 1, booking.arrival_date_day_of_month),
      y: booking.adults + booking.children + booking.babies,
    })),
  }];

  const options = {
    chart: {
      type: 'line',
      zoom: { enabled: true },
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 400,
      },
    },
    title: {
      text: 'Visitors Over Time',
      align: 'center',
      style: {
        fontSize: '24px', // Increased font size for the title
        color: '#2c3e50', // Dark color for the title
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          color: '#2c3e50', // Dark color for x-axis labels
          fontSize: '14px', // Increased font size for x-axis labels
        },
      },
    },
    yaxis: {
      title: {
        text: 'Number of Visitors',
        style: {
          color: '#2c3e50', // Dark color for y-axis title
          fontSize: '16px', // Increased font size for y-axis title
        },
      },
      labels: {
        style: {
          color: '#2c3e50', // Dark color for y-axis labels
          fontSize: '14px', // Increased font size for y-axis labels
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: '16px', // Increased font size for tooltip
        background: '#333',
        color: '#fff',
        borderRadius: '5px',
      },
    },
  };

  return (
    <div className="time-series-chart-container">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default TimeSeriesChart;
