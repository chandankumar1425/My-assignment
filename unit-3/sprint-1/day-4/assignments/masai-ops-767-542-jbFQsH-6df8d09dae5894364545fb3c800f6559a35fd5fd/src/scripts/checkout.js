function submit() {
  let orderConfirm = document.getElementById("order-message");
  orderConfirm.textContent = "Your order is succesfully placed";
  localStorage.clear();
  setTimeout(() => {
    location.replace("index.html");
  }, 1000);
}
