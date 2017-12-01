const args = process.argv;

var spawn = require('child_process').spawn,
	fs = require('fs'),
    py    = spawn('python', ['wiki.py']),
    data = args[2].toString().replace("https://en.wikipedia.org/wiki/","").replace(/_/g," ").replace(/-/g," ");
    filename = args[2].toString().replace("https://en.wikipedia.org/wiki/","");
    dataString = '';

py.stdout.on('data', function(data){
	dataString += data.toString();
});
py.stdout.on('end', function(){
	console.log('Summary: ',dataString);
	filename += ".txt";
	fs.writeFile(filename, dataString, function (err) {
		if (err) throw err;
		console.log('Saved!');
	});
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();

	 

	

