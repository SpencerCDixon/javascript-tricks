## Javascript Ninja

(Information from JS ninja that will need to be organized)


### General

### Testing

Good tests:
*  Are repeatable  
*  Are simple; focus on one thing and remove as much html, css, and js as
    possible  
*  Independent; should execute in isolation

**Callback**: any function that is to be called at a later time.  Elementary
example:

```javascript
function useless(callback) {
  return callback();
}
```

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


