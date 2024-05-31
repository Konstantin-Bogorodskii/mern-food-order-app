import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

import UserRoute from './routes/user-route';

const app = express();

// middleware which converts all API calls body to json format
app.use(express.json());

app.use(cors());

app.use('/api/user', UserRoute);

const PORT = process.env.PORT || 8080;

const appStart = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

		app.listen(PORT, () => {
			console.log(`Server starter on port: ${PORT}`);
		});
	} catch (error) {
		console.log('error ==>', error);
	}
};

appStart();
