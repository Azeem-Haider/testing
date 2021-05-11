const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10kb' }));

app.post('/api/v1/userData', (req, res) => {
	try {
		const name = req.body.name;
		const email = req.body.email;
		res.json({
			data: {
				status: 'success',
				data: {
					name,
					email,
				},
			},
		});
	} catch (error) {
		res.json({
			msg: error,
		});
	}
});

app.listen(PORT, () => {
	console.log(`listening at ${PORT}`);
});
