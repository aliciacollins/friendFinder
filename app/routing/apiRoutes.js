var friendData = require("../data/friends");

module.exports = function (app) {


  //    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    return res.json(friendData);

  });
  // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
  app.post("/api/friends", function (req, res) {
    var Diff = [];
    var totalDifference = 50
    console.log("newFriend", newFriend);
    var newFriend = (req.body)
    friendData.forEach(function (item) {

      for (var i = 0; i < 10; i++) {
        Diff.push(Math.abs(parseInt(newFriend.scores) - parseInt(item.scores[i])));
      }
      console.log('Diff in loop', Diff);
      console.log(
        Diff.reduce((a, b) => a + b)
      )

      iDifference = Diff.reduce((a, b) => a + b)

      if (totalDifference > iDifference) {
        totalDifference = iDifference
        matchName = item.name;
        matchImg = item.photo;
        bestMatch = item;
      }

      Diff = [];
      return Diff;

    });

    console.log("totalDifference", totalDifference);
    console.log("friendArrName", matchName);
    console.log("friendArrPhotoloop", matchImg)
    friendData.push(req.body);
    console.log("Post /api/friends reurn match " + JSON.stringify(bestMatch));
    res.json(bestMatch);

  })
  console.log(friendData);

};







