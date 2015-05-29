//object composition

function createProxy(subject){

	var Proxy = function(subject){
		this.subject;
	};

	Proxy.prototype = Object.create(object.getPrototypeOf(subject));


	Proxy.prototype.hello = function(){
		return this.subject.hello()+' world!';
	}

	Proxy.prototype.goodbye = function(){
		return this.subject.goodbye.apply(this.subject,arguments);
		//we are using apply because we  need to call subject's method with passed arguments
	}

	return new Proxy(subject);


}