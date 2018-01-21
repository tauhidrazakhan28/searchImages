var db = require('../database/dbconfig.js');
var mongoose = require('mongoose');
var ObjectId       = require('mongodb').ObjectID
exports.imagesearchKey = function(TABLE,data,callbacks)  {
var collection= db.get().collection(TABLE);
	       collection.insert([data], 
				  function(err, result) { 
				  	// console.log("saving data");
					if(err){
							callbacks(err,null);
							} else { 
									callbacks(null,result);
							}
	 	}
	);	
}

exports.saveImages = function(TABLE,data,callbacks)  {
var collection= db.get().collection(TABLE);
	       collection.insert([data], 
				  function(err, result) { 
				   // console.log(err);
					if(err){
							callbacks(err,null);
							} else { 
									callbacks(null,result);
							}
	 	}
	);
	
}
