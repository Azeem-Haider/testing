const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10kb' }));

app.post('/api/v1/userData', (req, res) => {
	try {
		res.json({
			data: {
				status: 'success',
				data: {
					name:'hello',
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
