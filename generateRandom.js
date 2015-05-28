var RandomStream = require('./RandomStream');

randomStream = new RandomStream();

randomStream.on('readable',function(){
var chunk ;
while((chunk = randomStream.read()) !== null){
	console.log(chunk.toString());
}
}).on('end',function(){
	console.log('stream ended');
});