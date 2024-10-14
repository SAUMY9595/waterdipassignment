const express = require("express");
const dataRoute = require("./routes/data");
const { connectToMongoDB } = require("./connect");


const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/excelsheet").then(() =>
  console.log("Mongodb connected")
);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 

app.use("/api/data",dataRoute);



app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
