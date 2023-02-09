import { productFactory, ProductConstructor, ProductClass } from "../index";
global.score = 1;

describe("productFactory", () => {
  let product;

  beforeEach(() => {
    product = productFactory("Product", 10);
  });

  it("should increase the price", () => {
    product.increasePrice(5);
    expect(product.price).toBe(15);
    global.score += 1;
  });

  it("should decrease the price", () => {
    product.decreasePrice(5);
    expect(product.price).toBe(5);
    expect(product.displayInfo()).toBe("Product costs Rs.5");
    global.score += 1;
  });

  it("should be a factory function", () => {
    // not working, passing for all
    expect(typeof productFactory).toBe("function");
    expect(productFactory.prototype.constructor).toBe(productFactory);
    expect(Object.getPrototypeOf(productFactory.prototype)).toBe(
      Object.prototype
    );
    expect(Object.getPrototypeOf(productFactory)).toBe(Function.prototype);
    global.score += 1;
  });
});

describe("productConstructor", () => {
  let product;

  beforeEach(() => {
    product = new ProductConstructor("Product", 10);
  });

  it("should increase the price", () => {
    product.increasePrice(5);
    expect(product.price).toBe(15);
    global.score += 1;
  });

  it("should decrease the price", () => {
    product.decreasePrice(5);
    expect(product.price).toBe(5);
    expect(product.displayInfo()).toBe("Product costs Rs.5");
    global.score += 1;
  });

  it("should be a constructor function", () => {
    // not working, passing for all
    expect(typeof ProductConstructor).toBe("function");
    expect(ProductConstructor.prototype.constructor).toBe(ProductConstructor);
    expect(Object.getPrototypeOf(ProductConstructor.prototype)).toBe(
      Object.prototype
    );
    expect(Object.getPrototypeOf(ProductConstructor)).toBe(Function.prototype);
    global.score += 1;
  });
});

describe("productClass", () => {
  let product;

  beforeEach(() => {
    product = new ProductClass("Product", 10);
  });

  it("should increase the price", () => {
    product.increasePrice(5);
    expect(product.price).toBe(15);
    global.score += 1;
  });

  it("should decrease the price", () => {
    product.decreasePrice(5);
    expect(product.price).toBe(5);
    expect(product.displayInfo()).toBe("Product costs Rs.5");
    global.score += 1;
  });

  it("should be a class", () => {
    // not working, passing for all
    expect(typeof ProductClass).toBe("function");
    expect(ProductClass.prototype.constructor).toBe(ProductClass);
    expect(Object.getPrototypeOf(ProductClass.prototype)).toBe(
      Object.prototype
    );
    expect(Object.getPrototypeOf(ProductClass)).toBe(Function.prototype);
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
