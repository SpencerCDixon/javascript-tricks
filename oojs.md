# Object Oriented JS Notes

Primary Data Types:  
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

You can add or remove properties from objects in JS at anytime.  For example:
```javascript
var object1 = new Object();
var object2 = object1;

object1.myCustomProperty = "Awesome"!;
console.log(object2.myCustomProperty); // "Awesome!"
```

An alternative way to calling methods than dot notation is bracket notation:
```javascript
var array = [];
array.push(1234);

// can become
var array = [];
array["push"](1234);
```

How to check whether or not an object belongs to a class:
```javascript
var items = [];
var object = {};

functino reflect(value) {
  return value;
}

console.log(items instanceof Array); // true
console.log(object instanceof Object); // true
console.log(reflect instanceof Function); // true
```

`instanceof` can also identify inherited types, which means that all of those
examples above will also return `true` for `instanceof Object`

**Note**: `instanceof` doesn't play nice with Arrays from different frames
because the instances are technically inheriting from different Array objects.
Instead you can use `isArray` like so:

```javascript
var items = [];
console.log(Array.isArray(items)); // true
```

### Primitive Wrapper Types - how primitive data types act like objects
```javascript
var name = "Spencer"
var firstChar = name.charAt(0);
console.log(firstChar); // "S"

// Behind the scenes the interpreter is doing this:

var name = "Spencer"
var temp = new String(name);
var firstChar = temp.charAt(0);
temp = null;  // for garbage collection
console.log(firstChar); // "S"
```

