const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;

function createToken(userId, email) {
	const payload = {
		userId,
		email,
	};
	return jwt.sign(payload, tokenSecret, { expiresIn: '1d' });
}

function verifyToken(token) {
	try {
		var decoded = jwt.verify(token, tokenSecret);
		return decoded;
	} catch (error) {
		console.log('Invalid token');
		console.log(error);
	}
}

module.exports = {
	createToken,
	verifyToken,
};
