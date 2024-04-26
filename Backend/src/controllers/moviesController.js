const moviesDB = require('../DB/moviesDB');

async function postMovie(req, res) {
	const { title, genres, release_date, plot, score } = req.body;
	try {
		const result = await movieDB.insertMovie(title, genres, release_date, plot, score);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

module.exports = {
	postMovie,
};
