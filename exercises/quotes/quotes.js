// Quotation marks are often used to denote the start and end of a string.
// But sometimes we need to print out the quotation marks themselves by using escape characters.
// Create a program that prompts for a quote and an author.
// Display the quotation and author as shown in the example output.

// Example Output
       // What is the quote? These aren't the droids you're looking for.
       // Who said it? Obi-Wan Kenobi
       // Obi-Wan Kenobi says, "These aren't the droids
       // you're looking for."
var prompt = require('prompt');
prompt.start();
prompt.delimiter = '';
prompt.message = '';

var schema = {
  properties: {
    quote: {
      description: "What is the quote?".magenta,
      required: true
    },
    author: {
      description: "Who said it?".magenta
    }
  }
};

prompt.get(schema, function (err, result) {
  console.log(
    result.author + ' says, ' + '\"' + result.quote + '\"'
  );
});

