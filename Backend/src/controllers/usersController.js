const usersDB = require('../DB/usersDB');
const validator = require('validator');



async function getUsers(req, res) {
	try {
		const result = await usersDB.findUsers();
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function getUserById(req, res) {
	const id = req.params;
	try {
		const result = await usersDB.findUserById(id);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function postUser(req, res) {
	const { name, email, password, country } = req.body;
	
	if (validator.isEmpty(name)) {
		res.status(400).json('Invalid Name');
		return;
		}
	if (!validator.isEmail(email)) {
		res.status(400).json('Invalid Email');
		return;
		}
	if (!validator.isStrongPassword(password)) {
		res.status(400).json('Invalid Password');
		return;
		}
	
	const data = {name, email, password, country };
	try {
		const result = await usersDB.insertUser(data);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
}

async function putUser(req, res) {
	const { id } = req.params;
	const { name, email, password, country } = req.body;

	if (validator.isEmpty(name)) {
		res.status(400).json('Invalid Name');
		return;
		}
	if (!validator.isEmail(email)) {
		res.status(400).json('Invalid Email');
		return;
		}
	if (!validator.isStrongPassword(password)) {
		res.status(400).json('Invalid Password');
		return;
		}
	
	const data = { name, email, password, country };
	try {
		await usersDB.updateUser(id, data);
		const result = await usersDB.findUserById(id);
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

async function deleteUser(req, res) {
	const { id } = req.params;

	try {
		const result = await usersDB.removeUser(id);
		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

module.exports = {
	getUsers,
	getUserById,
	postUser,
	putUser,
	deleteUser,
};
