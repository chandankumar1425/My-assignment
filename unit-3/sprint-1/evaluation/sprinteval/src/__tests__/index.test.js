import {
  studentData,
  categoriesDirectory,
  areas,
  massageArray,
  exampleInputArray,
} from "../index";
global.score = 1;

describe("Object properties and expected return", function () {
  let data = studentData(
    "Vivek",
    "Agarwal",
    38,
    [50, 60, 70],
    "Singing",
    "Coding",
    "Meditating"
  );
  let data2 = studentData("Will", "Smith", 54, [48, 49, 50], "A", "B", "C");

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

  let eo2 = [
    {
      productId: "52768",
      productTitle: "aaa",
      Category: "MainCourse",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "a", measure: "275g/6oz" },
        { ingredient: "b", measure: "25g/3oz" },
        { ingredient: "c", measure: "220g/7oz" },
        { ingredient: "d", measure: "25g/3oz" },
      ],
    },
    {
      productId: "53049",
      productTitle: "bbb",
      Category: "MainCourse",
      Area: "British",
      Ingredients: [
        { ingredient: "Milk", measure: "100ml" },
        { ingredient: "Oil", measure: "10ml" },
      ],
    },
    {
      productId: "52767",
      productTitle: "ccc",
      Category: "Starter",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "x", measure: "275g/6oz" },
        { ingredient: "y", measure: "25g/2½oz" },
        { ingredient: "z", measure: "2-4 tbsp" },
      ],
    },
  ];

  let exampleInputArray2 = [
    {
      idMeal: "52768",
      strMeal: "aaa",
      Category: 1,
      Area: 2,
      strIngredient1: "a",
      strIngredient2: "b",
      strIngredient3: "c",
      strIngredient4: "d",
      strIngredient5: "",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
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
      strMeasure1: "275g/6oz",
      strMeasure2: "25g/3oz",
      strMeasure3: "220g/7oz",
      strMeasure4: "25g/3oz",
      strMeasure5: "",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
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
      strMeasure20: null,
    },

    {
      idMeal: "53049",
      strMeal: "bbb",
      Category: 1,
      Area: 1,
      strIngredient1: "Milk",
      strIngredient2: "Oil",
      strIngredient3: "",
      strIngredient4: "",
      strIngredient5: "",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
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
      strMeasure1: "100ml",
      strMeasure2: "10ml",
      strMeasure3: "",
      strMeasure4: "",
      strMeasure5: "",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
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
      strMeasure20: "",
    },
    {
      idMeal: "52767",
      strMeal: "ccc",
      Category: 2,
      Area: 2,
      strIngredient1: "x",
      strIngredient2: "y",
      strIngredient3: "z",
      strIngredient4: "",
      strIngredient5: "",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
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
      strMeasure1: "275g/6oz",
      strMeasure2: "25g/2½oz",
      strMeasure3: "2-4 tbsp",
      strMeasure4: "",
      strMeasure5: "",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
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
      strMeasure20: null,
    },
  ];

  test("object returned by studentData to have properties", function () {
    expect(data && typeof data === "object").toBe(true);
    expect(data).toHaveProperty("fullName");
    expect(data).toHaveProperty("age");
    expect(data).toHaveProperty("hobbies");
    expect(data).toHaveProperty("getInfo");
    expect(data).toHaveProperty("getResult");
    expect(data2 && typeof data2 === "object").toBe(true);
    expect(data2).toHaveProperty("fullName");
    expect(data2).toHaveProperty("age");
    expect(data2).toHaveProperty("hobbies");
    expect(data2).toHaveProperty("getInfo");
    expect(data2).toHaveProperty("getResult");
    global.score += 1;
  });

  test("object returned by studentData to have methods", function () {
    expect(typeof data.getInfo).toBe("function");
    expect(typeof data.getResult).toBe("function");
    expect(typeof data2.getInfo).toBe("function");
    expect(typeof data2.getResult).toBe("function");
    global.score += 1;
  });

  test("getInfo method to return proper value", function () {
    expect(data.getInfo()).toBe("Vivek Agarwal's age is 38.");
    expect(data2.getInfo()).toBe("Will Smith's age is 54.");
    global.score += 1;
  });

  test("getResult method to return proper value", function () {
    expect(data.getResult()).toBe("Result: PASS");
    expect(data2.getResult()).toBe("Result: FAIL");
    global.score += 2;
  });

  test("array returned by massageArray to have property-value as expected", function () {
    let o1 = massageArray(exampleInputArray);
    let o2 = massageArray(exampleInputArray2);

    expect(o1[0].productId).toBe("52768");
    expect(o1[0].productTitle).toBe("Apple Frangipan Tart");
    expect(o1[0].Category).toBe("Dessert");
    expect(o1[0].Area).toBe("British");

    expect(o2[1].productId).toBe("53049");
    expect(o2[1].productTitle).toBe("bbb");
    expect(o2[1].Category).toBe("MainCourse");
    expect(o2[1].Area).toBe("British");

    global.score += 2;
  });

  test("array returned by massageArray to be as expected", function () {
    let o1 = massageArray(exampleInputArray);
    expect(o1).toMatchObject(eo1);

    let o2 = massageArray(exampleInputArray2);
    expect(o2).toMatchObject(eo2);

    global.score += 2;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});

