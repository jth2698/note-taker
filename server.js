// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// HTML Routes
// =============================================================

// GET route to notes.html
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});

// GET route to index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

// API Routes
// =============================================================

// GET route to db.json
app.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "Develop/db/db.json"), "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    })
});

// POST route to db.json
app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
});

// DELETE route to db.json

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});