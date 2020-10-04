// Dependencies
const noteData = require("../db/db.json");

// Routers
module.exports = function (app) {

    // API GET Request
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    // API POST Request
    app.post("/api/notes", function (req, res) {
        // req.body is available since we're using the body parsing middleware
        noteData.push(req.body);
        res.json(true);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });
};
