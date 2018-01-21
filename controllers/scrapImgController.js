var imgScrapDB = require('../model/myFunction.js');
var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
var async = require('async');

var request = require('request');
var cheerio = require("cheerio");

exports.imagesScrap = function(req, res) {

    var imageSearchesKey = req.body.imgSearch;
    var user_id = req.body.user_id != undefined ? req.body.user_id : "A125wer789aq";
    var storeImages = [];

async.series({
searchKeyword: function(callback) {
    
imgScrapDB.imagesearchKey('keySearches', req.body, function (err, data) {
     request.get({
uri : 'https://www.google.com/search?q='+imageSearchesKey+'&source=lnms&tbm=isch&sa=X',
    }, function(error, response, body) {
        var $ = cheerio.load(body);
        var dest = '../saveImages';
        if (!error && response.statusCode == 200) {
            $("img").slice(0, 15).each(function(index) {
                imgs = $('img').toArray()
                console.log("Downloading....");
                imgs.forEach(function (img) {
                    // console.log(img.attribs.src)
                    process.stdout.write(".");
                    img_url = img.attribs.src
                    if (/^https?:\/\//.test(img_url)) {
                    img_name = path.basename(img_url)
                    request(img_url).pipe(fs.createWriteStream(path.join(__dirname + '/saveImages', img_name)))
                    }
                })
            });
        }
    });
     callback()
 });
},

});
}

