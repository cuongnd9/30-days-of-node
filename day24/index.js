const cp = require('child_process');

for (let i = 1; i < 6; i++) {
  let workerProcess = cp.exec('node slave.js ' + i, function(
    error,
    stdout,
    stderr
  ) {
    if (error) {
      console.log(error.stack);
      console.log('Error Code: ', error.code);
      console.log('Error Signal: ', error.signal);
    }

    if (stderr) {
      console.log('value of stderr: ', stderr);
    }

    console.log('Value of stdout: ', stdout);
  });
  workerProcess.on('exit', function(code) {
    console.log('Child process exited ');
  });
}
