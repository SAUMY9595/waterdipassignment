const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const Booking = require('../models/data');
const { handleDisplay } = require('../controllers/handleDisplay');

const router = express.Router();

async function handleData(req, res, next) {
  const results = [];

  fs.createReadStream('hotel_bookings_1000.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        // Checking  if the data already exists
        const existingData = await Booking.countDocuments();
        if (existingData === 0) {
          // insert data if the collection is empty
          await Booking.insertMany(results);
          console.log('Data saved to MongoDB');
        } else {
          console.log('Data already exists, skipping insert');
        }
        next(); // Proceed to the next middleware or route handler
      } catch (err) {
        console.error('Error saving data:', err);
        return res.status(500).json({ msg: 'Error saving data', status: 'F', error: err });
      }
    })
    .on('error', (err) => {
      console.error('Error reading CSV file:', err);
      return res.status(500).json({ msg: 'Error reading CSV file', status: 'F', error: err });
    });
}

// Route to and display
router.get('/', handleData, handleDisplay);

module.exports = router;
