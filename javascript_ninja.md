## Javascript Ninja

(Information from JS ninja that will need to be organized)


### General

### Testing

Good tests:
*  Are repeatable  
*  Are simple; focus on one thing and remove as much html, css, and js as
    possible  
*  Independent; should execute in isolation


### Functions

Functions are _first-class objects_, they can be treated like any other JS
object.  Meaning they can be referenced with variables, declared with literals,
and passed as parameters.

**What Makes A First Class Citizen**?  
*  They can be created via literals.  
*  They can be assigned to variables, array entries, and properties of other
    objects.  
*  They can be passed as arguments to functions.  
*  They can be returned as values from functions.  
*  They can possess properties that can be dynamically created and assigned.  

**Callback**: any function that is to be called at a later time.  Elementary
example:

```javascript
function useless(callback) {
  return callback();
}
```

When a function is declared at the top level, a property using the function name
is declared on `window`.

**Tip**: In JS, scopes are declared by functions and not blocks (like in Ruby)
be careful not to have bias toward what you might think the scope is based on
past programming languages you know.

#### Four Ways To Call Functions:  
1.  As a function, normal straightforward manner using ()  
2.  As a method, which ties the invocation to an object, enabling OO
programming.  
3.  As a constructor, in which a new object is brought into being.  
4.  Via its apply() and call() which have special meaning.  

When calling a function arguments are passed into parameters in order:

```javascript
function whatever(a,b,c) {
...
}

whatever(1,2,3,4,5) // 4 and 5 wont be assigned to any parameters
whatever(1,2) // c is set to undefined
```
All function invocations are passed two implicit parameters: `arguments` and
`this`.  

`arguments` acts like an array of all the arguments passed into the function and
you can access elements with array notation: `arguments[0]`

`this` is referred to as the _function context_.  BEWARE it does NOT act like
`self` in Ruby.  `this` is declared by **how** it is invoked and NOT **where**
it is declared.  Depending on which of the 4 types of function invocation is
used `this` will act differently:

1.  As a function:  (Meaning it wasn't invoked as a method, as a constructor, or
using `call()` or `apply()`)  

Examples:  
```javascript
function ninja(){};
ninja();

var samurai = function(){};
samurai();
```

2.  As a method: (Meaning it was invoked off an object who defined it)

Example:
```javascript
var o = {};
o.whatever = function(){};
o.whatever();
```

Calling methods this way makes `this` refer to the object `o` instead of window.
Under the hood it's doing the same thing as a global function assigning this to
window.

3.  As a constructor: (Meaning we use the `new` keyword to invoke the function)

Example:
```javascript
function creep() { return this }
new creep();
```

What makes constructors special? When they are invoked the following happen:  
*  a new empty object is created.  
*  this object is passed to the constructor as the `this` paramter, and thus
    becomes the constructors function context.  
*  In the absence of any explicit return value, the new object is returned as
    the constructors value.  

```javascript
function Ninja() {
  this.skulk = function() { return this };
}

var ninja1 = new Ninja();
var ninja2 = new Ninja();

ninja1.skulk() // returns ninja1
ninja2.skulk() // returns ninja2
```

4.  Using `apply()` and `call()`: allows us to invoke a function and explicitly
specify any object we want as the function context.

Apply and Call exist for every function.  Because functions are first class
citizens they can have properties and methods just like any other object type.
They are created with the Function() constructor.

Using `apply()` we need to pass in two things: object to be used as function
context, and array of values to be used as function arguments.

Using `call()` is almost the same except you don't need to pass in an array of
arguments you just put them where they would normally go.

Example:
```javascript
function juggle() {
  var result = 0;
  for (var n = 0; n < arguments.length; n++) {
    result += arguments[n];
  }
  this.result = result;
}

var ninja1 = {}
var ninja2 = {}

juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2,5,6,7,8);

ninaj1.result // equals 10
ninaj2.result // equals 26
```

When to use apply vs. call.  If you have a bunch of unrelated arguments it makes
more sense to use call.  If the arguments are already in an array or easily made
into an array then apply is your choice.


### Scope With Functions

*  Variable declarations are in scope until the end of the function within which
    they're declared, regardless of block nesting.  

**Tip**: Functions can be forward-referenced, but not variable declarations.  



### Events  
**Events in JS**:  
*  Browser events, page finished loading or when it's unloaded  
*  User events, mouse clicks, mouse moves, keypresses  
*  Network events, responses to Ajax request  
*  Timer events, when a timeout expires or an interval fires  

The browser event loop is single threaded. Every event is placed into a FIFO
queue and handled in the order it was placed into the queue.

There is never a time when multiple events are being handled at once. 

The consequences of that is if there is one event that takes a really long time,
no other events can be triggered until that one is over.  Think of the bank
teller at the window analogy and you have someone who wants their financial
planning for the entire year.  

Order of operations:  
1.  Parse markup and set up DOM  
2.  Check for event at head of queue  
3.  If an event -> process it, otherwise step 2.  


