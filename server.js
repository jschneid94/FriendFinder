const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Creates an instance of express
var app = express();
// Sets the initial port
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
})