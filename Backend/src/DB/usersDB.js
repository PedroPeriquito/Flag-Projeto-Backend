const connect = require('./connect');



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
	insertUser,
};