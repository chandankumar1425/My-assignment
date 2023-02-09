const { Listing, addListing, removeProduct, sellProduct } = require("../index");
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

  it("products are visible on DOM", function () {
    addListing("earphone", "electronic", "hhtps://", "200", "male");
    var parent = document.getElementById("products");
    expect(parent.children.length).toBe(1);
    expect(parent.children[0].textContent).toBe(
      "earphoneelectronic200RemoveSold"
    );

    var btns = document.querySelectorAll("button");
    expect(btns.length).toBe(2);
    expect(btns[0].textContent).toBe("Remove");
    expect(btns[1].textContent).toBe("Sold");

    global.score += 1;
  });

  it("remove button is working properly on DOM", function () {
    addListing("phone", "electronic", "hhtps://", "19000", "female");
    removeProduct("phone");

    var parent = document.getElementById("products");

    expect(parent.children.length).toBe(1);
    expect(parent.children[0].textContent).toBe(
      "earphoneelectronic200RemoveSold"
    );

    global.score += 2;
  });

  it("remove button is working properly on local storage", function () {
    addListing("phone", "electronic", "hhtps://", "19000", "female");
    removeProduct("phone");

    var products = JSON.parse(localStorage.getItem("Products"));
    expect(products.length).toBe(1);

    expect(products[0].name).toBe("earphone");
    expect(products[0].category).toBe("electronic");

    global.score += 2;
  });

  it("sold button is working properly on local storage", function () {
    addListing("gum", "food", "http", "5", "male");
    sellProduct("gum");

    var products = JSON.parse(localStorage.getItem("Products"));
    expect(products.length).toBe(2);

    expect(products[1].name).toBe("gum");
    expect(products[1].category).toBe("food");
    expect(products[1].sold).toBe(true);

    global.score += 2;
  });

  it("sold button is working properly on DOM", function () {
    sellProduct("gum");
    var btns = document.querySelectorAll("button");

    expect(btns[1].style.backgroundColor).toBe("green");
    expect(btns[3].style.backgroundColor).toBe("green");

    sellProduct("gum");
    var btns = document.querySelectorAll("button");

    expect(btns[1].style.backgroundColor).toBe("green");
    expect(btns[3].style.backgroundColor).toBe("red");

    global.score += 2;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
