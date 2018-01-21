/*var mongoose = require('mongoose');
// var dburl = 'mongodb://localhost/studentDB';
var dburl    = 'mongodb://127.0.0.1:27017/saveImgDB';
mongoose.connect(dburl, { useMongoClient: true });
mongoose.connection.on('connected',function() {
	console.log('mongoose default connection open to' + dburl);
	// body...
});
mongoose.connection.on('err',function(err){
	console.log('mongoose default connection err' + err);
});*/


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var state = {
  db: null,
}

exports.connect = function(url, done) {
  if (state.db) return done()

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err)
    state.db = db
    done()
  })
}

exports.get = function() {
  return state.db
}


exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}