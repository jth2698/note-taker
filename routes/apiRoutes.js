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
        // req.body is available since we're using the body parsing middleware in server.js
        noteData.push(req.body);
        // set a noteID equal to the noteData array position of current note
        let noteID = noteData.length;
        // also add a key / value pair equal to the noteID for use in delete route
        noteData[noteID - 1].id = noteID;
        console.log("Saved id to noteData position " + noteID);
        res.json(true);
    });

    // API DELETE Request
    app.delete("/api/notes/:id", function (req, res) {
        // note id is available as a parameter in the HTTP object because of the way it is POSTed
        let id = req.params.id;
        // id is equal to the array position of the deleted note, so we can slice the note out of the array (note, using `delete` returns "null" in the object position so `slice` is needed)
        noteData.splice(id - 1);
        res.json(noteData);
    });
};
