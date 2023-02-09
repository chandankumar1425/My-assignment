function Listing(name, category, imageUrl, price) {}

function getFormData() {}

function addListing(input, category, image, price) {}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
