function getTMDB() {
	const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer ' + process.env.TMDB_AUTH_TOKKEN,
		},
	};

		fetch(url, options)
		.then(res => res.json())
		.then(json => console.log(json.results[0].id, json.results[0].title, json.results[0].vote_average, json.results[0].release_date, json.results[0].overview, json.results[0].backdrop_path))
		.catch(err => console.error('error:' + err));
}

function searchTMDB() {
	const search = req.params;
	let url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer ' + process.env.TMDB_AUTH_TOKKEN,
		},
	};

	fetch(url, options)
		.then(res => res.json())
		.then(json => console.log(json))
		.catch(err => console.error('error:' + err));
}

module.exports = {
	getTMDB,
	searchTMDB,
};
