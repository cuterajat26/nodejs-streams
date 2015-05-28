//non flowing mode

process.stdin.on('readable',function(){
	var chunk;
	console.log('New data available');

	while((chunk = process.stdin.read()) !== null){
		console.log({

			length:chunk.length,
			data:chunk.toString()
		});
	}
}).on('end',function(){
	process.stdout.write('End of stream');
})

/*
try cat sample.txt | node stdin.js
*/