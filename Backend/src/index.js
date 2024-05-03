require('dotenv').config();
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const config = require('./DB/auth0');
const usersRouter = require('./routes/usersRouter');
const moviesRouter = require('./routes/moviesRouter');
const reviewsRouter = require('./routes/reviewsRouter');
const cors = require('cors');
const TMDB = require('./DB/TMDB');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(auth(config));
app.use(cors());
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);

app.get('/', (req, res) => {
	res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
	res.send(JSON.stringify(req.oidc.user));
});

app.get('/TMDB', async (req, res) => {
	const tmdbDATA = await TMDB.getTMDB();
	res.send(tmdbDATA);
});
app.get('/search', async (req, res) => {
	const tmdbDATA = await TMDB.searchTMDB();
	res.send(tmdbDATA);
});

app.listen(port, function () {
	console.log(`Listening on port ${port}`);
});


