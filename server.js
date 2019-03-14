var express = require("express");
// var path = require("path");
// var connection = require("../db/connection");

const htmlRoutes = require("./routes/htmlRoutes")

const apiRoutes = require("./routes/apiRoutes")

// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// turn routes on for server

app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
