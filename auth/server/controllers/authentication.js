const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function (req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.status(422).send({ error: 'You must provide email and password' });
	}

	// see if a user with the given email exists
	User.findOne({ email: email }, function (err, existingUser) {
		if (err) {
			return next(err);
		}

		//if exists, return error
		if (existingUser) {
			//422 unprocessable entity
			return res.status(422).send({ error: 'Email is in use' });
		}

		//else create and save user record
		const user = new User({
			email: email,
			password: password
		});

		user.save(function (err) {
				//respond to request
			if (err) {
				return next(err);
			}

			res.json({ token: tokenForUser(user) });
		});


	});
}

exports.signin = function (req, res, next) {
	//at this point, the user has had email and pwd auth'd, just need to return there token
	res.send({ token: tokenForUser(req.user) });
}