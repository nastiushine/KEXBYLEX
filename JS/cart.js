let cart = [] || JSON.parse(localStorage.getItem('cart'));

function addToCart(event) {
    const productElement = event.target.closest('.catalog-item');
    const product = {
        id: productElement.dataset.id,
        image: productElement.querySelector('.product-img').src,
        name: productElement.querySelector('.product-title').textContent,
        price: parseFloat(productElement.querySelector('.product-price-value').textContent),
        quantity: 1,
    };
    const existingProductIndex = cart.findIndex(p => p.name === product.name);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCartWheelRes(num) {
    const product = {
        id: products[num].id,
        image: products[num].image,
        name: products[num].name,
        price: products[num].price,
        quantity: 1,
    };
    const existingProductIndex = cart.findIndex(p => p.name === product.name);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}


function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartUI();
}

loadCart();

function updateCartUI() {
    const cartElement = document.querySelector('.cart');
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart && savedCart.length > 0) {
        cart = savedCart;
    }
    cartElement.innerHTML = '';
    let totalFoodPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        const productElement = document.createElement('div');
        productElement.className = 'items-cart';
        productElement.innerHTML = `
                <div class="cart-item">
                    <img src="${product.image}" alt="" class="cart-item-img">
         
                   <div class="cart-item-quantity">
                        <button class="cart-quantity-btn minus">-</button>
                        <span class="cart-quantity">${product.quantity}</span>
                        <button class="cart-quantity-btn plus">+</button>
                    </div>  
                    <div class="cart-item-name">${product.name}</div>
                     <div class="cart-item-price">${product.price}лей </div>
                 </div>
                     
            
                    </div>
                 </div>`;
        totalFoodPrice += product.price * product.quantity;
        cartElement.appendChild(productElement);
    }
    const basketQuantityElement = document.querySelector('.basket-quantity');
    if (cart.length > 0) {
        basketQuantityElement.style.display = 'inline-block';
        basketQuantityElement.textContent = cart.length;
    } else {
        basketQuantityElement.style.display = 'none';
        basketQuantityElement.textContent = '0';
    }


    let deliveryPrice = totalFoodPrice >= 400 ? 0 : 35;
    let totalCartPrice = totalFoodPrice + deliveryPrice;

    const deliveryPriceElement = document.querySelector('.cart-delivery-price');
    deliveryPriceElement.textContent = `Доставка: ${deliveryPrice} лей`;

    const foodPriceElement = document.querySelector('.cart-food-price');
    foodPriceElement.textContent = `Заказ: ${totalFoodPrice} лей`;

    const totalCartPriceElement = document.querySelector('.cart-total-price');
    totalCartPriceElement.textContent = `Общая сумма: ${totalCartPrice} лей`;


}

function increaseProductQuantity(event) {
    const productElement = event.target.closest('.cart-item');
    const productIndex = cart.findIndex(p => p.name === productElement.querySelector('.cart-item-name').textContent);
    cart[productIndex].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function decreaseProductQuantity(event) {
    const productElement = event.target.closest('.cart-item');
    const productIndex = cart.findIndex(p => p.name === productElement.querySelector('.cart-item-name').textContent);
    if (cart[productIndex].quantity > 1) {
        cart[productIndex].quantity--;
    } else {
        cart.splice(productIndex, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}



const cartElement = document.querySelector('.modal-content');
cartElement.addEventListener('click', event => {
    if (event.target.classList.contains('plus')) {
        increaseProductQuantity(event);
    }
    if (event.target.classList.contains('minus')) {
        decreaseProductQuantity(event);
    }
});

function calculateCartTotal() {
    let cartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        cartTotal += product.price * product.quantity;
    }
    return cartTotal;
}
const cartTotal = calculateCartTotal();
const deliveryPrice = cartTotal > 400 ? 0 : 35;
const total = cartTotal + deliveryPrice;

document.querySelector('.cart-food-price').textContent = `Заказ: ${cartTotal} лей`;
document.querySelector('.cart-delivery-price').textContent = `Доставка: ${deliveryPrice} лей`;
document.querySelector('.cart-total-price').textContent = `Общая сумма: ${total} лей`;

