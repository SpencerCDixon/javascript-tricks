## Object Oriented Javascript

Objects in JS are basically just namespaced key/value pairs.

```javascript
var objWithProperties = { color: "red", name: "zach" }
var objColor = objWithProperties.color;
var objColor = objWithProperties["color"];
```

Avoid creating global scope:
```javascript
funciton foo(arg1, arg2) {
  return arg1 + arg2;
}

// instead create funcitons anonymously and assign to a local variable this will
// keep your global namespace cleaner.
var foo = function(arg1, arg2) {
  return arg1 + arg2;
}
```

Creating default values for arguments:

```javascript
var multiplyBySomething = function(value, multiplier) {
  multiplier = multiplier || 3;
  return value * multiplier;
}
```

Weird way to call methods an object has:
```javascript
var person = {
  firstName: "Zach";
  lastName: "Paleozogt";
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
x = person.fullName();      // "Zach Paleozogt"
x = person["fullName"]();   // Looks weird, still works”
```

Understanding variable scope:
```javascript
var x = "global";
console.log(x);  // outputs global

var scopinator = function() {
  console.log(x); // outputs undefined
  var x = "local";
  console.log(x); // outputs local
}

/*
If we delete the var x = 'local' then all three console.logs
would equal global.  This is called hoisting in javascript
*/
```

Great example of using Module pattern to create a class like clone in JS:
```javascript
var users = function() {
  var knownUsers = [];

  return {
    addUser: function(name) {
      knownUsers.push(name);
    },
    mostRecentUser: function() {
      return knownUsers[knownUsers.length - 1];
    }
  }
}();

users.addUser("Barney Rubble");
users.addUser("Wilma Flintstone");
console.log(users.mostRecentUser());
```

