var fstream = require('fstream');
var path = require('path');

var sourceA = path.resolve(process.argv[2]);
console.log(sourceA);

var sourceStreamA = fstream.Reader({type:'Directory',path:sourceA});

sourceStreamA.on('readable',function(){
	var chunk;

	if((chunk = sourceStreamA.read()) !== null){
		console.log(chunk);
	}
})
// sourceStreamA.on('data',function(chunk){
// 	console.log(chunk);
// });

sourceStreamA.on('end',function(){
	console.log('streamA ended');
});
sourceStreamA.pipe(process.stdout,{end:false});



