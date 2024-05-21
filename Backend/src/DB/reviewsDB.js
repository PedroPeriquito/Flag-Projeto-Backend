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

async function findReviewByMovieId(page, idTMDB) {
	const lookup = {
		$lookup: {
			from: 'users',
			localField: 'idUser',
			foreignField: '_id',
			as: 'user',
		},
	};
	const project = {
		$project: {
			review: 1,
			score: 1,
			'user.name': 1,
		},
	};
	const match = { $match: { idTMDB: idTMDB } };

	const commentsPerPage = 1;
	try {
		const cursor = await reviews
			.aggregate([match, lookup, project])
			.skip(page * commentsPerPage)
			.limit(commentsPerPage)
			.toArray();
		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}
async function findReviewByWatched(userId = '') {
	const lookup = {
		$lookup: {
			from: 'movies',
			localField: 'idTMDB',
			foreignField: 'idTMDB',
			as: 'movie',
		},
	};
	const project = {
		$project: {
			score: 1,
			'movie.title': 1,
			'movie.img': 1,
		},
	};
	const match = {
		$match: {
			idUser: new ObjectId(userId),
			watched: true,
		},
	};

	try {
		const cursor = await reviews.aggregate([match, lookup, project]).toArray();

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}
async function findReviewByPlanToWatch(userId = '') {
	const lookup = {
		$lookup: {
			from: 'movies',
			localField: 'idTMDB',
			foreignField: 'idTMDB',
			as: 'movie',
		},
	};
	const project = {
		$project: {
			'movie.title': 1,
			'movie.img': 1,
		},
	};
	const match = {
		$match: {
			idUser: new ObjectId(userId),
			planToWatch: true,
		},
	};

	try {
		const cursor = await reviews.aggregate([match, lookup, project]).toArray();

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function insertReview(idUser, data) {
	const query = {
		idUser: new ObjectId(idUser),
		...data,
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
	findReviewByWatched,
	findReviewByPlanToWatch,
	insertReview,
	updateReview,
	removeReview,
};
