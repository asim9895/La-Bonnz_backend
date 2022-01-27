const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const connectDb = require('../database/mongoose');
require('dotenv').config();

connectDb();

const app = express();
const port = process.env.PORT || 2300;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 200,
	})
);

app.use('/api', userRoutes);

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
