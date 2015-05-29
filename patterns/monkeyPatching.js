function createProxy(subject){

			var origHello = subject.hello;

		subject.hello = function(){
			return origHello.call(this) + 'world';
		}
}