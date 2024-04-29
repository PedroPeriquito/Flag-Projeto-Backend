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
		

		const cursor = await reviews.find(query);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function insertReview(data) {
/* 	const query = { idTMDB, idUser, review, score, watched, planToWatch }; */
	try {
		

		const cursor = await reviews.insertOne(data);

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
		$set: data
	};

	try {
		const result = await reviews.updateOne(query, payload);
		const updatedNote = await findReviewById(query._id);
		return updatedNote;
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
	insertReview,
	updateReview,
	removeReview
};
