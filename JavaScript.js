// Array to store cart items in
const cartData = [];

document.addEventListener('DOMContentLoaded', () => {
    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('#addToCartBtn');
    
    // Add event listeners to each button
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(index);
        });
    });
});

function addToCart(index) {
    // Product details can be defined here or extracted dynamically
    const products = [
        { name: 'T-shirt with tape details', price: 300.00 },
        { name: 'Blue Jeans color blue', price: 900.00 },
        { name: 'Red checks with linings', price: 699.00 },
        { name: 'black t T-shirt', price: 200.00 },
        { name: 'Green checks with black linings', price: 450.00 },
        { name: 'blue short jeans', price: 1050.00 },
        { name: 'T-shirt with color orange', price: 150.00 },
        { name: 'Black Jeans details', price: 899.00 }
    ];

    // Get product details
    const product = products[index];
    const existingProduct = cartData.find(item => item.name === product.name);

    // Increase quantity if the item is already in cart, else add new item
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cartData.push({ ...product, quantity: 1 });
    }

    // Render cart and update status message
    renderCartItems();
    document.getElementById('cartStatus').textContent = 'Added to cart!';
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';  // Clear existing items

    if (cartData.length === 0) {
        document.getElementById('empty-cart').style.display = 'block';
        document.getElementById('checkout-btn').style.display = 'none';
    } else {
        document.getElementById('empty-cart').style.display = 'none';
        document.getElementById('checkout-btn').style.display = 'block';

        cartData.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price} x ${item.quantity}</p>
                </div>
                <button onclick="removeItem(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        updateTotalPrice();
    }
}

function updateTotalPrice() {
    const total = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = total.toFixed(2);
}

function removeItem(index) {
    cartData.splice(index, 1);  // Remove item from the cart array
    renderCartItems();  // Re-render the cart
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Your checkout logic here
});
