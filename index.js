const express = require('express');
const shortid = require('shortid');

const server = express();

const PORT = 5000;
server.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
