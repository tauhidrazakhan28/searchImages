module.exports = function(app) {
 var scrapImgController = require("./controllers/scrapImgController.js");
 app.post('/searchingImg', scrapImgController.imagesScrap);
    
};