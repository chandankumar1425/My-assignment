import Product from "../product";
global.score = 1;

test("Product constructor should exist and able to create object out of it", () => {
  expect(Product).toBeDefined();
  const p = new Product("Shoe", "Puma", 5000, "Sport shoe");
  expect(p).toBeInstanceOf(Product);
  expect(p).toEqual({
    name: "Shoe",
    brand: "Puma",
    price: 5000,
    description: "Sport shoe",
    sold: false,
  });

  global.score += 3;
});

test("Calling changePrice method should change the product price", () => {
  expect(Product).toBeDefined();
  const p = new Product("Shoe", "Puma", 5000, "Sport shoe");
  expect(p.changePrice).toBeDefined();
  expect(typeof p.changePrice).toBe("function");
  p.changePrice(7000);
  expect(p.price).toBe(7000);

  global.score += 3;
});

test("Calling the toggleStatus method should toggle the sold status", () => {
  expect(Product).toBeDefined();
  const p = new Product("Shoe", "Puma", 5000, "Sport shoe");
  expect(p.toggleStatus).toBeDefined();
  expect(typeof p.toggleStatus).toBe("function");
  p.toggleStatus();
  expect(p.sold).toBe(true);
  p.toggleStatus();
  expect(p.sold).toBe(false);

  global.score += 3;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
