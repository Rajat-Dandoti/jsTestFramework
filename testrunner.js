const Mocha = require('mocha');
const mochawesome = require('mochawesome');

const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports',
    reportFilename: 'report'
  }
});

mocha.addFile('./tests/exampleTest.js');

mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
