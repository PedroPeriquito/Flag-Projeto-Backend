const moviesDB = require('../DB/moviesDB');
const validator = require('validator');

async function getMovies(req, res) {
	try {
		const result = await moviesDB.findMovies();
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function getMovieById(req, res) {
	const id = req.params.id;
	try {
		const result = await moviesDB.findMovieById(id);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function getMovieByIdTMDB(req, res) {
	const idTMDB = req.params.idTMDB;
	try {
		const result = await moviesDB.findMovieByIdTMDB(idTMDB);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function postMovie(req, res) {
	const { idTMDB, title, img, release_date, plot, score } = req.body;
	const scoreCheck = score.toString();

	if (!validator.isNumeric(idTMDB)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (validator.isEmpty(title)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (!validator.isDate(release_date)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (validator.isEmpty(plot)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (!validator.isNumeric(scoreCheck)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (score < 0 || score > 10) {
		res.status(400).json('Invalid Score');
		return;
	}

	const data = { idTMDB, title, img, release_date, plot, score };
	try {
		const result = await moviesDB.insertMovie(data);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function putMovie(req, res) {
	const { id } = req.params;
	const { idTMDB, title, img, release_date, plot, score } = req.body;
	const scoreCheck = score.toString();

	if (!validator.isNumeric(idTMDB)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (validator.isEmpty(title)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (!validator.isDate(release_date)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (validator.isEmpty(plot)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (!validator.isNumeric(scoreCheck)) {
		res.status(400).json('Invalid Payload');
		return;
	}
	if (score < 0 || score > 10) {
		res.status(400).json('Invalid Score');
		return;
	}

	const data = { idTMDB, title, img, release_date, plot, score };
	try {
		await moviesDB.updateMovie(id, data);
		const result = await moviesDB.findMovieById(id);
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

async function deleteMovie(req, res) {
	const { id } = req.params;

	try {
		const result = await moviesDB.removeMovie(id);
		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

module.exports = {
	getMovies,
	getMovieById,
	getMovieByIdTMDB,
	postMovie,
	putMovie,
	deleteMovie,
};
