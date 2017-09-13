var path = require("path");

module.exports = function(app) {

	  // Each of the below routes just handles the HTML page that the user gets sent to.

	  

	  //get route for survey page
	  app.get("/survey", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/survey.html"));
	  });

	  // index route loads home.html
	  app.use("/", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/home.html"));
	  });

 }