const reviewsDB = require('../DB/reviewsDB');
const data = require("../index")

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

async function postReview(req, res) {
    const {idTMDB, idUser } = req.params;
    console.log(idTMDB);
    console.log(idUser);
	const { review, score, watched, planToWatch } = req.body;
	try {
		const result = await reviewsDB.insertReview(idTMDB, idUser, review, score, watched, planToWatch);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

module.exports = {
	getReviews,
	getReviewById,
	postReview,
};
