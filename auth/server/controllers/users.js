const User = require('../models/user');
const mongoose = require('mongoose');

function extractID(req) {
	return mongoose.Types.ObjectId(req.params.userID);
}

function hideSensitiveInformation(user) {
	user.password = '';
	user.__v = 0;
}

exports.find = function (req, res, next) {

}

exports.findByID = function (req, res, next) {
	let userID;
	try {
		userID = extractID(req);
	} catch (e) {
		return res.status(400).send({ error: 'Invalid user ID' });
	}

	User.findById(userID, function (err, user) {
		if (err) {
			return next(err);
		}

		if (!user) {
			return res.status(404).send({ error: 'User not found' });
		}

		hideSensitiveInformation(user);
		res.json(user);
	});
}

exports.findAll = function (req, res, next) {

}

exports.save = function (req, res, next) {

}

exports.update = function (req, res, next) {

}

exports.delete = function (req, res, next) {

}

function validateSave() {

}
