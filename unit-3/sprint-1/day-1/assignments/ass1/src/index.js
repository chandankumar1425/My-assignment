// function takes in two arguments a & b
// it is expected to return the sum of two numbers
// it is a dummy function just to demonstrate a passing test case
// no action required from students for it. The test is already passing.
function add(a, b) {
  return a + b;
}

// The function should return "Will Smith's age is 54."
// use template string
function greet() {
  let firstName = "Will";
  let lastName = "Smith";
  let age = 54;

  let greeting = `${firstName} ${lastName}'s age is ${age}.`;
  return greeting;
}

// interpolate(2,3) is expected to return `2 + 3 = 5`
// interpolate(5,2) is expected to return `5 + 2 = 7`
function interpolate(n1, n2) {
  return `${n1} + ${n2} = ${n1+n2}`;
}

// nuller is expected to return boolean value null 
function nuller() {
return null
}

// objectFactory('Raj', 26) is expected to return {Raj: 26}
// objectFactory('Vijay', 24) is expected to return {Vijay: 24}
function objectFactory(fname, age) {
  let obj = {};
  // your code starts
  obj[fname] = age;
  // your code ends
  return obj;
}

export { add, greet, interpolate, nuller, objectFactory };