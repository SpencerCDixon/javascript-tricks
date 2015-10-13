var prompt = require('prompt');
prompt.start();

console.log('Whats your name Human?')
prompt.get(['name'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Hello, ' + result.name + ', nice to meet you!');
});

function onErr(err) {
  console.log(err);
  return 1;
}
