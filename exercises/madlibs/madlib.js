// Mad libs are a simple game where you create a story tem- plate with blanks for words. You, or another player, then construct a list of words and place them into the story, cre- ating an often silly or funny story as a result.
// Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.
// Example Output
       // Enter a noun: dog
       // Enter a verb: walk
       // Enter an adjective: blue
       // Enter an adverb: quickly
       // Do you walk your blue dog quickly? That's hilarious!
// Constraints
// • Use a single output statement for this program.
// • Ifyourlanguagesupportsstringinterpolationorstring
// substitution, use it to build up the output.
String.prototype.supplant = function (o) {
    return this.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};

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

});


