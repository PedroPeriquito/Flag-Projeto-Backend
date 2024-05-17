const reviewsDB = require('../DB/reviewsDB');
const validator = require('validator');

async function getReviews(req, res) {
	try {
		const result = await reviewsDB.findReviews();
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function getReviewById(req, res) {
	const id = req.params;
	try {
		const result = await reviewsDB.findReviewById(id);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}
async function getReviewByMovieId(req, res) {
	const idTMDB = req.params.idTMDB;
	try {
		const result = await reviewsDB.findReviewByMovieId(idTMDB);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function postReview(req, res) {
	const { idTMDBNum, idUser } = req.params;
	const { review, score, watched, planToWatch } = req.body;
	const scoreCheck = score.toString();
	const idTMDB = idTMDBNum.toString();

	if (!validator.isNumeric(idTMDB)) {
		res.status(400).json('Invalid Request');
		return;
	}
	if (validator.isEmpty(idUser)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (!validator.isNumeric(scoreCheck)) {
		res.status(400).json('Invalid Request');
		return;
	}
	if (score < 0 || score > 10) {
		res.status(400).json('Invalid Score');
		return;
	}
	if (typeof watched !== 'boolean') {
		res.status(400).json('Invalid Request');
		return;
	}
	if (typeof planToWatch !== 'boolean') {
		res.status(400).json('Invalid Request');
		return;
	}
	if (watched === true && planToWatch === true) {
		res.status(400).json('Invalid Request');
		return;
	}

	const data = { idTMDB, review, score, watched, planToWatch };
	try {
		const result = await reviewsDB.insertReview(idUser, data);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function putReview(req, res) {
	const { id } = req.params;
	const { review, score, watched, planToWatch } = req.body;
	const scoreCheck = score.toString();

	if (!validator.isNumeric(scoreCheck)) {
		res.status(400).json('Invalid Request');
		return;
	}
	if (score < 0 || score > 10) {
		res.status(400).json('Invalid Score');
	}
	if (typeof watched !== 'boolean') {
		res.status(400).json('Invalid Request');
		return;
	}
	if (typeof planToWatch !== 'boolean') {
		res.status(400).json('Invalid Request');
		return;
	}
	if (watched === true && planToWatch === true) {
		res.status(400).json('Invalid Request');
		return;
	}

	const data = { review, score, watched, planToWatch };
	try {
		await reviewsDB.updateReview(id, data);
		const result = await reviewsDB.findReviewById(id);
		if (!result) {
			res.status(404).end();
			z;
			return;
		}
		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

async function deleteReview(req, res) {
	const { id } = req.params;

	try {
		const result = await reviewsDB.removeReview(id);
		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

module.exports = {
	getReviews,
	getReviewById,
	getReviewByMovieId,
	postReview,
	putReview,
	deleteReview,
};
