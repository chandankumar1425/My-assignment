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

## Problem statement 1 [5 Marks]

Use proper array method such that the `getUsersObj()` returns the result in expected shape as shown in the following example: 


Example input:
```
let exampleInputArray1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
```

example invocation: 
```
let output = getUsersObj(exampleInputArray1);
console.log(output);
```

example output: 
```
{ John: 1, Pete: 2, Mary: 3 }
```


## Problem statement 2 [4 Marks]

Use proper array method such that the `getMassagedUsers()` returns the result in expected shape as shown in the following example: 


Example Input:
```
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let exampleInputArray2 = [ john, pete, mary ];
```

example invocation: 
```
let output2 = getMassagedUsers(exampleInputArray2);
console.log(output2)
```

example output: 
```
[
  { fullName: 'John Smith', id: 1 },
  { fullName: 'Pete Hunt', id: 2 },
  { fullName: 'Mary Key', id: 3 }
]
```