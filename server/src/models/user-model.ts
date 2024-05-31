const { Schema, model } = require('mongoose');

const UserSchema = Schema({
	authId: {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String
	},
	address: {
		type: String
	},
	city: {
		type: String
	},
	country: {
		type: String
	}
});

const User = model('User', UserSchema);

export default User;
