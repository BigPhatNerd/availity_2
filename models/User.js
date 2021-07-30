const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema({
	
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	npiNumber: {
		type: Number,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},
	address: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},

	zip: {
		type: Number,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const User = model("User", UserSchema);
module.exports = User;
