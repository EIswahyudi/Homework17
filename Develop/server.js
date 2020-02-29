const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const app = express();

// app.use(logger("dev"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: false
 });

require("./routes/api.js")(app);
require("./routes/html.js")(app);


 app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});