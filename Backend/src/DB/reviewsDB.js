const connect = require('./connect');

async function findReviews() {
	try {
		const db = connect.db('projeto_backend');
		const reviews = db.collection('reviews');

		const cursor = await reviews.find().toArray();

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function findReviewById(id) {
	const query = id;
	try {
		const db = connect.db('projeto_backend');
		const reviews = db.collection('reviews');

		const cursor = await reviews.find(query);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function insertReview(idTMDB, idUser, review, score, watched, planToWatch) {
	const query = { idTMDB, idUser, review, score, watched, planToWatch };
	try {
		const db = connect.db('projeto_backend');
		const reviews = db.collection('reviews');

		const cursor = await reviews.insertOne(query);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

module.exports = {
	findReviews,
	findReviewById,
	insertReview,
};
