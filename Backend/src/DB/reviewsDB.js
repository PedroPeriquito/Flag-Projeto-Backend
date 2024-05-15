const connect = require('./connect');
const { ObjectId } = require('mongodb');

const db = connect.db('projeto_backend');
const reviews = db.collection('reviews');

async function findReviews() {
	try {
		const cursor = await reviews.find().toArray();

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function findReviewById(id = '') {
	const query = {
		_id: new ObjectId(id),
	};
	try {
		const cursor = await reviews.findOne(query);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}
async function findReviewByMovieId(idMovie = '') {
	const query = {
		idMovie: new ObjectId(idMovie),
	};
	try {
		const cursor = await reviews.find(query).toArray();

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}




async function insertReview(idUser, data) {
	const query = {
		idUser: new ObjectId(idUser),
		...data
	};

	try {
		const cursor = await reviews.insertOne(query);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function updateReview(id = '', data) {
	const query = {
		_id: new ObjectId(id),
	};

	const payload = {
		$set: data,
	};

	try {
		await reviews.updateOne(query, payload);
		const updatedReview = await findReviewById(query._id);
		return updatedReview;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function removeReview(id = '') {
	const query = {
		_id: new ObjectId(id),
	};

	try {
		const result = await reviews.deleteOne(query);
		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

module.exports = {
	findReviews,
	findReviewById,
	findReviewByMovieId,
	insertReview,
	updateReview,
	removeReview,
};
