const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy

//including userRepo folder
const userRepo = require('../repository/userRepo');

//validating using passport
passport.use(new BearerStrategy(
    function(token, done) {
        //checing token is exist or not
        let user = userRepo.findOneByToken(token);
        if (!user[0]) { return done(null, false); }
        return done(null, user[0], { scope: 'all' });
    }
));

const authenticate = passport.authenticate('bearer', { session: false });

module.exports = {authenticate}