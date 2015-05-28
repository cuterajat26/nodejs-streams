var http = require('http');
var chance = require('chance').Chance();

http.createServer(function(req,res){

console.log('request received');

	res.writeHead(200,{'Content-Type':'text/plain'});

var interVal = setInterval(function() {

console.log('timeout called');
	if(chance.bool({likelihood:95})){
		res.write(chance.string()+'\n');
	}else{
				clearInterval(interVal);
		res.end('\n...The end...');
	}


}, 200);

	// while(chance.bool({likelihood:95})){
	// 	res.write(chance.string()+'\n');
	// }
	// res.end('\nThe end');
	
	res.on('finish',function(){
		console.log('All data was sent');
	});

}).listen(8080,function(){
	console.log('listening on 8080');
})