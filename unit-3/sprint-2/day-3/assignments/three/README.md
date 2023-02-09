# JS-Library-LLD

## Submission Instructions [Please note]

## Maximum Marks: 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Book class should create book object - 1 mark
 ✅ Section class should create the section with given properties - 1 mark
 ✅ Calling the addBook method of the section should add the book to the books array - 1 mark
 ✅ If a book is already present in the section, it should not be added - 1 mark
 ✅ Library class should create library object with given properties - 1 mark
 ✅ Adding a section to the library should add the section to the array - 1 marks
 ✅ If a section is already present in the library, it should not be added - 1 mark
 ✅ addBook in library class should add the book to the section which the book belongs to - 2 marks

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- You need to create a low-level design for a library.
- You need to write the following class with the given methods and instructions

1. Create a class **Book**

- The constructor function of class `Book` should accept the name, author, and section
- It will create an object with the following structure

```
{
    name : "String",
    author : "String",
    section : "String"
}
```

2. Create a class **Section**

- The constructor function of class `Section` accept the name and create an object in the following format

```
{
    name : "String",
    books : [] //for storing books
}
```

- Create method **addBookToSection** which will take the book object which is an instance of Book class as an input and add it to the books array.
- A book will not be added if it is already present in a particular section
  Note:- **Books with the same name but the different author will be considered as different**

3. Create a class **Library**

- The constructor function of class `Library` should accept the name and create an object in the following format.

```
{
    name : "String",
    sections : [] //for storing different sections
}
```

- Create method **addSection** which will take the section object which is an instance of Section class created above as input and add it to the sections array.
- A section will not be added if it is already present in the library.
- create method **addBookToLibrary** which will take the book object which is an instance of Book class as input and add it to the section where the book belongs to.
  Note:- It will first find that particular section in the library and add the book into it.
  - the book with sam ename and author should not be added again (use `addBookToSectiion` method created above to achieve  this)

**Note:- Do not use any other names for the methods other than those mentioned.**

- Do not change the given folder structure
- inside src, you will find the library.js file which is where you need to write the mentioned methods
- you can find the test case under \***\*tests\*\*** folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to submit it last minute
- try to keep one submission at a time
