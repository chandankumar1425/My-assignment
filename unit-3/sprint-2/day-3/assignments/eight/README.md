# JS-Prototypes-Artists

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ values from constructor are inherited correctly- 2 mark
 ✅ get profession method works - 2 marks
 ✅ methods added using .prototype property works properly - 3 marks
 ✅ Values inherited correctly in Object.create method - 2 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- You need to create following values & methods for the given **Artists** constructor function and ***artistsObject***

- the Artists constructor should have initial values (to be accepted as parameters)
   1. Name
   2. Skill,
   3. Profession

- the artistsObject should have initial values (to be accepted as parameters)
   1. Name
   2. Skill,
   3. Profession
 
 
  ### Methods

  1. Create a **getProfession** method will return the value of profession.
  2. Add another method ***print***- which will return "I am (artist name)". You are supposed to create this method using .prototype only

  
  ### Requirements
  
  1. Create a new object using new keyword and make sure that all values and methods are inherited from the Artists constructor in the same
  2. Create a new Object using Object.create from artists object and make sure that all values from artistsObject are accessible 


  **Note:- Do not use any other names for the methods other than mentioned.**
  
  #### 

## Boilerplate

- Do not chnage the given folder structure
- inside src you will artist.js file that is where you need to write the mentioned methods
- you can find the testcase under ```__tests__ ``` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
