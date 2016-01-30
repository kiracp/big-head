var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'How Big Is Your Head?' });
});

router.post('/data', function(req,res,next){

	// Get form body here
	var pyshell = new PythonShell('counter.py', {scriptPath:"./", pythonOptions: ['-u']});
	var generated = req.body.song;

	pyshell.send(generated).end(function(err){
		if (err) throw err;
		console.log('finished');
	})

	var output = '';
		// Message is whatever is printed by the python function
	pyshell.on('message', function (message) {		  
			console.log(message);
		  output_array = message.split(' * ');
		  for (i = 0; i < output_array.length; i++) {
		  	output += output_array[i] + "<br>";
		  }

		  console.log(output);
		  res.render('data', {title: "Data"});
		  
	});

});

module.exports = router;
