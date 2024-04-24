require('dotenv').config();
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const config = require('./DB/auth0');
const userRouter = require('./routes/userRouter');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/user', userRouter);
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
	res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
	res.send(JSON.stringify(req.oidc.user));
	
});


app.listen(port, function () {
	console.log(`Listening on port ${port}`);
});



