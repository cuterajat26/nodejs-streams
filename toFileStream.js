var stream = require('stream');
var util = require('util');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');


function ToFileStream(){
	stream.Writable.call(this,{objectMode:true});
	/*other options are
	*highWaterMark - (the default is 16 kB) this controls the back-pressure limit.
	*decodeStrings(defaults to true) This enables the automatic decoding of strings into binary buffers
	before passing them to the _write() method.
	This otion is ignored in the object mode.
	*/


}

util.inherits(ToFileStream,stream.Writable);

ToFileStream.prototype._write = function(chunk,encoding,callback){

	mkdirp(path.dirname(chunk.path),function(err){
		if(err){
			return callback(err);//same method can be used to report errors
		}

		fs.writeFile(chunk.path,chunk.content,callback);
	});
}

module.exports = ToFileStream;



