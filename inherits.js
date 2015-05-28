var util = require('util');

var myInherits = function(ctor,superCtor){
	ctor.super_  = superCtor;

	ctor.prototype = Object.create(superCtor.prototype,{
		constructor:{
			value:function(){
				console.log('custom');
				ctor(arguments);
			},
			enumerable:false
		}
	});
};

var Animal = function(){
	console.log('animal born',arguments);
	this.walk = function(){
		console.log('animal walking');
	};

	this.species = 'animal';
}

var Dog = function(){
		// Dog.super_.apply(this,arguments);

	// this.inherited(arguments);
	console.log('dog born');
	this.bark = function(){
		console.log('dog barking');
	};

	this.species = 'dog';

}

myInherits(Dog,Animal);

var animal = new Animal();

var dog = new Dog({yo:1});

console.log(dog);
console.log(dog.__proto__);
console.log(Dog.prototype);