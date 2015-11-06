# Object Oriented JS Notes



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

