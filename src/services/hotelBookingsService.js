export const fetchHotelDataFromExcel = async () => {
    const response = await fetch('/data/hotel_bookings_1000.csv');
    const csvData = await response.text(); // Read CSV as plain text
  
    // Split the CSV into rows
    const rows = csvData.split('\n');
  
    // Get the header row
    const headers = rows[0].split(',');
  
    // Convert rows into an array of objects
    const bookings = rows.slice(1).map(row => {
      const values = row.split(',');
      const booking = {};
      headers.forEach((header, index) => {
        booking[header.trim()] = values[index].trim();
      });
      return booking;
    });
  
    return bookings;
  };
  
  export const filterDataByDateRange = (data, startDate, endDate) => {
    return data.filter(booking => {
      const bookingDate = new Date(
        booking.arrival_date_year,
        booking.arrival_date_month - 1, // Month in JS Date starts from 0 (Jan = 0)
        booking.arrival_date_day_of_month
      );
      return bookingDate >= startDate && bookingDate <= endDate;
    });
  };
  