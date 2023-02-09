# JS-ES6-classes-oops-mobile

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Mobile class is a constructor which is accepting values - 2 marks
 ✅ unlock pin is a private value- 2 marks
 ✅ get unlock pin works properly - 2 marks
 ✅ set unlock pin works properly - 2 marks
 ✅ send SMS function works properly - 1 mark

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- You need to complete the ```mobile``` class such that it fulfills the below criteria:
   1. It should be a class constructor which will accept parameters and create the following values:
     * model
     * number
     * unlockPin

   2. The unlock pin should be a private value in the class, which it cannot be exposed directly in child objects

   3. Create a get method with the name ```getUnlockPin``` which will return the value of unlock pin

   4. Create a set method with the name ```unlockPin``` which will mutate the value of unlock pin

   5. Create a ```sendSMS``` method which will get accept text message as param and return the same


## Boilerplate

- Do not change the given folder structure
- inside src, you will have mobile.js file that is where you need to write the mentioned methods
- you can find the testcase under ```__tests__ ``` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you  not to just submit it last minute
- try to keep one submission at a time
