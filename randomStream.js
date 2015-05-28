var stream = require('stream');
var chance = require('chance').Chance();
var util = require('util');


var RandomSteam = function(){
	stream.Readable.call(this,arguments);
}

util.inherits(RandomSteam,stream.Readable);

RandomSteam.prototype._read = function(size){

	var chunk = chance.string();

	console.log('Pushing random string ',chunk);

	this.push(chunk,'utf8');

	if(chance.bool({likelihood:5})){
		this.push(null);
	}
}

module.exports = RandomSteam;

