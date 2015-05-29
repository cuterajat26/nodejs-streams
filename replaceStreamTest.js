var ReplaceStream = require('./ReplaceStream');

var rs = new ReplaceStream('World','Node.js');

rs.on('data',function(data){
	console.log(data.toString());
});

rs.write('Hello W');
rs.write('orld!');
rs.end();
