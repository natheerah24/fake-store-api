let item = [];
const url = "https://fakestoreapi.com/products";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    items = data;
    console.log(data);
    showItems(items);
  });
function showItems(products) {
  document.querySelector("#products").innerHTML = "";
  items.forEach((item, i) => {
    document.querySelector(
      "#products"
    ).innerHTML += `<img onClick="toggleActive('#items${i}')" src=${item.image} style="width:200px; height:200px; padding:20px; ">`;
  });
}
function addItems() {
  let items = {
    catergory: document.querySelector("#category").value,
    description: document.querySelector("#description").value,
    productId: document.querySelector("#productId").value,
    image: document.querySelector("#image").value,
    price: document.querySelector("#price").value,
    rating: document.querySelector("#rating").value,
    title: document.querySelector("#title").value,
  };
  items.push(items);
  showItems(items);
  console.log(items);
}
// filter
let items = [];
const prodContainer = document.querySelector("#products");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    items = data;
    console.log(data);
    showItems(items);
  });
function showItems(products) {
  prodContainer.innerHTML = "";
  products.forEach((product) => {
    prodContainer.innerHTML += `
    <div class="product">
    <img src=${product.image} />
    <h2>${product.title} - <small>${product.category}</small></h2>
    <p>R${product.price}</p>
    </div>
        `;
  });
}
function addProduct() {
  const newProduct = {
    title: document.querySelector("#title").value,
    category: document.querySelector("#category").value,
    image: document.querySelector("#image").value,
    price: document.querySelector("#price").value,
    rating: document.querySelector("#rating").value,
    description: document.querySelector("#description").value,
    id: items.length + 1,
  };
  console.log(newProduct);
  items.push(newProduct);
  showItems(items);
}
const textSearch = (e) => {
  const text = e.target.value;
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );
  showItems(filteredItems);
};
const categoryFilter = (e) => {
  const category = e.target.value;
  if (category === "all") {
    return showItems(items);
  }
  const filtered = items.filter((item) => item.category === category);
  return showItems(filtered);
};
const priceSort = (e) => {
  const direction = e.target.value;
  const sorted = items.sort((a, b) => a.price - b.price);
  if (direction === "asc") {
    showItems(sorted);
  } else {
    showItems(sorted.reverse());
  }
};
const nameSort = (e) => {
  const direction = e.target.value;
  const sorted = items.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  if (direction === "asc") {
    showItems(sorted);
  } else {
    showItems(sorted.reverse());
  }
};
