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

## Maximum marks - 10
- ✅ object returned by studentData to have properties (1 marks)
- ✅ object returned by studentData to have methods (1 marks)
- ✅ getInfo method to return proper value (1 marks)
- ✅ getResult method to return proper value (2 marks)
- ✅ array returned by massageArray to have property-value as expected (2 marks)
- ✅ array returned by massageArray to be as expected (2 marks)

## Problem statement. 1

The function `studentData() {}` should return an **object**.

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
the students hobbies are Singing, Coding & Meditating.

The **object** that the function returns must have the following three properties: 

```
- `fullName` : in the example invocation above, the fullName's value should be 'Vivek Agarwal'
- `age` : age is equal to the third argument of age
- `hobbies` : it is a array of hobbies. in the above invocation it would be ['Singing', 'Coding', 'Meditating']
```

The **object** that the function returns must have the following two *methods*:

`getInfo`: In the invocation example above, it method would return the string value "Vivek Agarwal's age is 38."

`getResult`: 
If the average marks of the student is less than 50, it is expected to return 'Result: FAIL'
If the average marks of the student is more than or equal to 50, it is expected to return 'Result: PASS'
in the invocation example above, it would return 'Result: PASS'

## Problem statement. 2

The function `massageArray()` is expected to return an array of objects. 

Parameter of `massageArray()`: `inputArray` of type array

### Provided `areas`:
```
let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];
```
### Provided `categories`
```
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};
```
### Example Input Array: 
```
let exampleInputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
    strIngredient1: "digestive biscuits",
    strIngredient2: "butter",
    strIngredient3: "Bramley apples",
    strIngredient4: "butter, softened",
    strIngredient5: "caster sugar",
    strIngredient6: "free-range eggs, beaten",
    strIngredient7: "ground almonds",
    strIngredient8: "almond extract",
    strIngredient9: "flaked almonds",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/3oz",
    strMeasure3: "200g/7oz",
    strMeasure4: "75g/3oz",
    strMeasure5: "75g/3oz",
    strMeasure6: "2",
    strMeasure7: "75g/3oz",
    strMeasure8: "1 tsp",
    strMeasure9: "50g/1¾oz",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
    strIngredient1: "Milk",
    strIngredient2: "Oil",
    strIngredient3: "Eggs",
    strIngredient4: "Flour",
    strIngredient5: "Baking Powder",
    strIngredient6: "Salt",
    strIngredient7: "Unsalted Butter",
    strIngredient8: "Sugar",
    strIngredient9: "Peanut Butter",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "200ml",
    strMeasure2: "60ml",
    strMeasure3: "2",
    strMeasure4: "1600g",
    strMeasure5: "3 tsp",
    strMeasure6: "1/2 tsp",
    strMeasure7: "25g",
    strMeasure8: "45g",
    strMeasure9: "3 tbs",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: ""
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
    strIngredient1: "plain flour",
    strIngredient2: "chilled butter",
    strIngredient3: "cold water",
    strIngredient4: "raspberry jam",
    strIngredient5: "butter",
    strIngredient6: "caster sugar",
    strIngredient7: "ground almonds",
    strIngredient8: "free-range egg, beaten",
    strIngredient9: "almond extract",
    strIngredient10: "flaked almonds",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/2½oz",
    strMeasure3: "2-3 tbsp",
    strMeasure4: "1 tbsp",
    strMeasure5: "125g/4½oz",
    strMeasure6: "125g/4½oz",
    strMeasure7: "125g/4½oz",
    strMeasure8: "1",
    strMeasure9: "½ tsp",
    strMeasure10: "50g/1¾oz",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  }
];
```

### Expected output with the above input: 
```
  let eo1 = [
    {
      productId: "52768",
      productTitle: "Apple Frangipan Tart",
      Category: "Dessert",
      Area: "British",
      Ingredients: [
        { ingredient: "digestive biscuits", measure: "175g/6oz" },
        { ingredient: "butter", measure: "75g/3oz" },
        { ingredient: "Bramley apples", measure: "200g/7oz" },
        { ingredient: "butter, softened", measure: "75g/3oz" },
        { ingredient: "caster sugar", measure: "75g/3oz" },
        { ingredient: "free-range eggs, beaten", measure: "2" },
        { ingredient: "ground almonds", measure: "75g/3oz" },
        { ingredient: "almond extract", measure: "1 tsp" },
        { ingredient: "flaked almonds", measure: "50g/1¾oz" },
      ],
    },
    {
      productId: "53049",
      productTitle: "Apam balik",
      Category: "Dessert",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "Milk", measure: "200ml" },
        { ingredient: "Oil", measure: "60ml" },
        { ingredient: "Eggs", measure: "2" },
        { ingredient: "Flour", measure: "1600g" },
        { ingredient: "Baking Powder", measure: "3 tsp" },
        { ingredient: "Salt", measure: "1/2 tsp" },
        { ingredient: "Unsalted Butter", measure: "25g" },
        { ingredient: "Sugar", measure: "45g" },
        { ingredient: "Peanut Butter", measure: "3 tbs" },
      ],
    },
    {
      productId: "52767",
      productTitle: "Bakewell tart",
      Category: "Dessert",
      Area: "British",
      Ingredients: [
        { ingredient: "plain flour", measure: "175g/6oz" },
        { ingredient: "chilled butter", measure: "75g/2½oz" },
        { ingredient: "cold water", measure: "2-3 tbsp" },
        { ingredient: "raspberry jam", measure: "1 tbsp" },
        { ingredient: "butter", measure: "125g/4½oz" },
        { ingredient: "caster sugar", measure: "125g/4½oz" },
        { ingredient: "ground almonds", measure: "125g/4½oz" },
        { ingredient: "free-range egg, beaten", measure: "1" },
        { ingredient: "almond extract", measure: "½ tsp" },
        { ingredient: "flaked almonds", measure: "50g/1¾oz" },
      ],
    },
  ];
```

### Mapping of properties from input to expected output
- idMeal maps to productId
- strMeal maps to productTitle
- Category maps to Category, but the id turns into the name
- Area maps to Area, but the id turns into the name
- finally, 20 strIngredients & 20 strMeasures turns into a single entry of Ingredients which is an array of object. Each object of Ingredients contains a key called ingredient and another key called measure.

### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time