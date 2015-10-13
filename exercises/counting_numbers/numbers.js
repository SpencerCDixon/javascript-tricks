// Create a program that prompts for an input
// string and dis- plays output that shows the
// input string and the number of characters the string contains.
var prompt = require('prompt');
prompt.start();

console.log('What is the input string?: ')
prompt.get(['string'], function (err, result) {
  if (err) { return onErr(err); }

  var length = result.string.length
  if (length === 0) {
    console.log('Make sure to enter an input greater than 0')
  } else {
    console.log(result.string + ' has ' + length + ' characters.')
  }
});

function onErr(err) {
  console.log(err);
  return 1;
}

