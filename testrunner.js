import Mocha from 'mocha';
import mochawesome from 'mochawesome';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

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
