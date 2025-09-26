const productContainer = document.querySelector(".product_view");
    console.log(productContainer);

    //Hjælper os med at hente ting fra adressen
const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");
console.log(id);


    //Henter ting fra API
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
    .then((response) => response.json())
    .then(showProduct)
    //Har en functionsreference som modtager "product", den ved godt at den skal kaldes med "product"
        
        
        function showProduct(product) {
//console.log(product.articletype);
// arrow function => 

productContainer.innerHTML = `

<ol class="breadcrumbs">
    <li><a href="index.html">Categories</a></li>
    <li style="margin-left: 5px;">></li>
    <li><a href="produktliste.html">Products</a></li>
    <li style="margin-left: 5px;">></li>
    <li>${product.brandname} ${product.variantname}</li>
</ol>

    <div class="grid-2-4">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="PUMA Backpack">
        <div class="flex-col">
            <div>
                <h3 style="font-size: 30px;">${product.brandname} ${product.variantname}</h3>
                <p>${product.brandbio}</p>
            </div>
            <div>
                <h3>Product Information</h3>
                <p>${product.description}</p>
            </div>
            <div>
                <dl>
                    <dt>Category</dt>
                    <dd>${product.category}</dd>
                    <dt>Color</dt>
                    <dd>${product.basecolour}</dd>
                    <dt>Inventory number</dt>
                    <dd>${product.id}</dd>
                </dl>
            </div>
            <div>
                <h3>${product.brandname} ${product.variantname}</h3>
                <p class="category">${product.articletype} | ${product.brandname} </p>
                <p>${product.price},-</p>
                <button class="basket">Add to basket</button>
            </div>
        </div>
        
        
    </div>
    
        `;
    };
