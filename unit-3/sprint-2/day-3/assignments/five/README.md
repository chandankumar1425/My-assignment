# JS-constructor-ecommerce -II

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ products are visible on DOM - 1 mark
 ✅ remove button is working properly on DOM - 2 marks
 ✅ remove button is working properly on local storage - 2 marks
 ✅ sold button is working properly on local storage - 2 marks
 ✅ sold button is working properly on DOM - 2 marks

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- index.html
- src
  - index.js
- `__tests__`
  - index.test.js
- README.md
- package.json

## Description :-

This is the extension of the above problem E-Commerce - I.

1. Create a page (index.html) to display all the products which are present in the database in grid format.

2. Each product should have two buttons :-

- Remove :- On clicking it should be removed from the database and changes should be reflected on DOM in real time.
- Sold :- On clicking which the sold value will toggle. If it is true it becomes false and vice versa.

2. While creating the cards please make sure You follow the below structure:-

- name(h3)
- category(p)
- price(p)
- remove(button)
- sold(button)

## Complete the following functions with given instructions:

- `removeProduct`: This accepts name of the product to be deleted, updated the DOM and localStorage in real time
- `sellProduct`: This accepts name of the product whose sold status needs to be toggled, updated the DOM and localStorage in real time

## Things to follow :-

#### use only `textContent` to append the data to the DOM

1. The listed products should have class as “product”.
2. Remove button should have Id as `remove`.
3. Sold button should have Id as `sold`.
4. If the sold value is true, the button colour should be `red`.
5. If the sold value is false, the button colour should be `green`.

   **Note:- Do not use any other names for the methods other than mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename amazon2.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
