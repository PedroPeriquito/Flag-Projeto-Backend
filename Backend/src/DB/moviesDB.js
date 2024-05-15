const connect = require('./connect');
const { ObjectId } = require('mongodb');

const db = connect.db('projeto_backend');
const movies = db.collection('movies');

async function findMovies() {
	try {
		const cursor = await movies.find().toArray();

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function findMovieById(idTMDB) {
	let query = Number(idTMDB);
	try {
		const cursor = await movies.findOne({ query });
		console.log(idTMDB);
		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function insertMovie(data) {
	try {
		const cursor = await movies.insertOne(data);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function updateMovie(id = '', data) {
	const query = {
		_id: new ObjectId(id),
	};

	const payload = {
		$set: data,
	};

	try {
		await movies.updateOne(query, payload);
		const updatedMovie = await findMovieById(query._id);
		return updatedMovie;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function removeMovie(id = '') {
	const query = {
		_id: new ObjectId(id),
	};

	try {
		const result = await movies.deleteOne(query);
		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

module.exports = {
	findMovies,
	findMovieById,
	insertMovie,
	updateMovie,
	removeMovie,
};
