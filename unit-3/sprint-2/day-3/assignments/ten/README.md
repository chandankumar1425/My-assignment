- # JS-Swiggy-Constructor

  ## Submission Instructions [Please note]

  ## Maximum Marks - 10

  - The Submission should not contain spaces, for example /js-101 folder/eval will not work
  - Do not push node_modules and package_lock.json to github

  ```
   ✅ able to submit the app - 1 mark ( minimum score )
   ✅ UserInfo constructor should exist and able to create an object - 2 mark
   ✅ ServeIn function should create a new object and return the serveFood value binded with this object- 3 mark
   ✅ GenerateInvoice function should create a new object and return the billNote value binded with this object - 4 marks
  ```

  ## Installation

  - you can use any node version that works for you ( 14+ )
  - please make sure you do not push package-lock.json
  - Download and unzip the boilerplate
  - Navigate to the correct path
  - Run **npm install** to install the node modules
  - Run **npm test** for the test cases

  ## Description

  1. Create a **'UserInfo'** constructor, which will create a userInfo object with following properties:- (name, location).

  ```
  {
      name: "String",
      location: "String"
  }
  ```

  2. Create a function **'serveFood'** which will take 'food(String)' as a parameter, and it will return **"Serving {food value passed} to {this.name} in {this.location}"**.

  3. Here **'this'** will vary depending on which object this function is being called binded with. e.g.

  ```
  Serving Pizza to Amar in HSR Layout
  ```

  4. Create a function **'serveIn'** which will accept 'name', 'location' and 'food' values and it:-

     - Will create a new userInfo object.
     - will bind this object with serveFood function. (use call).
     - will return the statement returned by serveFood function.

  5. Create a function **'billNote'** which will take 'total(number)' as a parameter, and it will return **"{this.name}'s bill is INR {total}"**

  6. Here **'this'** will vary depending on which object this function is being called binded with. e.g.

     ```
     Amar's bill is INR 500
     ```

  7. Create a function **'generateInvoice'** which will accept 'name', 'location' , 'quantity' and 'price' values and it:-

     - Will create a new userInfo object.

     - will bind this object with generate function. (use apply). (total = quntity\*price)

     - will return the statement returned by **billNote** function.

     **Note:- Do not use any other names for the functions other than mentioned.**

     ####

  ## Boilerplate

  - Do not chnage the given folder structure
  - inside src you will swiggy.js file that is where you need to write the mentioned methods
  - you can find the testcase under `__tests__ ` folder

  #### General guidelines

  - The system on cp.masaischool.com may take between 1-20 minutes for responding,
  - so we request you to read the problem carefully and debug before itself
  - we also request you to not to just submit it last minute
  - try to keep one submission at a time
