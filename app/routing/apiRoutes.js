var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
   console.log("GET api/friends");
   res.json(friends);

  });

 

  app.post("/api/friends", function(req, res) {
    
    console.log("POST api/friends");
    console.log("req.body", req.body);

    //compare to friends
    var totals = [];

    for (var i = 0; i < friends.length; i++) {
      
         totals[i] = 0; 
      for (var j = 0; j < friends[i].scores.length; j++) {
          totals[i] += Math.abs(req.body.q[j] - friends[i].scores[j]);
       } 

       // friends[i]
    }
    console.log("totals", totals);

    if (totals[0]<=totals[1]) {res.json({name:friends[0].name, photo:friends[1].photo})};

  });



};

