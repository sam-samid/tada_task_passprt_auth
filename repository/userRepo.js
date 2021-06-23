//read json file
const accessToken = require('../access_token.json');
const users = require('../users.json');

//query for find token
const findOneByToken = (token) => accessToken.filter(act => act.token == token);

//query for find user
const findOneByUserid = (userId) => users.filter(uid => uid.id == userId);   

//exporting all const in object
module.exports = {findOneByToken,findOneByUserid};