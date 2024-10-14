import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './TimeSeriesChart.css'; // Import the CSS file for styling

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
      background: '#fff',
    },
    title: {
      text: 'Time Series: Number of Visitors',
      align: 'center',
      style: {
        fontSize: '20px',
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
      title: {
        text: 'Number of Visitors',
        style: {
          fontSize: '14px',
          color: '#333',
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#00BFFF'], // Change the line color
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
  };

  return (
    <div className="chart-container">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default TimeSeriesChart;
