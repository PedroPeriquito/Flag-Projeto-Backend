const reviewsDB = require('../DB/reviewsDB');

async function getReviews(req, res) {
	const { name, email } = req.body;
	try {
		const result = await reviewsDB.findReviews(name, email);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function getReviewById(req, res) {
	const { name, email } = req.body;
	try {
		const result = await reviewsDB.findReviewById(name, email);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function postReview(req, res) {
	const { name, email } = req.body;
	try {
		const result = await reviewsDB.insertReview(name, email);
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
