var express = require('express');
var router = express.Router();

//GET /question
router.get("/", function(req, res, next) {
  res.json({
  	response: "You sent me GET request"
  });
});

//POST /question
//Route for creating question
router.post("/", function(req, res, next) {
  res.json({
  	response: "You sent me POST request",
  	body: req.body
  });
});

//GET /question/:id
//Route for specific question
router.get("/:id", function(req, res, next) {
  res.json({	
  	response: "You sent me GET request" + req.params.id
  });
});

module.exports = router;