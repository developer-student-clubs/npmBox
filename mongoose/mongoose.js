
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./auth");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://xyz:xyz%4017@cluster0.62amgq8.mongodb.net/test";
app.use(express.json());
app.use(authRouter);
// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
