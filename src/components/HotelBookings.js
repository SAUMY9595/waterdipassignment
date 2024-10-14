<tbody>
  {filteredData.length > 0 ? (
    filteredData.map((booking, index) => (
      <tr key={index}>
        <td>{booking.country || 'Unknown Country'}</td>
        <td>
          {booking.arrival_date_day_of_month && booking.arrival_date_month && booking.arrival_date_year
            ? `${booking.arrival_date_day_of_month}/${booking.arrival_date_month}/${booking.arrival_date_year}`
            : 'Unknown Date'}
        </td>
        <td>{booking.adults || 0}</td>
        <td>{booking.children || 0}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No data available for the selected date range.</td>
    </tr>
  )}
</tbody>
