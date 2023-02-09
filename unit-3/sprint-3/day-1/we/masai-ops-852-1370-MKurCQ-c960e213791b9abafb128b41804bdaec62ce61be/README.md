# JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm i
```

## Start only Backend server
```
npm run server
```

## Start only Frontend server
```
npm run start
```

## Start both BE & FE in a single command
```
npm run watch
```

# Important files
```
.
├── index.html
├── scripts
│   └── main.js
└── styles
    └── style.css
```

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Rubrics

```
✅ able to submit the app - 1 mark ( minimum score )
✅ 
✅ 
✅ 
✅ 
✅ 
```
### You haven't been taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

### @todo: Test cases are not written yet.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

# Problem statements

### Problem 1. Display list of employees on page load

fetch url: `/employees`

UI: 

![picture 1](https://res.cloudinary.com/drxuo575c/image/upload/v1675747598/coding-problems/8aecaeb5bfd1a7e5bf27ab17de0035763f6e9514b32fd9d3ed6c683048aa463c.png)  

Markup:

![picture 2](https://res.cloudinary.com/drxuo575c/image/upload/v1675747711/coding-problems/e1cf768a4a36ff94018fdb6089614a916c862ad2ebcea8e260e07d04b59f00c0.png)  


### Problem 2. Ability to add new Employee

![picture 3](https://res.cloudinary.com/drxuo575c/image/upload/v1675747867/coding-problems/b24cfe7b0effd2cbaaf454ce8ed4fdf8502cf1663e73efd6d3adc3204b887596.png)  

the page must not reload
the list must update

### Problem 3. Ability to update all the fields of an employee

![picture 4](https://res.cloudinary.com/drxuo575c/image/upload/v1675747938/coding-problems/ff96c8ddfaa0393bae079dc958473f0bb5653295b5b85931c8a8bc38decbce96.png)  

- on click of edit button in the list, all the fields should populate
- page must not reload
- the list must update

### Problem 4. Ability to update only the salary

![picture 5](https://res.cloudinary.com/drxuo575c/image/upload/v1675748168/coding-problems/07e3da4dec7488558d85c9297bc5a8d49c84327559ef6b306cb1e837001d5038.png)  

- page must not reload
- the list must update


### Problem 5. Ability to sort data

![picture 6](https://res.cloudinary.com/drxuo575c/image/upload/v1675748264/coding-problems/3ea345f31939babeb349a79cbc5546d77fb657022bf9c30b2a0c44157a4ff5f8.png)  

- page must not reload
- the list must update

### Problem 6. Ability to filter data

![picture 7](https://res.cloudinary.com/drxuo575c/image/upload/v1675748306/coding-problems/c4829c94a5f2e404de2991400f18e6332162c5484cb2da45ed5ae087eeb10d87.png)  

- page must not reload
- the list must update

### Problem 7. Ability to register a new user

![picture 8](https://res.cloudinary.com/drxuo575c/image/upload/v1675748419/coding-problems/a1c4fbc3bb6f8d9899003e3e88f6af9e08fbb532eb540d59079b83cf31ce8a8c.png)  


### Problem 8. Ability to login an existing user

![picture 9](https://res.cloudinary.com/drxuo575c/image/upload/v1675748564/coding-problems/d49b6ed133a45bdaf5a882cb12c55cfdc8e43abf34811098ff3ad57b0f3bbae7.png)  


### Problem 9. Ability to fetch todos


### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
- If you try to use VSCodes live server, it wont work. Use the npm commands provided in this file only.
