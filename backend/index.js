const express = require('express');
const connectToMongoDB = require('./path/to/mongodb/connection'); // Adjust the path as necessary
const dataRoute = require('./path/to/dataRoute'); // Adjust the path as necessary

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/excelsheet").then(() =>
  console.log("Mongodb connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/data", dataRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));