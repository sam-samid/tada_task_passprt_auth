const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy

//including userRepo folder
const userRepo = require('../repository/userRepo');

//disable session passport
//serialize user
// passport.serializeUser((user, done) => {
//     done(null, user.userId);
// });

// //deserialize user
// passport.deserializeUser((id, done) => {
//     userRepo.findOneByUserid((id, (err, user)=>{
//         done(err,user);
//     }));d
// });

//validating using passport
passport.use(new BearerStrategy(
    function(token, done) {

        // checking token is exist or not
        let tkn = userRepo.findOneByToken(token);
        if (!tkn[0]) { return done(null, false, 'access token invalid'); }

        let usr = userRepo.findOneByUserid(tkn[0].userId);
        if (!usr[0]) {return done(null, false, {message: 'user not found'})}

        return done(null, usr[0], { scope: 'all' });
        
    }
));

const authenticate = passport.authenticate('bearer', { session: false });

module.exports = {authenticate}