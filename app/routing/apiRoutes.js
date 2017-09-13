module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
   console.log("GET api/friends");
  });

 

  app.post("/api/friends", function(req, res) {
    
    console.log("POST api/friends");
    console.log("req.body", req.body);

  });



};

