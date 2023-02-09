// The items should be stored in local storage with key :- “items”
let url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries";

cart_count();

showItems();
function showItems() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data, "res");
      append(res.data);
    });
}

function append(data) {
  let container = document.getElementById("items");
  data.forEach((el, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");

    let img = document.createElement("img");
    img.src = el.image;
    let p1 = document.createElement("p");
    p1.innerText = el.name;
    let p2 = document.createElement("p");
    p2.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.setAttribute("class", "_add_to_cart");
    btn.onclick = () => {
      addToCart(el);
    };

    div.append(img, p1, p2, btn);
    container.appendChild(div);
  });
}

function addToCart(el) {
  let data = JSON.parse(localStorage.getItem("items")) || [];

  data.push(el);

  localStorage.setItem("items", JSON.stringify(data));
  cart_count();
}

function cart_count() {
  let data = JSON.parse(localStorage.getItem("items")) || [];
  let c = document.getElementById("item_count");
  c.innerText = data.length;
}
