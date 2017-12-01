var spawn = require('child_process').spawn,
    py    = spawn('python', ['wiki.py']),
    dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log(dataString);
});