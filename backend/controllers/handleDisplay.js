const Booking = require('../models/data');


async function handleDisplay(req,res) {
  try {
    const data = await Booking.find();
    res.json({ msg: 'Data fetched from MongoDB', status: 'T', data });
  } catch (err) {
    res.json({ msg: 'Error fetching data', status: 'F', error: err });
  }
    
}



module.exports = {

    handleDisplay,

}
