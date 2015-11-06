## General Javascript Information



**Primary Data Types**:  
-  Primitive Types  
-  Reference Types  

**Primitive**: stored as simple data like strings/numbers
**Reference**: stored as objects, which are really just references to locations
in memory

Primitive data types are stored differently than in Ruby.  They arn't
technically objects even though JS does some work arounds to make them feel like
objects.

For example:

```javascript
var color1 = "red";
var color2 = color1;
```

If I change color1 to: `'blue'` it won't change color2.

**Identifying Primitive Types**: use the `typeof` method.  Like so:

```javascript
console.log(typeof "Spencer");  // "string"
console.log(typeof 10);  // "number"
console.log(typeof 5.1);  // "number"
console.log(typeof true);  // "boolean"
console.log(typeof undefined);  // "undefined"

// this one can be confusing
console.log(typeof null);  // "object"
```

To test to see if something is null do:
```javascript
console.log(value === null); // true of false
```