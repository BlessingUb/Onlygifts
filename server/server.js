const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const striperoutes = require("./routes/stripe");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/stripe", striperoutes);
const usersRouter = require("./routes/users");

mongoose.connect(process.env.DB_URI);
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const stripeRouter = require("./routes/stripe");
const messageRouter = require("./routes/messages");

app.use("/users", usersRouter);
app.use("/checkout", stripeRouter);
app.use("/messages", messageRouter);



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
