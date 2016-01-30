var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'How Big Is Your Head?' });
});

router.post('/', function(req,res,next){
	console.log('this ishappening');
 // res.render('index', { title: 'How Big Is Your Head?' });
	// Get form body here
	var pyshell = new PythonShell('counter.py', {scriptPath:"./", pythonOptions: ['-u']});
	var generated = req.body.song;
	console.log(generated);

	pyshell.send(generated).end(function(err){
		if (err) throw err;
		console.log('finished');
	})

var output = '';
		// Message is whatever is printed by the python function
		pyshell.on('message', function (message) {		  

		  	output_array = message.split(' * ');
		  	console.log(output_array);
		  	for (i = 0; i < output_array.length; i++) {
		  		output += output_array[i] + "<br>";
		  	}
		  	console.log(output);
		  	res.render('index', {title: "Data"});
		  
		});

});

module.exports = router;
