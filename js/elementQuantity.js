const quantityElement = document.querySelectorAll(".quantity-button");

// console.log(quantityElement);

for (let btn of quantityElement) {
    btn.addEventListener('click', function (e) {
        const amount = e.target.innerText === '+' ? 1 : -1;
        const quantityElement = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement.innerText);
        const newQuantity = Math.max(0, currentQuantity + amount);

        quantityElement.innerText = newQuantity;
    })
}