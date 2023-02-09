## Installation
```
npm i
```

## Test 
```
npm t
```

## Test (Watch mode)
```
npm t -- --watchAll
```

## file structure
most of your work would happen in `src/index.js` file.

## Problem statement. 1
```
// function add takes in two arguments a & b
// it is expected to return the sum of two numbers
// it is a dummy function just to demonstrate a passing test case
// no action required from students for it. The test is already passing.

function add(a, b) {
  return a + b;
}
```

## Problem statement. 2
```
// The function greet should return "Will Smith's age is 54."
// use template string
function greet() {
  let firstName = "Will";
  let lastName = "Smith";
  let age = 54;

  let greeting = `<replace it with your code>`;
  return greeting;
}
```
## Problem statement. 3
```
// interpolate(2,3) is expected to return `2 + 3 = 5`
// interpolate(5,2) is expected to return `5 + 2 = 7`
function interpolate(n1, n2) {
  return `<replace it with your code>`;
}
```

## Problem statement. 4
```
// nuller is expected to return boolean value null 
function nuller() {

}
```

## Problem statement. 5
```
// objectFactory('Raj', 26) is expected to return {Raj: 26}
// objectFactory('Vijay', 24) is expected to return {Vijay: 24}
function objectFactory(fname, age) {
  let obj = {};
  // your code starts

  // your code ends
  return obj;
}
```