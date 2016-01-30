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
		var msg = message.slice(1, message.length-4);
		var msg = message.split(',');

		console.log(msg);

		var newArray = [];

		for (var i = 0; i< msg.length; i++) {
			var value = msg[i].split(":");
			console.log("value:", value);
			var lilArray = [];
			lilArray[0] = value[0].slice(2, value[0].length-1);

			lilArray[1] = +value[1];

			if (isNaN(lilArray[1])) {
				lilArray[1] = 0;
			}
			newArray[i] = lilArray;
		}
		console.log(newArray);

		var total = 0;
		var total1s = 0;
		var total1p = 0;
		var total2s = 0;
		var total2p = 0;
		var total3s = 0;
		var total3p = 0;

		for (var i = 0; i< newArray.length; i++) { 
			total = total + newArray[i][1];
		}

		for (var i = 0; i< newArray.length; i++) { 
			if (newArray[i][0] == "mine" || 
				newArray[i][0] == "i" ||
				newArray[i][0] == "me" ||
				newArray[i][0] == "my" ||
				newArray[i][0] == "myself"){
					total1s = total1s + newArray[i][1];
			}
		}

		console.log(total);
		console.log(total1s);

		var ratio = (total1s + 0.0)/total;
		console.log(ratio);

		res.render('data', {title: "Data", body: "Your big head ratio is: " + ratio});
		  
	});

});

module.exports = router;
