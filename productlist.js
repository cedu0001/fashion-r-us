console.log("hej");

const productListContainer = document.querySelector(".category_list_container");
    console.log(productListContainer);

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const header = (document.querySelector("h2").textContent = category);

    //Henter ting fra API
    fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
    .then((response) => response.json())
    .then(data => showProducts(data))
        
function showProducts(products) {
console.log(products);
    
    products.forEach(element =>{
        console.log(element);
  
    productListContainer.innerHTML += `
  <div class="product_item ${element.soldout ? "sold-out" : ""}">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="${element.productdisplayname}">
    <h3>${element.productdisplayname}</h3>
    <p class="category">${element.category}</p>

    ${element.discount ? `
      <p class="price">${element.price},-</p>
      <div class="sale">
        <p class = "discount">Now ${Math.round(element.price - element.price * element.discount / 100)},-</p>
        <p>-${element.discount}%</p>
      </div>
    ` : `
      <p class="price">${element.price},-</p>
    `}

    <a href="produkt.html?id=${element.id}">See Item</a>
  </div>
`;

    })

  
    };