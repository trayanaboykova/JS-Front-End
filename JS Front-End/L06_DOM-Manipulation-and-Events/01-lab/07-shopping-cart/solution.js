function solve() {
    let textArea = document.querySelector('textarea');
    let checkoutButton = document.querySelector('.checkout');
    let addButtons = Array.from(document.querySelectorAll('.add-product'));
    let cart = [];
    let total = 0;

    addButtons.forEach((btn) => {
        btn.addEventListener('click', addToCart);
    });

    checkoutButton.addEventListener('click', checkout);

    function addToCart(e) {
        let productElement = e.currentTarget.parentElement.parentElement;
        let title = productElement.querySelector('.product-title').textContent;
        let price = Number(productElement.querySelector('.product-line-price').textContent);

        cart.push(title);
        total += price;

        textArea.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
    }

    function checkout() {
        let uniqueProducts = Array.from(new Set(cart));

        textArea.value += `You bought ${uniqueProducts.join(', ')} for ${total.toFixed(2)}.`;

        disableAllButtons();
    }

    function disableAllButtons() {
        Array.from(document.querySelectorAll('button')).forEach(btn => btn.disabled = true);
    }
}