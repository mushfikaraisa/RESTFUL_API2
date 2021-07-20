const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, './public')))

app.get('/fashion', (req, res, next) => {
	const coolTrends = ['yo-yos', 'pogs', 'WCW', 'ripped jeans', 'pooka shell necklace', 'Baggies', 'Converse', 'tamagotchi'];
	res.json({coolTrends})
})

app.listen(PORT, () => {
	console.log("I AM LISTENING ON ", PORT)
})