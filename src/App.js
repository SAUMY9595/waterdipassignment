import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DateSelector from './components/DateSelector';
import TimeSeriesChart from './components/TimeSeriesChart';
import CountryVisitorsChart from './components/CountryVisitorsChart';
import SparklineChart from './components/SparklineChart';
import Summary from './components/Summary';
import RecentBookings from './components/RecentBookings';
import Footer from './components/Footer';
import './App.css'; // Assuming you have a CSS file for styling

const App = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (newData) => {
    setFilteredData(newData || []);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard-container">
        <DateSelector onDateChange={handleFilter} />
        <Summary data={filteredData} />
        <div className="charts-container">
          <TimeSeriesChart data={Array.isArray(filteredData) ? filteredData : []} />
          <CountryVisitorsChart data={Array.isArray(filteredData) ? filteredData : []} />
          <div className="sparklines">
            <SparklineChart data={Array.isArray(filteredData) ? filteredData : []} title="Adult Visitors" visitorType="adults" />
            <SparklineChart data={Array.isArray(filteredData) ? filteredData : []} title="Children Visitors" visitorType="children" />
          </div>
        </div>
        <RecentBookings />
      </div>
      <Footer />
    </div>
  );
};

export default App;