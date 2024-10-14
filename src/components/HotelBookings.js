import React, { useState, useEffect } from 'react';
import { fetchHotelDataFromExcel, filterDataByDateRange } from './hotelBookingsService';
import './components/styles.css'; // Import the CSS file

const HotelBookings = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchHotelDataFromExcel();
            setData(result);
            setFilteredData(result); // Initialize filtered data with all data
        };
        fetchData();
    }, []);

    const handleFilter = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const result = filterDataByDateRange(data, start, end);
        setFilteredData(result);
    };

    return (
        <div className="hotel-bookings-container">
            <div className="filter-container">
                <input 
                    type="date" 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                    className="date-input"
                />
                <input 
                    type="date" 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)} 
                    className="date-input"
                />
                <button className="filter-button" onClick={handleFilter}>
                    Filter
                </button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            {/* Add more columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredData.length === 0 && <p className="no-data-message">No data available for the selected date range.</p>}
            </div>
        </div>
    );
};

export default HotelBookings;
