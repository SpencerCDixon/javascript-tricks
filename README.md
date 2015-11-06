## Javascript Tricks
This is a repository to hold all JS tips and tricks I find while
researching/learning javascript.

### Table Of Contents

#### Styles
*  [Node](https://github.com/SpencerCDixon/Javascript-tricks/tree/master/node)
*  [Functional Javascript](https://github.com/SpencerCDixon/Javascript-tricks/tree/master/functional)
*  [OOJavascript](https://github.com/SpencerCDixon/Javascript-tricks/tree/master/oojs)

#### General
*  [this & Object.prototype]()

#### Libraries/Frameworks
*  [React](https://github.com/SpencerCDixon/Javascript-tricks/tree/master/react)
*  [JQuery](https://github.com/SpencerCDixon/Javascript-tricks/tree/master/jquery)


**Delegated event handlers**: defers calculating whether a DOM element matches
the event until run time when the event happens

### This
When dealing with `this` in Javascript it's important not to compare it to
`self` in Ruby.  There are certain default behaviors that `this` will use
depending on the situation and where the function gets called.  Remember it is
more important where the function is called than where it is defined.

