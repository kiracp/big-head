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
	generated = generated.replace(/(\r\n|\n|\r|\t)/gm,"");

	pyshell.send(generated).end(function(err){
		if (err) throw err;
		console.log('finished');
	})

	var output = '';
		// Message is whatever is printed by the python function
	pyshell.on('message', function (message) {		  
		console.log(message);
		var msg = message.slice(1, message.length-1);
		var msg = message.split(',');

		console.log(msg);

		var newArray = [];

		for (var i = 0; i< msg.length; i++) {
			var value = msg[i].split(":");
			console.log("value:", value);
			newArray[i] = value[0].slice(2, value[0].length-1) + ':' + value[1]
		}
		console.log(newArray);

		var big = false;


		res.render('data', {title: "Data", body: newArray});
		  
	});

});

module.exports = router;
