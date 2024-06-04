import { Request, Response } from 'express';
import User from '../models/user-model';

const createUser = async (req: Request, res: Response) => {
	try {
		const { authId, email } = req.body.user;

		const user = await User.findOne({ authId });
		if (user) return res.status(200).send(user);

		const newUser = new User({ authId, email });
		await newUser.save();

		return res.status(201).json(newUser.toObject());
	} catch (error) {
		console.log('error ==>', error);
		res.status(500).json({ message: 'Create user error' });
	}
};

export default {
	createUser
};
