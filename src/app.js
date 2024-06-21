require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT;


app.use(express.json());

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.post('/post', async (req, res) => {
	console.log(`POSTED: ${JSON.stringify(req.body)}`);
	res.json({ 'message': 'POSTED CORRECTLY' });
});

app.get('/get', async (req, res) => {
	console.log('GOT');
	res.json({ 'message': 'GOT CORRECTLY' });
});

app.listen(port, () => {
	console.log(`server started running on port ${port}`);
});