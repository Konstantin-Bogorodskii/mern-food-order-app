import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

// middleware which converts all API calls body to json format
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log('server started on port ==>', PORT);
});
