var express = require('express'),
    http = require('http');
var bodyParser = require('body-parser');
 var mongoose = require('mongoose');
 GLOBAL.mongoose = mongoose;
 var db = require('./database/dbconfig.js');

var app = express();
var server = http.createServer(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

module.exports = app;
db.connect('mongodb://localhost:27017/saveImagesDB', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  }
  });

require('./routes.js')(app);
server.listen(process.env.PORT || 3001, function() {
    console.log("Server is listening in port", server.address().port);
});