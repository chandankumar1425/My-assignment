# JS-constructor-ecommerce

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ html elements are present in the html file- 1 mark
 ✅ constructor works properly - 3 marks
 ✅ local storage is able to store the data correctly - 3 marks
 ✅ local storage is able to store the data correctly-2 - 2 mark
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
  - amazon.js
  - `__tests__`
    - amazon.spec.js
- README.md
- package.json

## Description

After graduating from Masai, you got placed at Amazon as a senior developer. After joining, the company assigned you a task to create an admin panel for the sellers so that they can list their items easily on the site. The company also told you to use constructor functions and it is mandatory.

1.  Make an ECommerce admin panel dashboard (index.html).
2.  This dashboard will be used by the seller for listing the items on the website.
3.  Make a simple input form which will accept the following entries :-

    - Product name
    - Category
    - Image url
    - Price
    - Sold (boolean value) - this should be not present in your form but should be present in your object (product data) with default value false

4.  Use constructor functions to create object data for the product.
5.  Add a submit event to form
6.  on submitting the form the product should be added to the local storage.(make sure you are using event.preventDefault() can refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event))
7.  Use local storage as a database for the seller.
8.  Once you add the product it should be added to the database in the form of an array of products.

## Things to follow :-

#### use only `textContent` to append the data to DOM 


1. IDs for the input fields :-

   - Product name : - name
   - Category : - category
   - Image Url : - image
   - Price : - price

2. Form should hav id - `form`
3. Submit button should have Id as `submit`
4. Products should be stored in the local storage with key `Products`.

## You need to complete the following functions:

- `Listing` : This will be your constructor function which you need to use to create more objects
- `getFormData` : Gather data from your form here and call `addLisiting` with form values as arguments
- `addLisiting` : Save the listing in your local storage as an array of objects

**Note:- Do not use any other names for the methods other than mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename amazon.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
