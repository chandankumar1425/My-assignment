# JS-groceries-Display

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should be able to make the fetch request successfully  2 marks
 ✅ Check if 10 items are present on DOM  - 1 marks
 ✅ onclicking the add to cart  button products should be added to the cart and the cart count should be incremented in navbar - 2 marks
 ✅ check if data added to localstorage successfully-1 marks
 ✅ onclicking cart in navbar should redirect to cart.html and should show the total cart value - 2 mark
 ✅ check remove functionality is working - 1 marks
 ✅ items should be removed from the local storage - 1 mark
 ✅ should visit checkout page and onclicking the checkout button  order message should be displayed and cart should be cleared- 1 mark

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules

## Folder structure

- index.html
- cart.html
- checkout.html
- src
  - scripts
    - index.js
    - cart.js
    - checkout.js
- styles
  - index.css
  - cart.css
  - checkout.css
- README.md
- package.json
- cypress
  - e2e (where you can see the test fle)

### You haven't taught cypress to run the testcases locally , you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

## Problem Statement :-

You have to make a mini grocery ordering app. Where users will be able to add groceries to their cart and place orders.

## Description :-

1. Create an index.html page (Home page)
2. Add a simple navbar which shows login, signup, Items and cart for navigation. You do not need to create login or signup functionality.
3. On clicking on cart, the user should be redirected to cart.html.
4. The home page shows a list of grocery items.
5. Use the API provided below to get the list of grocery items.
#### API: https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries
6. Each item should show its name, image, price and add to cart button.
7. Users should be able to add the items to cart when clicked on add to cart button.
8. Show a cart count in div to show how many items in a cart, on top RHS.
9. Items added to cart will be stored in LocalStorage so that you can retrieve them and show them on cart.html page.
10. Create a cart.html where users can see their order and total cart value. Show total price in div as shown in sample submission.
11. There should be a `checkout` button which will take you to the checkout page.
12. Users should also be able to remove items from their cart.
13. Add a remove button to each item in the cart.
14. Create a checkout.html page, where the user can fill in the name, number and address and a button to place the order
15. On clicking the `Place Order` button display the following message clear the local storage and cart count should become 0.

`Your order is successfully placed`

## Things to follow :-

- Navbar should have cart link with `id =“go_to_cart”`
- Count div `id =“item_count”`
- Append the items inside div with `id =“items”`
- Item card will have `class ="item"`
- Add to cart button with `class =“add_to_cart”`
- The items should be stored in local storage with `key= “items”`
- Cart total price in cart.html H2 tag with `id =“cart_total”`
- Append the items in local storage to a div with `id =“cart”`
- Each item should have remove button with `class =“remove”`
- Cart page should have Checkout Button with `id = “checkout”`
- In checkout.html page name, number and address should have ids as `“name”, “number” and “address”` respectively.
- Checkout page will have a place order button with `id= place-order` and the button text should be `Place Order`
- onclicking the place order button display this message `Your order is successfully placed` in `h4` tag with id =`order-message` clear the local storage and cart count should become 0.

### Home Page

![](https://i.imgur.com/SgM21ux.png)

### Cart Page

![](https://i.imgur.com/WTuraqE.png)

### Checkout Page

![](https://i.imgur.com/V8E4Yxu.png)


## Note:-

#### Focus more on the functionality of your app. Avoid spending more time in styling. You can do that once you finish the end to end flow of app. All the best!

#### Strictly follow the template. Cross check HTML Id's.

**Note:- Do not use any other names for the methods other than mentioned.**

####

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time