const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

//session: false, we dont want a cookie based session
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function (app) {
	//Auth'd request -> verify token -> resource access
	//Signing in -> verify email/pw -> token
	//Signing up -> verify email is not in use -> token


	//.get.... call functions can be "A series of middleware functions (separated by commas)."
	app.get('/', requireAuth, function (req, res) {
		res.send({ hi: 'there' });
	});
	app.post('/signin', requireSignIn, Authentication.signin);
	app.post('/signup', Authentication.signup);
}