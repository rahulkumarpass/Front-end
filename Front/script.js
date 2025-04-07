// Deal timer countdown
function updateTimer() {
    const timerBlocks = document.querySelectorAll('.timer-block');
    let hours = parseInt(timerBlocks[0].innerText);
    let minutes = parseInt(timerBlocks[1].innerText);
    let seconds = parseInt(timerBlocks[2].innerText);

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
                hours = 0;
                minutes = 0;
                seconds = 0;
            }
        }
    }

    timerBlocks[0].innerText = hours.toString().padStart(2, '0');
    timerBlocks[1].innerText = minutes.toString().padStart(2, '0');
    timerBlocks[2].innerText = seconds.toString().padStart(2, '0');
}

// Update timer every second
setInterval(updateTimer, 1000);

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.btn-primary');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productTitle = this.closest('.product-info').querySelector('.product-title').innerText;
        alert(`${productTitle} added to cart!`);
    });
});

// Buy now functionality
const buyNowButtons = document.querySelectorAll('.btn-secondary');
buyNowButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productTitle = this.closest('.product-info').querySelector('.product-title').innerText;
        alert(`Proceeding to checkout with ${productTitle}`);
    });
});

// Categories hover effect
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function () {
        const category = this.querySelector('h5').innerText;
        alert(`Browsing ${category} category`);
    });
});

// Newsletter subscription
const subscribeButton = document.querySelector('.input-group .btn-primary');
subscribeButton.addEventListener('click', function () {
    const emailInput = this.previousElementSibling;
    const email = emailInput.value.trim();

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});