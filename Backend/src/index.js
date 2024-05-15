require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/usersRouter');
const moviesRouter = require('./routes/moviesRouter');
const reviewsRouter = require('./routes/reviewsRouter');
const authRouter = require('./routes/authRouter');
const cors = require('cors');




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
app.use('/', authRouter);

app.get('/', (req, res) => {
});

app.listen(port, function () {
	console.log(`Listening on port ${port}`);
});


