const Express = require('express');
const app = Express();

//includeing folder app
require('./app')(app);

app.listen(8271, ()=>{
    console.log('Server run http://0.0.0.0:8271');
});