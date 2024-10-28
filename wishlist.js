document.querySelectorAll('.wishlist-btn').forEach(button => {
    button.addEventListener('click', () => {
        let giftName = button.parentElement.querySelector('h2').innerText;
        addToWishlist(giftName);
    });
});

document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        let giftName = button.parentElement.querySelector('h2').innerText;
        addToCart(giftName);
    });
});

function addToWishlist(gift) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(gift);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${gift} has been added to your wishlist!`);
}

function addToCart(gift) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(gift);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${gift} has been added to your cart!`);
}