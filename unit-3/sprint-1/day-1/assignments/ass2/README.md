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

The function `studentData() {}` should return an object.

Parameters of studentData:
```
firstName: takes in a string value
lastName: takes in a string value
age: takes in a number value
marksArray: takes in an array of marks
After `marksArray` all the arguments passed to the students data will be considered as the students hobbies.
```

Example function invocation: 
```
studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');
```

In the above invocation, [50,60,70] is the students marks and 
the studnets hobbies are Singing, Coding & Meditating.

The object must have the following three properties: 

```
fullName: in the example invocation above, the fullName's value should be 'Vivek Agarwal'
age: age is equal to the third argument of age
hobbies: it is a array of hobbies. in the above invocation it would be ['Singing', 'Coding', 'Meditating']
```

The object must have the following two methods:

getInfo: In the invocation example above, it method would return the string value "Vivek Agarwal's age is 38."

getResult: 
If the average marks of the student is less than 50, it is expeted to return 'Result: FAIL'
If the average marks of the student is more than or equal to 50, it is expected to return 'Result: PASS'
in the invocation example above, it would return 'Result: PASS'
