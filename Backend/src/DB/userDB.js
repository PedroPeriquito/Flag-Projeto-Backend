const connect = require('./connect');
const { ObjectId } = require('mongodb');


async function findUserById(id = '') {
	const query = {
		_id: new ObjectId(id),
	};
	try {
		const db = connect.db('projeto_backend');
		const users = db.collection('users');

		const result = await users.findOne(query);
		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function insertUser(name, email) {
	const query = { name, email };
	try {
		const db = connect.db('projeto_backend');
		const users = db.collection('users');

		const cursor = await users.insertOne(query);

		return cursor;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}


module.exports = {
	findUserById,
	insertUser,
};