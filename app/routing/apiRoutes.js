var friendData = require ("../data/friends");
var Friends = [];
module.exports = function(app) {
    
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        return res.json(Friends);
    });
    // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.routeName = 
        console.log(newFriend);
        Friends.push(newFriend);
        //or Friends.push(req.body);
    })

};







