const connect = require('./connect');


async function insertMovie(title, genres, release_date, plot, score) {
	const query = { title, genres, release_date, plot, score };
	try {
		const db = connect.db('projeto_backend');
		const movies = db.collection('movies');

		const cursor = await movies.insertOne(query);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

module.exports = {
	insertMovie,
};
