require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/usersRouter');
const moviesRouter = require('./routes/moviesRouter');
const reviewsRouter = require('./routes/reviewsRouter');
const authController = require('./controllers/authController');
const cors = require('cors');
const TMDB = require('./DB/TMDB');



const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const corsOptions = {
	origin: 'http://localhost:5173',
	credentials: true,
};
app.use(cors(corsOptions));
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);

app.get('/', (req, res) => {
});
app.post('/register', authController.registerUser);
app.post('/login', authController.loginUser);

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


