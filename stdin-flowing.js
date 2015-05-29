process.stdin.on('data',function(data){
	console.log('new data available');

console.log({
	length:data.length,
	data:data.toString()
});
}).on('end',function(){
	console.log('end of stream');
})

//cat sample.txt | node stdin.js