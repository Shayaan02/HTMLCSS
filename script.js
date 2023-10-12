function toggleCart() {
  var cart = document.getElementById("cart");
  cart.style.display = cart.style.display === "none" ? "block" : "none";
}
function addToCart(name, imageSrc, price, shoeType) {
  var cartList = document.getElementById("cart-items-list");
  var newItem = document.createElement("li");

  var cartItem = document.createElement("div");
  cartItem.className = "cart-item";

  var image = document.createElement("img");
  image.src = imageSrc;
  image.alt = name;
  image.style.width = "150px";

  var itemDetails = document.createElement("div");
  itemDetails.className = "item-details";

  var itemName = document.createElement("p");
  itemName.textContent = name;

  var itemPrice = document.createElement("p");
  itemPrice.textContent = price;

  var itemType = document.createElement("p");
  itemType.textContent = shoeType;

  itemDetails.appendChild(itemName);
  itemDetails.appendChild(itemPrice);
  itemDetails.appendChild(itemType);

  cartItem.appendChild(image);
  cartItem.appendChild(itemDetails);

  newItem.appendChild(cartItem);
  cartList.appendChild(newItem);
}

function closeCart() {
  var cart = document.getElementById("cart");
  cart.style.display = "none";
}
