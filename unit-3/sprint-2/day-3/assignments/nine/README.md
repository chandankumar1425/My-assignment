# JS-Product-Constructor

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Product constructor should exist and able to create object out of it :- 3 mark
 ✅ Calling changePrice method should change the product price :- 3 mark
 ✅ Calling the toggleStatus method should toggle the sold status :- 3 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

1. Create a **'Product'** constructor, which will create a product object with the following properties:- (name, brand, price, description, sold)

2. 'sold' status will be false by default. e.g.

```
{
    name: "String",
    brand: "String",
    price: "Number",
    description: "String",
    sold: false
}
```

3. Create a method **'changePrice'** in Product prototype, which will accept new price value and change the existing one.

4. Create a method **'toggleStatus'** in Product prototype, which will toggle the sold status of the product.

   **Note:- Do not use any other names for the methods other than mentioned.**

####

## Boilerplate

- Do not chnage the given folder structure
- inside src you will product.js file that is where you need to write the mentioned methods
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
