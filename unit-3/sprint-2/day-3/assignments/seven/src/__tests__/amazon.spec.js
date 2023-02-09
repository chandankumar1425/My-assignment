const { Listing, addListing } = require("../amazon");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;
// jest.setTimeout(10000);
jest.dontMock("fs");

describe("Ecommerce page", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("html elements are present in the html file", function () {
    expect(document.getElementById("name")).toBeTruthy();
    expect(document.getElementById("category")).toBeTruthy();
    expect(document.getElementById("image")).toBeTruthy();
    expect(document.getElementById("price")).toBeTruthy();
    expect(document.getElementById("submit")).toBeTruthy();
    global.score += 1;
  });

  it("constructor works properly", function () {
    var funcObj = new Listing(
      "Earphones",
      "electronics",
      "hhtps/image",
      "2000"
    );

    expect(funcObj.name).toBe("Earphones");
    expect(funcObj.category).toBe("electronics");
    expect(funcObj.imageUrl).toBe("hhtps/image");
    expect(funcObj.price).toBe("2000");
    expect(funcObj.sold).toBe(false);

    expect(funcObj.hasOwnProperty("sold")).toBe(true);

    global.score += 3;
  });

  it("local storage is able to store the data correctly", function () {
    addListing("Headset", "electronics", "hhtps/image", "2000");

    var cart = JSON.parse(localStorage.getItem("Products"));
    expect(cart[0].name).toBe("Headset");
    expect(cart[0].category).toBe("electronics");
    expect(cart[0].imageUrl).toBe("hhtps/image");
    expect(cart[0].price).toBe("2000");
    expect(cart[0].sold).toBe(false);

    global.score += 3;
  });

  it("local storage is able to store the data correctly-2", function () {
    addListing("phone", "electronics", "hhtps/picture", "19000");

    var cart = JSON.parse(localStorage.getItem("Products"));
    expect(cart[1].name).toBe("phone");
    expect(cart[1].category).toBe("electronics");
    expect(cart[1].imageUrl).toBe("hhtps/picture");
    expect(cart[1].price).toBe("19000");
    expect(cart[1].sold).toBe(false);

    global.score += 2;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
