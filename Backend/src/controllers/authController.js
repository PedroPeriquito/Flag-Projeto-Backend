const userDB = require('../DB/usersDB');
const encryptionService = require('../services/encryptionService');
const validator = require('validator');
const jwtService = require('../services/jwtService');

async function registerUser(req, res) {
	const { email, password, name, country } = req.body;

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

	const hash = await encryptionService.createHash(password);
	const data = { email, hash, name, country };
	const userId = await userDB.insertUser(data);

	if (userId === -1) {
		res.status(400).json({
			message: 'Error registering user',
		});
		return;
	}

	res.json({
		email,
		userId,
	});
}

async function loginUser(req, res) {
	const { email, password } = req.body;

	const user = await userDB.selectUser(email);
	if (!user) {
		res.status(400).json({
			status: 'Fail',
			message: 'User not found',
		});
		return;
	}

	const result = await encryptionService.verifyHash(user.hash, password);
	if (result !== true) {
		res.status(400).json({
			status: 'Fail',
			message: 'wrong password',
		});
		return;
	}

	
	const token = jwtService.createToken(user._id, user.email);
			res.json({
				status: 'ok',
				message: 'User logged in',
				token,
			});
}

async function changePassword(req, res) {
	const { id } = req.params;
	const { password, newPassword, verifyPassword } = req.body;
	if (!validator.isStrongPassword(newPassword)) {
		res.status(400).json('Invalid Password');
		return;
	}
	if (newPassword !== verifyPassword) {
		res.status(400).json('Passwords dont match');
		return;
	}

	const user = await userDB.findUserById(id);
	if (!user) {
		res.status(400).json({
			status: 'Fail',
			message: 'User not found',
		});
		return;
	}

	const result = await encryptionService.verifyHash(user.hash, password);
	console.log(user);
	if (result !== true) {
		res.status(400).json({
			status: 'Fail',
			message: 'wrong password',
		});
		return;
	}

	const hash = await encryptionService.createHash(newPassword);
	const userPass = await userDB.updateUserPassword(id, hash);

		if (userPass === -1) {
			res.status(400).json({
				message: 'Error changing password',
			});
			return;
	}
	res.json({
		status: 'success',
		message: 'password changed',
	});
}

module.exports = {
	registerUser,
	loginUser,
	changePassword,
};
