// Dependencies
var express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets the web root so express knows what directory to look in when serving static files - Only need to refer to `/` to reference (e.g. in the html file linking to a script source)
app.use(express.static("public"));

// Routers
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});