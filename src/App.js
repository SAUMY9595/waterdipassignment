import React, { useState, useEffect } from 'react';
import { fetchHotelDataFromExcel, filterDataByDateRange } from './data/hotelBookingsService';
import Navbar from './components/Navbar';
import DateSelector from './components/DateSelector';
import TimeSeriesChart from './components/TimeSeriesChart';
import CountryVisitorsChart from './components/CountryVisitorsChart';
import SparklineChart from './components/SparklineChart';
import './styles.css'; // Adjust the path if styles.css is in a different directory

const App = () => {
  const [data, setData] = useState([]); // Holds all data
  const [filteredData, setFilteredData] = useState([]); // Holds data after filtering by date range

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchHotelDataFromExcel(); // Fetch data from the Excel file
        setData(result);
        setFilteredData(result); // Default to showing all data initially
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };
    loadData();
  }, []);

  // Handler for when date range changes
  const handleDateChange = (startDate, endDate) => {
    const filtered = filterDataByDateRange(data, new Date(startDate), new Date(endDate));
    setFilteredData(filtered);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard-header">
        {/* <h1 className="dashboard-title">Hotel Booking Dashboard</h1> */}
        <DateSelector onDateChange={handleDateChange} />
      </div>
      <div className="charts-container">
        <TimeSeriesChart data={filteredData} />
        <CountryVisitorsChart data={filteredData} />
      </div>
      <div className="sparkline-charts">
        <SparklineChart data={filteredData} title="Adults" visitorType="adults" />
        <SparklineChart data={filteredData} title="Children" visitorType="children" />
      </div>
    </div>
  );
};

export default App;
