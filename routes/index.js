var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Pop' });
	console.log(req.body);
});

router.post('/', (req,res) => {
	console.log(req.body);
	fs.readFile(path.join(__dirname,req.body.title+'.txt'), (err,data) => {
		if(err){
			console.log("File not found");
		}
		else
			console.log(data.toString('utf-8'));
	});
});


module.exports = router;
