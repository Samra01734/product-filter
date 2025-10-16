let products = {
  data: [
    { productName: "Regular White T-shirt", category: "Topwear", price: "30", image: "T-shirt.jpg" },
    { productName: "Black Polo Shirt", category: "Topwear", price: "35", image: "poloshirt.jpg" },
    { productName: "Casual Checked Shirt", category: "Topwear", price: "40", image: "Casual Checked Shirt.jpg" },
    { productName: "Blue Denim Jeans", category: "Bottomwear", price: "45", image: "jeans-blue.jpg" },
    { productName: "Slim Fit Chinos", category: "Bottomwear", price: "50", image: "chinos.jpg" },
    { productName: "Casual Shorts", category: "Bottomwear", price: "25", image: "shorts.jpg" },
    { productName: "Leather Jacket", category: "Jacket", price: "80", image: "jacket3.jpg" },
    { productName: "Denim Jacket", category: "Jacket", price: "70", image: "jacket2.jpg" },
    { productName: "Winter Puffer Jacket", category: "Jacket", price: "90", image: "jacket1.jpg" },
    { productName: "Stylish Wrist Watch", category: "Watch", price: "60", image: "watch3.jpg" },
    { productName: "Smart Digital Watch", category: "Watch", price: "85", image: "watch2.jpg" },
    { productName: "Luxury Gold Watch", category: "Watch", price: "120", image: "watch1.jpg" }
  ]
};

// Generate product cards dynamically
for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.setAttribute("alt", i.productName);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// 🧭 Filter by category
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  let cards = document.querySelectorAll(".card");

  // Highlight active category
  buttons.forEach(btn => {
    if (value.toUpperCase() === btn.innerText.toUpperCase()) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Show or hide cards based on category
  cards.forEach(card => {
    if (value === "all" || card.classList.contains(value)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

// 🔍 Search product by name
function searchProduct() {
  let searchInput = document.getElementById("search-input").value.toUpperCase().trim();
  let productNames = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // Remove active category (search is separate)
  document.querySelectorAll(".button-value").forEach(btn => btn.classList.remove("active"));

  productNames.forEach((name, index) => {
    if (name.innerText.includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
}

// 🏁 Default: show all products on load
window.onload = () => filterProduct("all");
