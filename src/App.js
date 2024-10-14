import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import DateSelector from './components/DateSelector';
import TimeSeriesChart from './components/TimeSeriesChart';
import CountryVisitorsChart from './components/CountryVisitorsChart';
import SparklineChart from './components/SparklineChart';
import Summary from './components/Summary';
import RecentBookings from './components/RecentBookings';
import Footer from './components/Footer';
// import Home from './components/Home';
import Bookings from './components/Bookings';
import './App.css'; // Assuming you have a CSS file for styling

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);

  const handleFilter = (newData) => {
    setFilteredData(newData || []);
  };

  const handleAddBooking = (newBooking) => {
    setFilteredData([...filteredData, newBooking]);
    setTotalVisitors(totalVisitors + newBooking.adults + newBooking.children);
    setTotalBookings(totalBookings + 1);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="dashboard-container">
          <Switch>
            <Route path="/" exact>
              {/* <Home /> */}
              <DateSelector onDateChange={handleFilter} />
              <Summary data={filteredData} totalVisitors={totalVisitors} totalBookings={totalBookings} />
              <div className="charts-container">
                <TimeSeriesChart data={Array.isArray(filteredData) ? filteredData : []} />
                <CountryVisitorsChart data={Array.isArray(filteredData) ? filteredData : []} />
                <div className="sparklines">
                  <SparklineChart data={Array.isArray(filteredData) ? filteredData : []} title="Adult Visitors" visitorType="adults" />
                  <SparklineChart data={Array.isArray(filteredData) ? filteredData : []} title="Children Visitors" visitorType="children" />
                </div>
              </div>
              <RecentBookings />
            </Route>
            <Route path="/bookings">
              <Bookings onAddBooking={handleAddBooking} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;