var ToFileStream = require('./ToFileStream');

var tfs = new ToFileStream();

tfs.write({path:"writeFiles/file1.txt",content:"file1"});
tfs.write({path:"writeFiles/file2.txt",content:"file2 contents"});
tfs.write({path:"writeFiles/file3.txt",content:"file3 contents"});

tfs.end(function(){
console.log("all files created");
});