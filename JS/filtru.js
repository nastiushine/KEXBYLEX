
//----------------  SCROLL  ------------------ 
window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY > 500)
})
function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

}

//-----------------------FILTRAREA----------------------------


function displayProducts(products) {
    const productList = document.getElementById('catalog');
    productList.innerHTML = '';


    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const productElement = document.createElement('div.catalog-item');
        if (products[i].addimage === "") {
            productElement.innerHTML = `
        <div class="catalog-item" id="${product.id}" data-category="${product.category}">
        <div class="product"><img src="${product.image}" alt="" class="product-img">
        <video src="${product.addvideo}" preload="auto" no-controls autoplay loop playsinline muted
                class="product-add"></video>    
                  
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}
            </p>
        </div>
        <div class="product-bottom">
            <span class="product-price-value">${product.price}лей</span>
            <span class="product-cart" onclick="addToCart(event)"><span class="material-symbols-outlined">
                    add_shopping_cart
                </span></span>
    
        </div>
      `;
        }
        else {
            productElement.innerHTML = `
      <div class="catalog-item" id="${product.id}" data-category="${product.category}">
      <div class="product"><img src="${product.image}" alt="" class="product-img">
        <img src="${product.addimage}" alt="" class="product-add"> 
                
      </div>
      <div class="product-content">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-description">${product.description}
          </p>
      </div>
      <div class="product-bottom">
          <span class="product-price-value">${product.price}лей</span>
          <span class="product-cart" onclick="addToCart(event)"><span class="material-symbols-outlined">
                  add_shopping_cart
              </span></span>
  
      </div>
    `;
        }

        productList.appendChild(productElement);
    }
}


displayProducts(products);


// --------------SEARCH------------------
function searchProducts(query) {

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));

    displayProducts(filteredProducts);
}


const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', event => {
    const query = event.target.value;
    searchProducts(query);
});


displayProducts(products);




function filterProductsByCategory(category) {

    if (category === 'all') {
        displayProducts(products);
    } else {

        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

const sortByElement = document.getElementById('sort-by');
sortByElement.addEventListener('change', () => {
    const sortByValue = sortByElement.value;

    switch (sortByValue) {
        case 'price-asc':
            sortByPriceAsc();
            break;
        case 'price-desc':
            sortByPriceDesc();
            break;
        case 'name-asc':
            sortByNameAsc();
            break;
        case 'name-desc':
            sortByNameDesc();
            break;

        default:
            displayProducts(products);
    }
});


function sortByPriceAsc() {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    displayProducts(sortedProducts);
}


function sortByPriceDesc() {
    const sortedProducts = products.sort((a, b) => b.price - a.price);
    displayProducts(sortedProducts);
}


function sortByNameAsc() {
    const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
    displayProducts(sortedProducts);
}


function sortByNameDesc() {
    const sortedProducts = products.sort((a, b) => b.name.localeCompare(a.name));
    displayProducts(sortedProducts);
}



function filterProductsByCategory(category) {

    if (category === 'all') {
        displayProducts(products);
    } else {

        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}
const categoryButtons = document.querySelectorAll('.category-button');
const sortForm = document.querySelector('#sort-form');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        if (category === 'all') {
            sortForm.classList.remove('hidden');
        } else {
            sortForm.classList.add('hidden');
        }
    });
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProductsByCategory(category);


        categoryButtons.forEach(btn => {
            btn.classList.remove('is-active');
        });


        button.classList.add('is-active');
    });
});



displayProducts(products);





