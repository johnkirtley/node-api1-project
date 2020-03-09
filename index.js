const express = require('express');
const shortid = require('shortid');

const server = express();

// Stores All Users
const users = [];

server.use(express.json());

// Initial Server Status Check
server.get('/', (req, res) => {
	res.status(200).json({ api: 'running' });
});

// Create New User
server.post('/api/users', (req, res) => {
	const user = req.body;

	user.id = shortid.generate();

	users.push(user);

	res.status(201).json(user);
});

// Get All Users
server.get('/api/users', (req, res) => {
	res.status(201).json(users);
});

// Get User By ID
server.get('/api/users/:id', (req, res) => {
	const userId = req.params.id;

	users.forEach(user => {
		if (user.id === userId) {
			return res.status(201).json(user);
		} else {
			return res.status(400).json({ error: 'User not found' });
		}
	});
});

// Deletes User By Id
server.delete('api/users/:id', (req, res) => {
	const userId = req.params;

	users.forEach(user => {
		if (user.id === userId) {
			return res.send(users);
		} else {
			return res.status(400).json({ Error: 'User not found' });
		}
	});
});

server.put('/api/users/:id', (req, res) => {
	const userUpdate = req.body;
	const userId = req.params.id;

	users.forEach(user => {
		if (user.id === userId) {
			return res.send(userUpdate);
		} else {
			return res.status(400).json({ Error: 'user not found' });
		}
	});
});

const PORT = 5000;
server.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
