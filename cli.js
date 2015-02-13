
var pkg = require('./package.json');
var program = require('commander');

program
  .version(pkg.version)
  .option('-v, --verbose', 'More verbose')
  .option('-p, --pretty-print', 'Pretty printing')
  .parse(process.argv);

if (program.verbose) {
  process.env['DEBUG'] = pkg.name;
}

var detector = require('./index.js');
var detected = detector();

if (program.prettyPrint) {
  detected = JSON.stringify(detected,null,4);
} else {
  detected = JSON.stringify(detected);
}


console.log(detected);

