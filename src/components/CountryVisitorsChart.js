import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons'; // You can add more flag icons as needed
import './CountryVisitorsChart.css';

const CountryVisitorsChart = ({ data }) => {
  // Aggregate visitor counts by country
  const countryCounts = data.reduce((acc, booking) => {
    acc[booking.country] = (acc[booking.country] || 0) + booking.adults + booking.children + booking.babies;
    return acc;
  }, {});

  const series = [{
    name: 'Visitors',
    data: Object.values(countryCounts),
  }];

  const countries = Object.keys(countryCounts);
  
  // Dynamic colors for each country
  const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#fffb33', '#33fff5'];

  // Chart options
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true, // Show toolbar
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        dataLabels: {
          position: 'top', // Display data labels on top of bars
        },
      },
    },
    xaxis: {
      categories: countries.map((country, index) => `${country} ${<FontAwesomeIcon icon={faFlag} className="flag-icon" />}`),
    },
    title: {
      text: 'Visitors by Country',
      align: 'center',
      style: {
        fontSize: '20px',
        color: '#333',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => `${val} Visitors`, // Tooltip formatting
      },
    },
    colors: colors.slice(0, countries.length), // Dynamic colors
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'], // Color of data labels
      },
    },
  };

  return (
    <div className="chart-container">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default CountryVisitorsChart;
