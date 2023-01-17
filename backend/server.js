const express = require("express");
const path = require('path')
require("dotenv").config();
const mongoose = require("mongoose");

const bookingRoutes = require("./routes/bookingsRoutes");
const userRoutes = require("./routes/userRoutes");
const customerInquiryRoutes = require("./routes/customerInquiryRoutes");

// EXPRESS APP
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")))
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/inquiries", customerInquiryRoutes);

// CONNECT TO MONGO DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {  
    // Listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
