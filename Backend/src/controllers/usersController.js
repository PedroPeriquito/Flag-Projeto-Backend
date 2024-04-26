const usersDB = require('../DB/usersDB');

async function postUser(req, res) {
	const { name, email } = req.body;
	try {
		const result = await userDB.insertUser(name, email);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

module.exports = {
	postUser,
};
