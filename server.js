const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const port = process.env.PORT;
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () =>
  console.log(`Server started running on port ${port}`)
);
