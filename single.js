const productContainer = document.querySelector(".product_view");
    console.log(productContainer);

    //Hjælper os med at hente ting fra adressen
const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");
console.log(id);


    //Henter ting fra API
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
    .then((response) => response.json())
    .then((product) => {
        //console.log(product.articletype);
    

productContainer.innerHTML = `

<ol class="breadcrumbs">
    <li><a href="index.html">Categories</a></li>
    <li><a href="produktliste.html">Products</a></li>
    <li>PUMA Backpack</li>
</ol>

    <div class="grid-2-4">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="PUMA Backpack">
        <div class="flex-col">
            <div>
                <h3>Product Information</h3>
                <p>This PUMA backpack is a practical and stylish solution for everyday use, <br>helping you to easily organize and transport your belongings. <br> The backpack is equipped with a spacious main compartment that closes with <br>a two-way zipper, so you can quickly access your belongings wherever you are going.</p>
            </div>
            <div>
                <dl>
                    <dt>Model name</dt>
                    <dd>PUMA Backpack</dd>
                    <dt>Color</dt>
                    <dd>Black</dd>
                    <dt>Inventory number</dt>
                    <dd>${product.id}</dd>
                </dl>
            </div>
            <div>
                <h3>PUMA Backpack</h3>
                <p class="category">${product.articletype} | PUMA</p>
                <p>${product.price},-</p>
                <button class="basket">Add to basket</button>
            </div>
        </div>
        
        
    </div>
    
        `;
    });
