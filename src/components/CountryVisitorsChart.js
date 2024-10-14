import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './CountryVisitorsChart.css'; // Import the CSS file

const CountryVisitorsChart = ({ data }) => {
  const countryCounts = data.reduce((acc, booking) => {
    acc[booking.country] = (acc[booking.country] || 0) + booking.adults + booking.children + booking.babies;
    return acc;
  }, {});

  const series = [{
    name: 'Visitors',
    data: Object.values(countryCounts),
  }];

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: true,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'],
      },
    },
    xaxis: {
      categories: Object.keys(countryCounts),
      title: {
        text: 'Country',
        style: {
          fontSize: '14px',
          color: '#333',
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
    title: {
      text: 'Number of Visitors by Country',
      align: 'center',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
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
