var Animal = function(isMammal){
	this.legs = 4;
	this.isMammal = isMammal;
}



function createAnimalFactory(isMammal){

	return new Animal(isMammal);
}

/*After few days the above factory can become*/


var MammalAnimal = function(){

this.isMammal = true;
};


var ReptileAnimal = function(){

};

function createAnimalFactoryV2(isMammal){

	return isMammal?new MammalAnimal():new ReptileAnimal();
}