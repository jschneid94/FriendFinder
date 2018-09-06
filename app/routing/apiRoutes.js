const path = require("path");

const friends = require("../data/friends");

module.exports = function(app) {

    // A GET route with the url /api/friends. 
    // This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // A POST routes /api/friends. 
    // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        var userInput = req.body;
        console.log("Input = " + JSON.stringify(userInput));

        var userResponses = userInput.scores;
        console.log("Responses = " + userResponses);

        var matchName = "";
        var matchPhoto = "";
        var totalDifference = 1000;

        for (var i = 0; i < friends.length; i++) {
            // Compute differences for each question
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            console.log("diff = " + diff);

            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
            }
        }
        friends.push(userInput);
        res.json({status: "OK", matchName: matchName, matchPhoto: matchPhoto});
    })
};