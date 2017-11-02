var express = require('express');
var router = express.Router();

//POST /question/qID/answer
//Route for creating an answer to specific question
router.post('/question/:qID/answer', function(req, res) {
	res.json({
		response: "You POST an answer to specific question",
		questionID: req.params.qID,
	})
})

//PUT /question/qID/answer/aID
//Route for creating an update answer to specific question
router.put('/question/qID/answer/aID', function(req, res) {
	res.json({
		response: "You PUT an updated answer to specific question",
		questionID: req.params.qID,
		answerID: req.params.aID,
		body: req.body
	})
})

//DELETE /question/qID/answer/aID
//Route for deleting an answered question
router.delete('/question/qID/answer/aID', function(req, res) {
	res.json({
		response: "You DELETE an answer to specific question",
		questionID: req.params.qID,
		answerID: req.params.aID,
		body: req.body
	})
})

//POST /question/:id/answer/:id/voteup
//Route for voteup on specified question and answer
router.delete('/question/qID/answer/aID/voteup', function(req, res) {
	res.json({
		response: "You POST a voteup to specific question and answer",
		questionID: req.params.qID,
		answerID: req.params.aID,
	})
})

module.exports = router;