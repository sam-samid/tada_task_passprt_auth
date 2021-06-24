const Express = require('express');
const passport = require('passport');
const app = Express();

app.use(passport.initialize());

//includeing folder app
require('./app')(app);

app.listen(8271, ()=>{
    console.log('Server run http://0.0.0.0:8271');
});