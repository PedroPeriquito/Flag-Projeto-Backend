const connect = require('./connect');
const { ObjectId } = require('mongodb');

const db = connect.db('projeto_backend');
const users = db.collection('users');

async function findUsers() {
	try {
		const cursor = await users.find().toArray();

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function findUserById(id = '') {
	const query = {
		_id: new ObjectId(id),
	};
	try {
		const cursor = await users.findOne(query);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function selectUser(email) {
	try {
		const cursor = await users.findOne({email});
		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function insertUser(data) {
	try {
		const cursor = await users.insertOne(data);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function updateUserPassword(id = '', hash) {
	const query = {
		_id: new ObjectId(id),
	};
	const payload = {
		$set: { hash }
	};

	try {
		await users.updateOne(query, payload);
		const updatedPassword = await findUserById(query._id);
		return updatedPassword;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}



async function updateUser(id = '', data) {
	const query = {
		_id: new ObjectId(id),
	};

	const payload = {
		$set: data,
	};

	try {
		await users.updateOne(query, payload);
		const updatedUser = await findUserById(query._id);
		return updatedUser;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function removeUser(id = '') {
	const query = {
		_id: new ObjectId(id),
	};

	try {
		const result = await users.deleteOne(query);
		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

module.exports = {
	findUsers,
	findUserById,
	selectUser,
	insertUser,
	updateUserPassword,
	updateUser,
	removeUser,
};

