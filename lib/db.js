var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "marisa"
var password = "authentication";
var address = '@ds035348.mongolab.com:35348/authentication';
connect();



// Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + address;
  mongoose.connect(url);
}

// Disconnect from Mongo
function disconnect() {mongoose.disconnect()}