var ReplaceStream = require('./ReplaceStream');

process.stdin.pipe(new ReplaceStream(process.argv[2],process.argv[3]))
.pipe(process.stdout);

// echo Hello World! | node pipeTest World Node.js