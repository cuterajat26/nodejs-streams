var http = require('http');
var chance = require('chance').Chance();

http.createServer(function(req,res){

res.writeHead(200,{'Content-Type':'text/plain'});


function doAgain(){
	var isWritable = true;
	while(1){
		if(chance.bool({likelihood:99})){
			isWritable = res.write(chance.string({length:(16*1024)-1}));
			if(!isWritable){
				console.log('backpressure');
				res.once('drain',doAgain);
				break;

			}
		}else{
			res.end('This is the end');
			break;
		}
	}
}
doAgain();

}).listen(8080,function(){
	console.log('listening on 8080');
})